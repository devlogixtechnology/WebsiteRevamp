# syntax=docker/dockerfile:1.7
#
# Multi-stage build for the DevLogix site (Next.js standalone output).
#
#   docker build -t devlogix-web .                      # production image (default target: runner)
#   docker build --target dev -t devlogix-web:dev .     # hot-reload dev image (see docker-compose.yml)
#
# NEXT_PUBLIC_* values are inlined into the JS bundle at BUILD time by Next.js, so they are build
# args here, not runtime env vars: changing them means rebuilding the image.
#   --build-arg NEXT_PUBLIC_API_URL=https://api.devlogix.com/api/v1   (unset = built-in mock API)
#   --build-arg NEXT_PUBLIC_SITE_URL=https://www.devlogix.com          (canonical URL / sitemap / OG)

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
# libc6-compat: some prebuilt native binaries (e.g. the SWC compiler) expect glibc symbols.
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- deps: install once, cached until the lockfile changes ----------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# ---- dev: source is bind-mounted by docker-compose, only node_modules is baked in -----------
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]

# ---- builder: compile the app ----------------------------------------------------------------
FROM base AS builder
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SITE_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Unset/empty build args fall back to the built-in defaults (mock API, www.devlogix.com).
RUN npm run build

# ---- runner: minimal, non-root production image ----------------------------------------------
FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs
# .next must be writable by the app user: the image optimizer caches resized images in .next/cache.
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# Uses the app's own health route (src/app/api/v1/health); node's built-in fetch, so no curl needed.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/api/v1/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]

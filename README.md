# Devlogix Website Revamp

This repository contains the frontend for our website revamp.

Picking up work here? See [CONTRIBUTING.md](CONTRIBUTING.md) for where things go (component
folders, data-layer conventions, design tokens) and [CLAUDE.md](CLAUDE.md) for the design system,
known handoff issues, and accessibility/SEO requirements.

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Framer Motion (scroll entrance animation)
- Storybook + Vitest (component smoke tests, accessibility gate, and plain unit tests)
- Playwright (E2E: navigation, forms, responsive, accessibility)
- Docker (multi-stage image on Next.js standalone output + Compose profiles for dev and E2E)
- GitHub Actions (`.github/workflows/ci.yml`) — lint, build, Docker image smoke test, unit tests, and E2E run
  on every PR into `main`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Pages: `/` (home), `/about`, `/industries`, `/services` (+ 5 service detail pages), `/blog`
(+ post pages), `/contact`, `/careers`.

## Backend

The Contact and Careers forms post to `/api/v1/contact` and `/api/v1/careers/apply`. By default
(no env var set) these are served by this app's own route handlers under `src/app/api/v1/`,
which mirror the real backend's request/response contract exactly — so the site runs and its
forms work end-to-end with **no backend clone or setup required**.

To point at the real Express backend instead, copy `.env.local.example` to `.env.local` and set
`NEXT_PUBLIC_API_URL` (e.g. `http://localhost:5000/api/v1` for a locally running backend, or a
deployed URL). See `src/lib/api/config.ts`. Blog content stays on local static data
(`src/data/blogs.ts`) regardless — the backend contract explicitly excludes blog/content
endpoints pending a Sanity CMS integration.

## Docker

The whole project runs in containers — no local Node install needed. Requires Docker with Compose v2.

```bash
docker compose up --build web               # production image → http://localhost:3000
docker compose --profile dev up dev         # hot-reload dev server (source bind-mounted)
docker compose --profile test run --rm e2e  # Playwright suite inside the official Playwright image
```

Or without Compose:

```bash
docker build -t devlogix-web .
docker run --rm -p 3000:3000 devlogix-web
```

- **Image**: multi-stage build (`Dockerfile`) on `node:22-alpine` using Next.js `output: "standalone"`,
  so the runtime image carries only the traced server, `public/`, and static assets — no
  `node_modules` install, no dev dependencies. It runs as a non-root user and has a `HEALTHCHECK`
  against `GET /api/v1/health`.
- **Backend**: by default the container serves the built-in mock API routes, so it works
  standalone. To point it at the real Express backend, set the build arg
  (`NEXT_PUBLIC_API_URL=http://host.docker.internal:5000/api/v1 docker compose build web`, or
  `docker build --build-arg NEXT_PUBLIC_API_URL=… .`). `NEXT_PUBLIC_*` values are inlined into the
  JS bundle at **build** time, so they are build args, not runtime env vars — changing them means
  rebuilding the image. The backend's origin is automatically allow-listed in the CSP
  `connect-src` (see `next.config.ts`).
- **Compose variables** (shell env or a `.env` next to `docker-compose.yml`; not `.env.local`,
  which is only read by `npm run dev` on the host): `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`,
  `WEB_PORT` (default 3000), `PLAYWRIGHT_VERSION` (must match `@playwright/test`, currently 1.63.0).
- **Dev profile caveat**: file-change detection through Windows/macOS bind mounts can lag even with
  polling enabled. If hot reload feels stuck, run `npm run dev` on the host instead.
- **CI** builds the image and smoke-tests the running container (health check, homepage, image
  optimization) on every PR — the `docker-build` job in `.github/workflows/ci.yml`.

## Testing

```bash
npm run build          # production build — must pass (this runs the full TypeScript check too;
                        #   don't run `tsc --noEmit` standalone before a build/dev has run at
                        #   least once — Next generates ambient types like `LayoutProps` into
                        #   .next/types/, so a fresh checkout fails tsc with "Cannot find name
                        #   'LayoutProps'" even on correct code)
npm run lint            # ESLint (Next + Storybook rules)
npm test                # everything below except E2E (Storybook stories + plain unit tests)
npm run test:storybook  # component smoke tests + a11y gate (Storybook stories via Vitest)
npm run test:unit       # plain Vitest unit tests (src/**/*.test.ts) — validation, data helpers
npm run test:e2e        # Playwright: nav/links, contact + careers forms, responsive, axe-core
npm run test:e2e:ui     # same, with the Playwright UI runner
npm run storybook       # component gallery at http://localhost:6006
```

All of the above run on every pull request into `main` via `.github/workflows/ci.yml`, split
across four parallel jobs (`lint-and-build`, `docker-build`, `unit-tests`, `e2e-tests`).

## Reference material

`/Development Material/` (gitignored, not in this repo) holds the Figma exports, developer
handoff doc, and SEO audit this build was implemented against — see `CLAUDE.md` for the full
brief, known handoff issues, and design tokens.

## Team

We are Squad Orion.

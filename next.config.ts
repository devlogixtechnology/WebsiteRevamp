import type { NextConfig } from "next";

// Next.js dev mode (Turbopack/webpack HMR, React DevTools stack traces) needs 'unsafe-eval' to
// function at all — production never uses eval(), so the stricter policy only applies there.
const scriptSrc = ["'self'", "'unsafe-inline'", ...(process.env.NODE_ENV !== "production" ? ["'unsafe-eval'"] : [])];

// The contact/careers forms post to NEXT_PUBLIC_API_URL when it points at a separate backend
// (see src/lib/api/config.ts). `connect-src 'self'` alone would make the browser block those
// requests, so the backend's origin has to be allow-listed too. Unset = same-origin mock routes.
const apiOrigin = (() => {
  try {
    return process.env.NEXT_PUBLIC_API_URL ? new URL(process.env.NEXT_PUBLIC_API_URL).origin : null;
  } catch {
    return null;
  }
})();

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc.join(" ")}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com",
      `connect-src 'self'${apiOrigin ? ` ${apiOrigin}` : ""}`,
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Emits a self-contained server (.next/standalone) with only the traced runtime dependencies,
  // which is what the Docker image ships instead of the full node_modules tree.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

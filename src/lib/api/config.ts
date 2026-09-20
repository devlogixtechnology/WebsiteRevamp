/**
 * Dev vs. production backend switch.
 *
 * Unset `NEXT_PUBLIC_API_URL` (the default) → API_BASE_URL resolves to the relative "/api/v1",
 * which hits this Next.js app's own route handlers under src/app/api/v1/ as a same-origin mock
 * that mirrors the real backend's request/response contract exactly (see
 * DEVELOPMENT MATERIAL/DevLogix_Backend_API_Contract.md). That means the site runs and its forms
 * work end-to-end with zero setup — no need to clone/run the real Express backend to develop.
 *
 * Set NEXT_PUBLIC_API_URL (e.g. http://localhost:5000/api/v1 for a locally running backend, or
 * a deployed staging/production URL) to point the exact same client code at the real backend
 * instead — nothing else in the app needs to change.
 */
// An empty value counts as unset: Docker Compose and `.env` files pass "unset" variables through
// as empty strings, and `"" ?? "/api/v1"` would keep the empty string (a blank API base URL).
const CONFIGURED_API_URL = process.env.NEXT_PUBLIC_API_URL?.trim() || undefined;

export const API_BASE_URL = (CONFIGURED_API_URL ?? "/api/v1").replace(/\/$/, "");

export const USING_MOCK_BACKEND = !CONFIGURED_API_URL;

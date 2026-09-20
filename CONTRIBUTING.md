# Contributing to DevLogix Website Revamp

This is a quick orientation for anyone (human or agent) picking up work in this repo. It
covers *where things go* and *why* — the conventions that aren't obvious from reading a single
file in isolation. For design tokens, the Figma handoff's known issues, accessibility/SEO
requirements, and testing priorities, see [CLAUDE.md](CLAUDE.md) — that file is the source of
truth for standards; this one is about applying them consistently across a codebase multiple
people touch in parallel.

## Before adding a new component

**Check `src/components/ui/` and `src/components/ui/form/` before creating a new primitive.**
This codebase previously ended up with two parallel, non-interoperable implementations of
`Container`, `Checkbox`, `Select`, and `Textarea` — one set built by an earlier session, a
second set built later without anyone checking the first set still existed. Both shipped, both
got imported in different places, and nobody could tell which one was "the" component to reach
for. That's now cleaned up, but it's cheap to reintroduce: five minutes of searching (`Grep` for
the component name) before writing a new file avoids re-creating it.

### Folder purposes

- `src/components/ui/` — generic primitives (Button, Container, Accordion, IconBox, Kicker, ...).
  No page or section should know about layout composition here, just the primitive's own props.
- `src/components/ui/form/` — form-specific field components (TextField, TextArea, Select,
  Checkbox, PillGroup, FileUpload, FormStatus). These carry a `tone` prop (`"light" | "dark"`)
  because the same form (see `ContactForm.tsx`) renders on both a white card and a dark glass
  panel. If you need a plain input/select for something that *isn't* a form field (e.g. a filter
  bar — see `FilterInput`/`FilterSelect` in `ui/`), that's a legitimately different component;
  give it a name that doesn't collide with the form-field one.
- `src/components/cards/` — card-shaped content units (BlogCard, ServiceCard, TeamCard, ...).
- `src/components/layout/` — structural chrome: `Header`, `Footer`, `Section`.
- `src/components/sections/` — page sections composed from the above (Hero, ValuesGrid,
  ContactForm, ...). A page under `src/app/` should mostly just assemble sections in order; if a
  page file is doing a lot of layout/markup work itself rather than delegating to a section
  component, that's a sign the section boundary is in the wrong place.

## Where content/data belongs

**Page content that could plausibly change without a code change belongs in `src/data/`, not
inline in the page file.** `src/data/blogs.ts` and `src/data/servicesData.ts` are the reference
pattern: typed exports, a page imports and loops over them. This isn't just tidiness — it's what
makes swapping static content for a real backend/CMS fetch later a one-file change instead of a
rewrite (see `src/lib/api/config.ts` and `README.md` for how the contact/careers forms already do
exactly this swap via `NEXT_PUBLIC_API_URL`).

Two rules that follow from this:

1. **Icons in data files are string keys, not component references.** `LucideIcon` components
   can't survive a trip through JSON (a real API/CMS response). Add new icons to the
   `ICONS` map in `src/lib/icons.ts`, reference them from data as `icon: "landmark"`, and resolve
   the string to a component with `getIcon()` at the page level, right before handing props to a
   section component. See `src/app/about/page.tsx` or `src/app/industries/page.tsx` for the
   pattern.
2. **Small, genuinely page-local constants are fine to leave inline** — don't manufacture a data
   file for three lines of copy that will only ever be read by one component (e.g.
   `ContactInfoPanel`'s office address/phone). Use judgment: if it's a list of 4+ items, has a
   shape a CMS would plausibly own, or gets reused, it belongs in `src/data/`.

## Design tokens — don't hand-type values that already have a name

Design tokens live in `src/app/globals.css` under `@theme`, generated from
`DevLogix Design System v1.0` (see CLAUDE.md). Before writing an arbitrary Tailwind value
(`bg-[#...]`, `text-[16px]`, `font-['SomeFont']`):

- **Check whether it's already a token** (`brand-teal`, `brand-navy`, `brand-teal-tint-light`,
  ...) or an **exact match for Tailwind's default palette** (`sky-400`, `emerald-500`, `red-500`,
  etc. all have real names — don't retype their hex). A past sweep found several components
  hand-typing Tailwind's own default colors as arbitrary hex, and two components duplicating the
  reserved "success state" teal tint as raw hex instead of the token that already existed for it.
- **If a color/value recurs across ≥2 components with the same decorative role** (not covered by
  the documented palette), add it to `@theme` in `globals.css` as a new named token rather than
  repeating the literal. See `--color-accent-blue` for the pattern.
- **If it's genuinely one-off, single-component, generative/decorative data** (e.g. a field of
  randomly-varied particle colors for one animation), a local named constant at the top of that
  file is fine — it doesn't need to become a global token. The bar is "not scattered," not
  "everything must be global."
- **Only two fonts are loaded sitewide**: Poppins (`font-sans`, the default — don't redeclare it)
  and Plus Jakarta Sans (`font-jakarta`, for stat numbers / uppercase kicker badges only, see the
  `HANDOFF-AMBIGUOUS` note in `layout.tsx`). Don't introduce a third without loading it via
  `next/font/google` first — an unloaded `font-['SomeName']` class silently falls back to the
  browser default and nobody notices until an audit catches it.
- **Framer Motion's `animate` prop is a documented, legitimate exception**: it needs literal,
  interpolatable color values, not `var(--...)` references, so hex is correct there (see the
  comment in `AiDeliveryStepsSection.tsx`). If you hit a similar hard constraint, leave a comment
  explaining it rather than silently deviating — the next person (or the next audit) needs to be
  able to tell "justified exception" from "someone forgot."

### Teal, shadows and glows

- **Never type the brand teal/navy as hex or `rgba()`** — not `#0d938c`, not `rgba(13,147,140,.4)`,
  not `text-teal-300`. Use the token classes (`text-brand-teal`, `bg-brand-teal/10`,
  `border-brand-teal-hover/40`). The Tailwind `/NN` opacity modifier covers alpha for classes.
- **Pick the teal by the surface it sits on**: `brand-teal-dark` for text/links on white or light
  surfaces (`brand-teal` is only 3.77:1 on white and fails AA); `brand-teal-hover` for text on dark
  surfaces; `brand-teal` for borders, icons and large text. `ui/Kicker` already encodes this via
  its `tone` prop — use it instead of hand-rolling a kicker. Stateful components (e.g. the
  header's dark → white on scroll) must swap the teal with the surface, not just the neutrals.
- **Shadows and glows come from tokens** in `globals.css`: `shadow-card` / `shadow-card-hover`
  (white cards), `shadow-glow-sm|md|lg` (teal halos on dark surfaces), `drop-shadow-glow` (text
  and icon halos). They are built with `color-mix()` from the palette, so retuning a brand color
  retunes every shadow. For a one-off gradient that needs a palette color at partial alpha, use
  `color-mix(in_srgb,var(--color-brand-teal-hover)_35%,transparent)` inside the arbitrary value,
  not an `rgba()` copy. Plain black/white alpha (`black/40`, `rgba(255,255,255,.08)`) is neutral
  and fine.
- **Poppins is loaded at weights 400–700 only.** `font-extrabold`/`font-black` on Poppins text
  silently falls back to the nearest loaded weight — use `font-bold`. Plus Jakarta Sans is loaded
  at 500–800, so `font-extrabold` is valid with `font-jakarta`. Note that CLAUDE.md's Subheadline
  spec says `font-light` (300), which is not loaded either and therefore renders as 400; adding
  weight 300 in `layout.tsx` would make the spec render as written (and thinner) — a design call,
  not a drive-by change.

## Docker

`docker compose up --build web` runs the production image; see the Docker section of `README.md`
for the dev/e2e profiles. Two things to remember when touching config: `NEXT_PUBLIC_*` variables
are inlined at build time (so they are Docker *build args*), and any new env var read by the app
should treat an empty string as unset — Compose and `.env` files pass blanks through (see
`src/lib/api/config.ts`). CI builds the image and smoke-tests the running container.

## Images

New images go under `public/images/` in a folder matching what they're for, not dumped flat into
`public/images/services/` regardless of content (that folder currently also holds the site's
unused logo SVGs — dead weight worth clearing out if you're touching that area). Name files
descriptively with hyphens; never commit a raw Figma export filename with spaces or `(1)`/`(2)`
suffixes — those need URL-encoding and are indistinguishable from each other at a glance
(`industry-card (2).png` vs `(3)` — which one is which, six months later?).

## Testing

Priority order matches CLAUDE.md's testing section:

1. **`npm run lint` and `npm run build`** — must pass, no exceptions. `next build` runs the full
   TypeScript check as part of building, so don't run `tsc --noEmit` as a separate gate before a
   build/dev has run at least once in that environment — Next generates ambient types (like
   `LayoutProps`) into `.next/types/`, and a fresh checkout without that folder yet fails `tsc`
   with `Cannot find name 'LayoutProps'` even on entirely correct code. This is exactly what
   broke PR #7's `lint-and-build` CI job — see `DEVELOPMENT MATERIAL/CI logs/2_lint-and-build.txt`.
2. **`npm run test:e2e`** (Playwright, `e2e/`) — critical paths: pages load, nav links resolve,
   contact/careers forms submit and show validation/error states, responsive viewport checks,
   axe-core accessibility per page.
3. **`npm run test:storybook`** — shared `ui/`/`ui/form/`/`cards/` components render across their
   defined states (default/hover/focus/error/disabled) with an accessibility gate per story.
4. **`npm run test:unit`** — plain Vitest (`src/**/*.test.ts`, Node environment) for pure logic:
   validation rules, data-helper functions (`getFeaturedPost`, `getPostBySlug`, ...), anything
   that doesn't need a DOM. Add a test here whenever you add a function like this — it's cheap
   and catches regressions unit tests are actually good at catching, without the setup cost of a
   full E2E run.

`npm test` runs both the Storybook and unit Vitest projects together. `.github/workflows/ci.yml`
runs all of the above on every PR into `main`.

## PRs

- Don't assume a component, data file, or page doesn't exist yet — this repo has multiple people
  working on different pages in parallel (see CLAUDE.md's "Working conventions"). Search first.
- If you hit a genuinely ambiguous spec (conflicting instruction, a spec that doesn't match its
  own screenshot, an undefined component state), make the reasonable call and leave a
  `// HANDOFF-AMBIGUOUS: ...` comment explaining what you assumed and why, per CLAUDE.md. Don't
  block on it, and don't silently guess without a trace.

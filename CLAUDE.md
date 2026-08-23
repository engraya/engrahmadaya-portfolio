# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — Next.js ESLint
- `npm run test` — run all tests once (Vitest)
- `npm run test:watch` — watch mode
- `npx vitest run lib/utils.test.ts` — run a single test file (any path filter works)

CI (`.github/workflows/ci.yml`) runs typecheck → lint → test → build on pushes to `master`/`upgrade` and PRs to `master`. It also fails if any `*.config.*` file exceeds 4KB or if a `.env` file is tracked in git — both guardrails exist because of a past incident where obfuscated malware was appended to `postcss.config.mjs` and `.env` leaked. Keep config files minimal and never commit `.env`.

## Layout (non-standard)

Only the App Router lives under `src/app/`. Everything else is at the repo root: `components/`, `lib/`, `context/`, `hooks/`, `actions/`, `email/`, `public/`.

The tsconfig path alias is `"@*": ["./*"]`, so **both** `@/lib/x` and `@lib/x` resolve from the repo root — existing imports use the slash-less form (`@components/About`, `@lib/site`). `vitest.config.ts` mirrors this alias manually; if you add a new top-level directory that gets imported via `@<dir>/...`, add it to the alias regex there or tests will fail to resolve it.

## Architecture

- **Next.js 14 App Router**, mostly client components. Routes: `/` (single-page landing composed of section components in `src/app/page.tsx`), `/projects` + `/projects/[id]`, `/certificates` + `/certificates/[id]`. Some sections on the landing page are intentionally commented out.
- **Content is data, not markup**: all portfolio content (projects, skills, experience, bio, links, etc.) lives in typed modules under `lib/content/`. Project images are imported from `public/projects/projectSources`. To change what the site shows, edit these modules — not the components.
- **Nav highlighting**: `context/ActiveSectionContext.tsx` + `useSectionInView` in `lib/hooks.ts`. Each landing-page section registers an intersection observer; the header reads `activeSection`. `lib/navigation.ts#resolveNavHref` rewrites `#hash` links to `/#hash` when off the home route.
- **Contact form**: `actions/sendEmailAction.ts` is a server action using Resend, rendering `email/EmailContactForm.tsx`. Env vars: `RESEND_API_KEY` (action degrades gracefully without it), `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`, plus `NEXT_PUBLIC_SITE_URL` used by `lib/site.ts` for metadata/sitemap/robots.
- **Theming**: `next-themes` via `components/Providers.tsx`, Tailwind `dark:` classes, toggle in `components/ThemeSwitch.tsx`.

## Mixed JS/TS migration (in progress on `upgrade` branch)

`components/others/**` contains legacy `.js`/`.jsx` components (styled-components based). `tsconfig.json`'s `include` explicitly enumerates which legacy JS files are typechecked — if you convert or delete one, update that list. New code should be TypeScript; prefer converting a legacy component over extending it.

## Testing

Vitest + jsdom + Testing Library, configured in `vitest.config.ts` with setup in `vitest.setup.ts`. Tests are colocated (`lib/utils.test.ts`, `lib/navigation.test.ts`) and matched by `{lib,components,app,src}/**/*.{test,spec}.{ts,tsx}`.

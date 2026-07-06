# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

Liam Shaw's personal portfolio, deployed on Vercel at liamshaw.in. Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion. No backend, no database — everything is static/client-rendered.

## Where things live

- `lib/data.ts` — **all site content** (projects, experience, education, skills, meta). Edit this for copy/content changes, not the components.
- `components/` — one component per section (`hero.tsx`, `experience.tsx`, `projects.tsx`, `about.tsx`, `contact.tsx`, `nav.tsx`), plus shared primitives in `ui.tsx` (`FadeIn`, `SectionLabel`, `TagPill`).
- `app/page.tsx` — section ordering for the homepage.
- `app/globals.css` + `tailwind.config.ts` — design tokens (see Theming below).
- `components/project-panel.tsx` — the slide-over case-study reader. Each project's 7-section detail (`problem/approach/architecture/results/challenges/differently/insight`) renders here.

## Theming — light/dark

Real light/dark toggle, no added dependency:
- `tailwind.config.ts` has `darkMode: "class"`; all color tokens (`canvas`, `ink`, `ink-2`, `ink-3`, `border`, `border-hi`, `surface`, `surface-2`, `accent`, `accent-dim`, `on-accent`) resolve to CSS variables.
- Variables are defined in `app/globals.css`: `:root` = light theme, `.dark` = dark theme overrides.
- `components/theme-provider.tsx` exposes `useTheme()` (`{ theme, toggleTheme }`); `components/theme-toggle.tsx` is the sun/moon button in the nav.
- A blocking inline script in `app/layout.tsx` sets the `dark` class on `<html>` before paint (localStorage `theme`, else system preference) to avoid a flash.
- `accent` and `accent-dim` are **not** overridden per-theme — the amber is brand identity, kept constant. `on-accent` is a fixed dark color for text sitting on accent-filled buttons (don't reuse `text-canvas` there — canvas flips with theme, on-accent doesn't).

## Design restraint — read before adding color

The accent (amber, `#e8a33d`) is used in exactly two places by design: the primary CTA button fill, and the "currently" status-strip dot. Everywhere else uses the neutral `ink`/`ink-2`/`ink-3`/`border` scale. `TagPill` in particular is deliberately a single neutral style, not color-coded per category — don't reintroduce per-tag colors. If a hover/active state needs to read as "selected," reach for weight, contrast, or an underline before reaching for the accent color.

## Content conventions

- Nav items, tags, and meta/timestamp text use `font-mono`; body copy uses the sans font (Inter); headings use `font-display` (Instrument Serif).
- Project entries: set `caseStudyPending: true` (see `Project` interface in `lib/data.ts`) for a project that has a summary card but no written case study yet — `ProjectPanel` shows a "coming soon" notice instead of fabricating the 7-section breakdown. Don't invent technical narrative for real client/employer work you don't have details on — ask instead.
- `projects.tsx` splits projects into "Selected work" (featured: true, card-grid, current/professional work) and "Earlier work" (featured: false, lighter row treatment, academic/research work) purely off the `featured` boolean and array order in `lib/data.ts` — no separate sort config to maintain.

## Verifying changes

`npx tsc --noEmit` for type errors. `npm run dev` for a live check — this is a visual/content site, so changes should actually be looked at in the browser (both themes) before calling something done, not just type-checked.

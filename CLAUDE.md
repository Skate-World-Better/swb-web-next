# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Skate World Better (SWB) — a marketing website for a Czech non-profit that builds skateparks across Africa. This is a **static React SPA** (no backend, no CMS, no data fetching). All content is hardcoded in component files.

## Commands

```bash
npm run dev       # Start Vite dev server on port 3000
npm run build     # TypeScript type-check (tsc) then Vite production build
npm run lint      # ESLint with zero warnings policy
npm run preview   # Preview production build locally
```

No test framework is configured.

## Tech Stack

- **React 18 + Vite 4** (NOT Next.js despite the repo name)
- **TypeScript** with strict mode
- **React Router v6** for client-side routing
- **Bootstrap 4 via SCSS** + **react-bootstrap v1.3** for layout/grid/UI
- **SCSS modules** (`index.module.scss` per component) with `classnames` for conditional classes
- **vite-plugin-svgr** for importing SVGs as React components (`import { ReactComponent as X } from "...svg"`)
- **react-helmet** for SEO meta tags
- **react-feather** for icons
- Deployed to **Netlify** (`public/_redirects` handles SPA fallback)

## Architecture

### Routing (src/App.tsx)

All routes: `/`, `/mozambique`, `/swaziland`, `/zambia`, `/ethiopia`, `/lesotho`, plus a `*` catch-all for 404.

### Three-layer page pattern

Every page follows the same structure:
1. **`src/pages/Country/index.tsx`** — Route entry: wraps in `<Layout>` + `<SEO>`
2. **`src/components/pages/CountryPage/index.tsx`** — Scroll-to-top + composes Hero + Sections
3. **`src/components/pages/CountryPage/Sections/`** — Individual section components

### Key component patterns

- **Compound components**: `BaseSection` exposes sub-components via namespace (`BaseSection.Header.Base`, `BaseSection.Header.Annotation`, `BaseSection.Text`, etc.)
- **Variant props on Button**: boolean props control style (`<Button link accent>`, `<Button secondary>`, `<Button complementary light>`)
- **MediaCarousel**: accepts `items[]` + a `component` prop, uses `React.cloneElement()` to inject item props into the card

### Styling

- Global SCSS in `src/styles/` — `colors.scss` defines brand colors, `fonts.scss` loads Poppins + Gloria Hallelujah
- Brand colors: primary `#f7b70d` (amber/gold), secondary `#8db600` (lime green), dark `#16130e`
- Bootstrap utility classes mixed freely with CSS module classes
- Background patterns via `.contours` utility class with SVG backgrounds

### Assets

- Images live in `src/images/` (ES module imports, bundled by Vite), not in `public/`
- SVG logos in `src/images/swb_logos/`, custom icons in `src/images/icons/`

## Conventions

- Component folders use `index.tsx` + `index.module.scss` co-location
- `@typescript-eslint/no-explicit-any` is set to warn (not error); `any` types exist in content-heavy components
- No global state management — only local `useState` for UI interactions
- English-only, no i18n

## Skills (`.skills/`)

The `.skills/` directory contains topic-specific coding standards that represent the target quality bar for this project. Consult the relevant skill file(s) whenever working in that area:

| Skill | File | When to use |
|---|---|---|
| TypeScript | `.skills/typescript.md` | Writing or modifying any `.ts`/`.tsx` file |
| React | `.skills/react.md` | Creating, modifying, or reviewing components |
| Architecture | `.skills/architecture.md` | Structural decisions, adding pages, reorganizing files |
| Styling | `.skills/styling.md` | Writing CSS/SCSS, migrating from Bootstrap, design tokens |
| Performance | `.skills/performance.md` | Adding images, new routes, build pipeline changes |
| Accessibility | `.skills/accessibility.md` | Any user-facing component (interactive or visual) |
| SEO | `.skills/seo.md` | Pages, meta tags, routing, social sharing |

These skills are aspirational — the current codebase violates many of these standards. All new code and refactored code must follow them. See `REFACTORING.md` for the full audit and migration plan.

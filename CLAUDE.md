# CLAUDE.md

## Project Overview

Skate World Better (SWB) — a marketing website for a Czech non-profit that builds skateparks across Africa. This is a **static React SPA** (no backend, no CMS, no data fetching). All content is hardcoded in data files and component files.

## Commands

```bash
npm run dev       # Start Vite dev server on port 3000
npm run build     # TypeScript type-check (tsc) then Vite production build
npm run lint      # ESLint with zero warnings policy
npm run preview   # Preview production build locally
```

No test framework is configured.

## Tech Stack

- React 18.3 + Vite 6 (static SPA, NOT Next.js despite the repo name)
- TypeScript with strict mode
- React Router v6 for client-side routing
- Tailwind CSS 3 + CSS custom properties as design tokens
- `cn()` utility (`src/lib/cn.ts`) — clsx + tailwind-merge
- vite-plugin-svgr v4 — import SVGs as React components (`?react` suffix)
- react-helmet-async with `<HelmetProvider>` for SEO meta
- react-feather icons, react-multi-carousel
- Deployed on Netlify (`public/_redirects` for SPA fallback)

## Key Locations

| What | Where |
|------|-------|
| Routes | `src/App.tsx` (lazy-loaded) |
| Pages | `src/pages/{Country}/index.tsx` |
| Country data | `src/data/countries/{country}.ts` |
| Gallery data | `src/data/galleries/{country}.ts` |
| Skatepark data | `src/data/skateparks/{country}.ts` |
| UI primitives | `src/components/ui/` (Section, Grid, Stack, Heading, Text, Highlight, Image, VideoEmbed, ResultCard, ResultsGrid) |
| Shared sections | `src/components/sections/` (CountryAbout, CountryWhy, CountryGallery, Skatepark) |
| Custom skateparks | `src/components/pages/CountryPage/skateparks/` |
| Home page sections | `src/components/pages/HomePage/Sections/` |
| Design tokens | `src/styles/globals.css` (`:root` block) |
| Images | `src/images/` (ES module imports, bundled by Vite) |
| Rich text parser | `src/lib/renderRichText.tsx` (`*highlight*` and `[text](url)` syntax) |

## Conventions

- `@/` path alias = `src/` (configured in `vite.config.ts` + `tsconfig.json`)
- `cn()` from `@/lib/cn` for all conditional class composition
- SVGs as components: `import Logo from './logo.svg?react'`
- UI primitives for layout — not raw Tailwind strings for repeated patterns
- Data separated from components — content lives in `src/data/`
- Country pages: data-driven template (`CountryPage`) + per-country skatepark section
- `renderRichText()` parses `*highlight*` and `[link](url)` in data strings
- No global state — only local `useState` for UI interactions
- English-only, no i18n
- `@typescript-eslint/no-explicit-any` is set to warn

## Notes

- See `REFACTORING.md` for the full audit of remaining issues and the migration roadmap
- Coding standards auto-load from `.claude/rules/` based on the files being edited
- Use `/add-country` to scaffold a new country page with all required files

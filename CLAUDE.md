# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

- **React 18.3 + Vite 6** (NOT Next.js despite the repo name)
- **TypeScript** with strict mode
- **React Router v6** for client-side routing
- **Tailwind CSS 3** for utility-first styling with CSS custom properties as the design token layer
- **`cn()` utility** (`src/lib/cn.ts`) — wraps `clsx` + `tailwind-merge` for conditional class merging
- **vite-plugin-svgr v4** for importing SVGs as React components (`import X from "...svg?react"`)
- **react-helmet-async** with `<HelmetProvider>` for SEO meta tags
- **react-feather** for icons
- **react-multi-carousel** for image carousels
- Deployed to **Netlify** (`public/_redirects` handles SPA fallback)

## Architecture

### Routing (src/App.tsx)

All routes: `/`, `/mozambique`, `/swaziland`, `/zambia`, `/ethiopia`, `/lesotho`, plus a `*` catch-all for 404.

### Data-driven country pages

Country pages use a shared template with per-country data:

1. **`src/pages/Country/index.tsx`** — Route entry: wraps in `<Layout>` + `<SEO>`, renders `<CountryPage>` with data + skatepark section
2. **`src/components/pages/CountryPage.tsx`** — Template: composes `CountryHero` + shared sections (`CountryAboutSection`, `CountryWhySection`, `CountryGallerySection`) from data props, plus a custom `skateparkSection` ReactNode
3. **`src/data/countries/{country}.tsx`** — Content data: headings (with JSX), descriptions, images, gallery items, results
4. **`src/components/pages/CountryPage/skateparks/{Country}SkateparkSection.tsx`** — Per-country skatepark sections (these vary significantly between countries)

### UI primitives (`src/components/ui/`)

Reusable layout and typography components that encapsulate repeated Tailwind patterns:

- **`Section`** — Container with spacing variants (`sm`/`md`/`lg`) and background options (`default`/`surface`/`surface-contours`)
- **`Grid`** — Responsive column layout (2 or 3 cols, with `reverse`, `centered` options)
- **`Stack`** — Vertical gap spacing between children
- **`Heading`** — Typography with level-based sizing (`h2`/`h3`/`h6`)
- **`Text`** — Body text with size variants
- **`Highlight`** — Decorative text wrapper (`font-alt font-primary`)
- **`VideoEmbed`** — Responsive 16:9 iframe wrapper
- **`Image`** — Standard `<img>` with lazy loading and rounded defaults
- **`ResultCard`** / **`ResultsGrid`** — Icon + title + description cards in a 3-column grid

All exported via barrel file `src/components/ui/index.ts`.

### Shared section components (`src/components/sections/`)

Higher-level compositions for country page sections:
- **`CountryAboutSection`** — Takes `CountryAboutData`, renders heading + text + image grid + results
- **`CountryWhySection`** — Takes `CountryWhyData`, renders centered text on contours background
- **`CountryGallerySection`** — Takes `CountryGalleryData`, renders text + image carousel

### Home page

The home page is **not** templatized — it uses unique section components (`FactsSection`, `TimelineSection`, `MomentsSection`, `PressSection`, `ProjectsSection`, `PartnersSection`), each built with the UI primitives.

### Key component patterns

- **Variant props on Button**: boolean props control style (`<Button link accent>`, `<Button secondary>`, `<Button complementary light>`)
- **MediaCarousel**: accepts `items[]` + a `component` prop, uses `React.cloneElement()` to inject item props into the card

### Styling

- **Tailwind CSS 3** with utility classes applied directly in JSX via `cn()` for conditional merging
- **CSS custom properties** as design tokens defined in `src/styles/globals.css` (`:root` block with `--color-*`, `--font-*`, `--space-*` variables)
- **Tailwind config** (`tailwind.config.js`) maps brand tokens to Tailwind utilities (e.g., `colors.primary`, `fontFamily.alt`)
- **Global CSS** in `src/styles/globals.css` — base typography, component utilities (`.contours`, `.font-alt`, `.social-link`)
- Brand colors: primary `#f7b70d` (amber/gold), secondary `#8db600` (lime green), dark `#16130e`
- Background patterns via `.contours` utility class with SVG backgrounds
- A few legacy SCSS modules remain (e.g., `PartnersSection/index.module.scss` for scroll animation, `Header/index.module.scss`)

### Assets

- Images live in `src/images/` (ES module imports, bundled by Vite), not in `public/`
- SVG logos in `src/images/swb_logos/`, custom icons in `src/images/icons/`
- SVG background patterns in `src/assets/backgrounds/`

## Conventions

- UI primitives live in `src/components/ui/` with one component per file
- Country content data lives in `src/data/countries/` as `.tsx` files (JSX in content)
- Type interfaces for country data live in `src/data/countries/types.ts`
- `cn()` from `@/lib/cn` used for all conditional class composition
- `@/` path alias configured in `vite.config.ts` and `tsconfig.json` — maps to `src/`
- SVGs imported as React components use `?react` suffix: `import Logo from './logo.svg?react'`
- `@typescript-eslint/no-explicit-any` is set to warn (not error)
- No global state management — only local `useState` for UI interactions
- English-only, no i18n

## Skills (`.skills/`)

The `.skills/` directory contains topic-specific coding standards that represent the quality bar for this project. Consult the relevant skill file(s) whenever working in that area:

| Skill | File | When to use |
|---|---|---|
| TypeScript | `.skills/typescript.md` | Writing or modifying any `.ts`/`.tsx` file |
| React | `.skills/react.md` | Creating, modifying, or reviewing components |
| Architecture | `.skills/architecture.md` | Structural decisions, adding pages, reorganizing files |
| Styling | `.skills/styling.md` | Writing CSS, working with Tailwind, design tokens |
| Performance | `.skills/performance.md` | Adding images, new routes, build pipeline changes |
| Accessibility | `.skills/accessibility.md` | Any user-facing component (interactive or visual) |
| SEO | `.skills/seo.md` | Pages, meta tags, routing, social sharing |

See `REFACTORING.md` for the full audit of remaining issues and the migration roadmap.

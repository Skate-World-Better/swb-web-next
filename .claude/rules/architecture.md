---
---

# Architecture

## Directory Layout

```
src/
├── App.tsx                 # Route definitions (lazy-loaded)
├── main.tsx                # BrowserRouter + HelmetProvider
├── pages/                  # Route entry points (Layout + SEO + page component)
│   ├── Home/
│   ├── Mozambique/
│   ├── Zambia/
│   ├── Swaziland/
│   ├── Ethiopia/
│   ├── Lesotho/
│   └── NotFound/
├── components/
│   ├── ui/                 # Reusable layout/typography primitives
│   │   ├── Section.tsx     # Container with spacing/background variants
│   │   ├── Grid.tsx        # 2 or 3 column responsive layout
│   │   ├── Stack.tsx       # Vertical gap spacing
│   │   ├── Heading.tsx     # Level-based typography
│   │   ├── Text.tsx        # Body text with size variants
│   │   ├── Highlight.tsx   # Decorative font-alt font-primary span
│   │   ├── Image.tsx       # Lazy-loading img with rounded defaults
│   │   ├── VideoEmbed.tsx  # Responsive 16:9 iframe wrapper
│   │   ├── ResultCard.tsx  # Icon + title + description card
│   │   ├── ResultsGrid.tsx # 3-column results layout
│   │   └── index.ts        # Barrel export
│   ├── sections/           # Shared data-driven country sections
│   │   ├── CountryAboutSection.tsx
│   │   ├── CountryWhySection.tsx
│   │   ├── CountryGallerySection.tsx
│   │   └── SkateparkSection.tsx    # Generic skatepark carousel
│   ├── pages/
│   │   ├── CountryPage.tsx         # Data-driven country template
│   │   ├── CountryPage/skateparks/ # Per-country custom skatepark sections
│   │   │   └── MozambiqueSkateparkSection.tsx
│   │   └── HomePage/              # Home page sections
│   │       ├── HomeHero/
│   │       └── Sections/
│   │           ├── FactsSection/
│   │           ├── TimelineSection/
│   │           ├── MomentsSection/
│   │           ├── PressSection/
│   │           ├── ProjectsSection/ (exists but not rendered)
│   │           └── PartnersSections/
│   ├── Button/             # SCSS module-styled button
│   ├── Card/               # ImageCard with expand/hover/ratio
│   ├── Carousel/           # react-multi-carousel wrapper
│   ├── Texts/              # Decorative brush stroke overlays
│   ├── CountryHero/        # Hero section with bg image
│   ├── Header/             # Sticky nav with mobile hamburger
│   ├── Footer/             # 3-column footer
│   ├── Layout/             # Header + main + Footer
│   ├── SEO.tsx             # react-helmet-async wrapper
│   ├── ErrorBoundary.tsx
│   └── ScrollToTop.tsx
├── data/
│   ├── countries/          # Per-country page data (typed)
│   │   ├── types.ts        # CountryPageData, CountryAboutData, etc.
│   │   ├── mozambique.ts
│   │   ├── zambia.ts
│   │   ├── swaziland.ts
│   │   ├── ethiopia.ts
│   │   └── lesotho.ts
│   ├── galleries/          # Per-country image arrays
│   │   ├── types.ts        # GalleryItem interface
│   │   └── {country}.ts
│   ├── skateparks/         # Per-country skatepark data
│   │   ├── types.ts        # SkateparkData interface
│   │   └── {country}.ts
│   ├── moments.ts          # Home page moments carousel (34 images)
│   ├── press.ts            # 13 press articles
│   ├── partners.ts         # 23 partner logos
│   └── generated/          # CMS-exported JSON (Sanity) — not yet consumed
├── images/                 # All images (ES module imports)
├── assets/backgrounds/     # SVG background patterns
├── styles/globals.css      # Design tokens + base typography + component utilities
└── lib/
    ├── cn.ts               # clsx + tailwind-merge
    └── renderRichText.tsx   # *highlight* and [link](url) → React elements
```

## Placement Rules

| Kind | Location | Reason |
|------|----------|--------|
| Route entry (page) | `src/pages/{Country}/index.tsx` | One dir = one route |
| Reusable UI primitive | `src/components/ui/` | Used by 2+ pages |
| Shared data-driven section | `src/components/sections/` | Receives data via props |
| Per-country custom section | `src/components/pages/CountryPage/skateparks/` | Too different to template |
| App shell (header/footer) | `src/components/` | Rendered once in Layout |
| Static content data | `src/data/` | Separated from rendering |
| Data types | Co-located with data (`types.ts` in same dir) | Component-specific types stay in component file |
| Utility functions | `src/lib/` | Pure, no React dependency |
| Images | `src/images/` grouped by topic | Not in `public/` |

A type/utility/constant used by only one file stays in that file — don't extract prematurely.

## Routing

All routes in `src/App.tsx`: `/`, `/mozambique`, `/swaziland`, `/zambia`, `/ethiopia`, `/lesotho`, `*` (404).

## Data-Driven Country Pages

```
CountryPageData → CountryPage template → shared sections
```

- `src/data/countries/{country}.ts` — typed content (heading, description, images, results)
- `src/components/pages/CountryPage.tsx` — template composing Hero + About + Why + Skatepark + Gallery
- `src/components/sections/` — shared section components receiving data props
- `src/components/pages/CountryPage/skateparks/` — per-country custom skatepark sections

### Why skatepark sections are not shared

They vary too significantly:
- Mozambique: two parks (Maxaquene + Khongolote) with separate carousels + video embed
- Zambia/Ethiopia/Swaziland/Lesotho: single park with carousel — use shared `SkateparkSection`

### Adding a new country

Use the `/add-country` skill for the full workflow. Quick summary:
1. Create `src/data/galleries/{country}.ts`
2. Create `src/data/skateparks/{country}.ts` (or custom section component)
3. Create `src/data/countries/{country}.ts`
4. Create `src/pages/{Country}/index.tsx`
5. Add lazy route to `src/App.tsx`

## Import Direction

```
pages/ → components/ui/, components/sections/, components/pages/, data/
components/sections/ → components/ui/, data/ (types only, receives data via props)
components/ui/ → lib/ (never imports pages/, data/, sections/)
data/ → images/, data/types (never imports components/ or pages/)
lib/ → (never imports React, components/, data/, pages/)
```

No circular dependencies. If A imports B and B imports A, extract the shared part.

## Barrel Files

Use sparingly — only when a directory represents a single public API (e.g., `components/ui/index.ts`).

## Key Component Patterns

- **Button** (`src/components/Button/`): Boolean props control style (`link`, `primary`, `secondary`, `complementary`, `light`, `accent`). SCSS module for styles.
- **MediaCarousel** (`src/components/Carousel/`): Accepts `items[]` + `renderItem` prop. Uses `react-multi-carousel`.
- **ImageCard** (`src/components/Card/`): Aspect ratio via padding-bottom, hover expand, optional gradient/blur.
- **Texts/Brushed** (`src/components/Texts/`): Decorative brush stroke SVG backgrounds positioned behind text.

## Styling Approach

- **Tailwind CSS 3** utilities via `cn()` for conditional merging
- **CSS custom properties** as design tokens in `src/styles/globals.css`
- **UI primitives** encapsulate repeated Tailwind patterns
- **SCSS modules** remain only for complex animations (Button, Card, Carousel, Partners scroll, Texts/brushes)
- **`renderRichText()`** in `src/lib/renderRichText.tsx`: parses `*highlight*` and `[text](url)` markup in data strings

## When to Create a New Component

Create when:
1. Same JSX structure appears in 2+ places
2. A section has its own independent state
3. A logical unit would benefit from its own test

Do NOT create for:
1. Single-use 10-20 line JSX chunk
2. "Just in case" reusability that doesn't exist yet

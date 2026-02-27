# Skill: Architecture & Project Structure

> Use this skill when making structural decisions: adding pages, reorganizing files, introducing new patterns, or planning larger refactors.

## Core Principle

Architecture should eliminate duplication, enforce constraints through structure (not discipline), and make the common case easy. Every file should have one obvious place to live, and every pattern should have one obvious way to implement.

---

## Project Structure

### Current directory layout

```
src/
├── pages/                  # Route entry points
│   ├── Home/
│   │   └── index.tsx       # Home route: Layout + SEO + HomePage
│   ├── Zambia/
│   │   └── index.tsx       # Country route: Layout + SEO + CountryPage
│   ├── Mozambique/
│   ├── Swaziland/
│   ├── Ethiopia/
│   └── Lesotho/
├── components/
│   ├── ui/                 # Generic, reusable UI primitives
│   │   ├── Section.tsx
│   │   ├── Grid.tsx
│   │   ├── Stack.tsx
│   │   ├── Heading.tsx
│   │   ├── Text.tsx
│   │   ├── Highlight.tsx
│   │   ├── Image.tsx
│   │   ├── VideoEmbed.tsx
│   │   ├── ResultCard.tsx
│   │   ├── ResultsGrid.tsx
│   │   └── index.ts        # Barrel export
│   ├── sections/           # Shared data-driven section components
│   │   ├── CountryAboutSection.tsx
│   │   ├── CountryWhySection.tsx
│   │   └── CountryGallerySection.tsx
│   ├── pages/
│   │   ├── CountryPage.tsx              # Data-driven country template
│   │   ├── CountryPage/skateparks/      # Per-country skatepark sections
│   │   │   ├── ZambiaSkateparkSection.tsx
│   │   │   ├── MozambiqueSkateparkSection.tsx
│   │   │   ├── SwazilandSkateparkSection.tsx
│   │   │   ├── EthiopiaSkateparkSection.tsx
│   │   │   └── LesothoSkateparkSection.tsx
│   │   └── HomePage/
│   │       ├── HomeHero/
│   │       └── Sections/               # Unique home page sections
│   │           ├── FactsSection/
│   │           ├── TimelineSection/
│   │           ├── MomentsSection/
│   │           ├── PressSection/
│   │           ├── ProjectsSection/
│   │           └── PartnersSections/
│   ├── Button/
│   ├── Carousel/
│   ├── Card/
│   ├── CountryHero/
│   ├── Header/
│   ├── Footer/
│   ├── Layout/
│   ├── SEO.tsx
│   └── ...
├── data/                   # Static content (separated from rendering)
│   └── countries/
│       ├── types.ts        # Shared TypeScript interfaces
│       ├── zambia.tsx
│       ├── mozambique.tsx
│       ├── swaziland.tsx
│       ├── ethiopia.tsx
│       └── lesotho.tsx
├── images/                 # Image assets (imported as ES modules)
│   ├── icons/
│   └── swb_logos/
├── assets/
│   └── backgrounds/        # SVG background patterns
├── styles/
│   └── globals.css         # Design tokens + base typography + component utilities
├── lib/
│   └── cn.ts               # clsx + tailwind-merge utility
└── App.tsx                 # Route definitions
```

### Placement rules

| Kind of thing | Where it goes | Why |
|---|---|---|
| Route entry (page) | `src/pages/` | One directory = one route. Clear URL-to-file mapping. |
| Reusable UI primitive | `src/components/ui/` | Used by 2+ pages or in multiple contexts. Encapsulates Tailwind patterns. |
| Shared data-driven section | `src/components/sections/` | Reusable across country pages, receives data via props. |
| Per-country custom section | `src/components/pages/CountryPage/skateparks/` | Too different between countries to share a template. |
| App shell (header/footer) | `src/components/` | Rendered once in the Layout wrapper. |
| Static content data | `src/data/` | Separated from rendering. Easy to update, type-check, reuse. |
| Shared TypeScript types | `src/data/countries/types.ts` | Types for the data layer. Component-specific types stay in their component file. |
| Utility functions | `src/lib/` | Pure functions with no React dependency. |
| Images | `src/images/` grouped by topic | Co-locate by content (country, icon set), not by component. |

### What does NOT get its own file

- A type used by only one component — keep it in that component file
- A utility used by only one function — keep it inline
- A constant used by only one module — keep it local

---

## Data-Driven Architecture

### Country pages — one template, data-driven

The project has 5 country pages that share a common structure. This is solved with a data-driven template:

```tsx
// src/data/countries/zambia.tsx — content data
export const zambiaData: CountryPageData = {
  hero: { cityName: 'Mongu', countryName: 'Zambia', backgroundImage: heroImage },
  about: { heading: <>...</>, description: <>...</>, image: img, results: [...] },
  why: { heading: <>...</>, description: <>...</> },
  gallery: { description: <>...</>, images: [...] },
}
```

```tsx
// src/pages/Zambia/index.tsx — route entry
const Zambia = () => (
  <Layout>
    <SEO title="Zambia" />
    <CountryPage data={zambiaData} skateparkSection={<ZambiaSkateparkSection />} />
  </Layout>
)
```

```tsx
// src/components/pages/CountryPage.tsx — template
const CountryPage = ({ data, skateparkSection }: CountryPageProps) => (
  <>
    <CountryHero {...data.hero} />
    <CountryAboutSection data={data.about} />
    <CountryWhySection data={data.why} />
    {skateparkSection}
    <CountryGallerySection data={data.gallery} />
  </>
)
```

### Adding a new country

To add a new country page:
1. Create `src/data/countries/{country}.tsx` with the content data
2. Create `src/components/pages/CountryPage/skateparks/{Country}SkateparkSection.tsx` for the unique skatepark section
3. Create `src/pages/{Country}/index.tsx` route entry
4. Add the route to `src/App.tsx`

The shared sections (About, Why, Gallery) require no new component files — only data.

### Why skatepark sections are not shared

The skatepark sections vary significantly between countries:
- Zambia: single carousel + park name story
- Mozambique: two carousels (Maxaquene + Khongolote) + video embed
- Swaziland: single carousel + descriptive text
- Ethiopia: single carousel + park info
- Lesotho: descriptive text only (no carousel — project planned, not completed)

These stay as individual section files using UI primitives.

---

## Dependency Rules

### Import direction

```
pages/
  → components/ui/
  → components/sections/
  → components/pages/
  → data/

components/sections/
  → components/ui/
  → data/ (types only)
  (receives data via props, never imports data files directly)

components/ui/
  → lib/
  (never imports from pages/, data/, or sections/)

data/
  → images/
  → data/countries/types.ts
  (never imports from components/ or pages/)

lib/
  (never imports from React, components/, data/, or pages/)
```

### No circular dependencies

If component A imports component B and B imports A, extract the shared part into a third module.

### Barrel files (`index.ts`) — use sparingly

Barrel files that re-export everything from a directory cause bundler issues and make imports ambiguous. Only use them when a directory genuinely represents a single public API (e.g., `components/ui/index.ts` re-exporting all UI primitives).

---

## Configuration

### Path aliases

`@/` is configured in both `vite.config.ts` and `tsconfig.json`:

```ts
// vite.config.ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

```json
// tsconfig.json
"paths": {
  "@/*": ["./src/*"]
}
```

### Environment-specific config

No staging URLs, debug flags, or environment-specific values in source code. Use environment variables:

```tsx
// Bad — hardcoded staging URL in partner data
link: 'https://staging.oneloveboardshop.be/'

// Good — use production URL, override in env if needed
link: 'https://oneloveboardshop.be/'
```

---

## Error Handling Strategy

### Layer error boundaries

1. **Root level** — catches unexpected crashes, shows a "something went wrong" page
2. **Route level** — catches per-page errors, other routes remain functional
3. **Feature level** (optional) — wraps risky UI like carousels, iframes, or third-party embeds

```tsx
// Root layout
<ErrorBoundary FallbackComponent={AppErrorFallback}>
  <Header />
  <main>
    <Outlet />
  </main>
  <Footer />
</ErrorBoundary>
```

---

## Scaling Considerations

### When to introduce a new component

Create a new component when:
1. The same JSX structure appears in 2+ places
2. A section of JSX has its own independent state
3. A logical unit would benefit from its own test

Do NOT create a new component for:
1. A single-use chunk of JSX that's only 10-20 lines
2. "Just in case" reusability that doesn't exist yet

### When to extract a hook

Extract a custom hook when:
1. The same stateful logic appears in 2+ components
2. The hook encapsulates a single clear concern (e.g., `useMediaQuery`, `useScrollPosition`)

Do NOT extract a hook for:
1. A single `useState` + `useEffect` pair that's only used once

---

## Checklist

Before making structural changes:

- [ ] New file has one obvious location in the directory structure
- [ ] No circular dependencies introduced
- [ ] Data is separated from rendering logic
- [ ] Duplication is reduced, not increased
- [ ] Import paths use `@/` aliases
- [ ] No environment-specific values hardcoded in source
- [ ] Country page changes reuse the `CountryPage` template pattern
- [ ] New UI patterns use existing primitives from `src/components/ui/`

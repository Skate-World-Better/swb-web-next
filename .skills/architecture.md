# Skill: Architecture & Project Structure

> Use this skill when making structural decisions: adding pages, reorganizing files, introducing new patterns, or planning larger refactors.

## Core Principle

Architecture should eliminate duplication, enforce constraints through structure (not discipline), and make the common case easy. Every file should have one obvious place to live, and every pattern should have one obvious way to implement.

---

## Project Structure

### Target directory layout

```
src/
├── app/                    # Route entry points (pages)
│   ├── layout.tsx          # Root layout (header, footer, error boundary)
│   ├── page.tsx            # Home page
│   ├── [country]/          # Dynamic country pages (or individual route files)
│   │   └── page.tsx
│   └── not-found.tsx       # 404
├── components/
│   ├── ui/                 # Generic, reusable UI primitives
│   │   ├── Button/
│   │   ├── Section/
│   │   ├── Card/
│   │   ├── Carousel/
│   │   └── Hero/
│   └── layout/             # App shell components
│       ├── Header/
│       └── Footer/
├── data/                   # Static content (no rendering logic)
│   ├── countries.ts        # Country config: slug, title, hero image, meta
│   ├── gallery.ts          # Gallery items per country
│   ├── partners.ts         # Partner logos and links
│   ├── press.ts            # Press coverage
│   └── timeline.ts         # Timeline events
├── images/                 # Image assets (imported as modules)
│   ├── countries/
│   │   ├── zambia/
│   │   ├── mozambique/
│   │   └── ...
│   ├── icons/
│   └── logos/
├── styles/                 # Global styles and design tokens
│   └── globals.css         # CSS custom properties, base resets
├── lib/                    # Utility functions (if needed)
│   └── cn.ts               # classnames/clsx utility
└── types/                  # Shared TypeScript types (only if used across boundaries)
    └── index.ts
```

### Placement rules

| Kind of thing | Where it goes | Why |
|---|---|---|
| Page entry (route) | `src/app/` | One directory = one route. Clear URL-to-file mapping. |
| Reusable UI component | `src/components/ui/` | Used by 2+ pages or in multiple contexts. |
| App shell (header/footer) | `src/components/layout/` | Rendered once in root layout. |
| Static content arrays | `src/data/` | Separated from rendering. Easy to update, type-check, reuse. |
| Shared TypeScript types | `src/types/` | Only for types used across unrelated modules. Component-specific types stay in the component file. |
| Utility functions | `src/lib/` | Pure functions with no React dependency. |
| Images | `src/images/` grouped by topic | Co-locate by content (country, icon set), not by component. |

### What does NOT get its own file

- A type used by only one component — keep it in that component file
- A utility used by only one function — keep it inline
- A constant used by only one module — keep it local

---

## Data-Driven Architecture

### The country page problem

This project has 5 country pages with nearly identical structure: Hero + About + Gallery + Skatepark sections. Each is copy-pasted into its own component tree. This is the single largest source of duplication.

### Target: one template, data-driven

```tsx
// src/data/countries.ts
import type { CountryConfig } from '@/types'

export const countries = [
  {
    slug: 'zambia',
    name: 'Zambia',
    title: 'Zambia — Lusaka Skatepark | Skate World Better',
    description: 'Building a skatepark community in Lusaka, Zambia.',
    heroImage: () => import('@/images/countries/zambia/hero.jpg'),
    sections: ['about', 'skatepark', 'gallery'],
  },
  // ...
] satisfies CountryConfig[]
```

```tsx
// src/app/[country]/page.tsx (or equivalent route component)
const CountryPage = ({ country }: { country: CountryConfig }) => (
  <>
    <SEO title={country.title} description={country.description} />
    <Hero title={country.name} backgroundImage={country.heroImage} />
    {country.sections.map(section => (
      <CountrySection key={section} type={section} country={country.slug} />
    ))}
  </>
)
```

Adding a new country should require: one entry in `countries.ts`, the images, and the content data. No new component files.

---

## Dependency Rules

### Import direction

```
app/ (pages)
  → components/ui/
  → components/layout/
  → data/
  → types/

components/ui/
  → types/
  → lib/
  (never imports from app/, data/, or other ui/ siblings unless composing)

data/
  → images/
  → types/
  (never imports from components/ or app/)

lib/
  → types/
  (never imports from React, components/, data/, or app/)
```

### No circular dependencies

If component A imports component B and B imports A, extract the shared part into a third module.

### Barrel files (`index.ts`) — use sparingly

Barrel files that re-export everything from a directory cause bundler issues and make imports ambiguous. Only use them when a directory genuinely represents a single public API (e.g., `components/ui/index.ts` re-exporting all UI primitives).

---

## Configuration

### Path aliases

Configure `@/` in both `vite.config.ts` and `tsconfig.json`:

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

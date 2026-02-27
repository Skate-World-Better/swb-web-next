# Skill: React Proficiency

> Use this skill when creating, modifying, or reviewing React components.

## Core Principle

Components should be small, composable, and do one thing well. Separate data from presentation. Use the platform (semantic HTML, native browser APIs) before reaching for abstractions.

---

## Component Design

### Use UI primitives for layout

The project has a set of layout primitives in `src/components/ui/` that should be used instead of raw Tailwind utility strings for common patterns:

```tsx
// Good — uses primitives
<Section spacing="md">
  <Grid cols={2}>
    <Stack gap="sm">
      <Heading level={3}>Title</Heading>
      <Text>Description</Text>
    </Stack>
    <Image src={photo} alt="Photo description" />
  </Grid>
</Section>

// Bad — raw utility strings for a pattern that has a primitive
<section className="mx-auto max-w-[1140px] px-4 py-6 lg:py-12">
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">...</div>
  </div>
</section>
```

### Data-driven sections over copy-paste

Country page sections receive data via props. Never copy a section component to make a slightly different version — parameterize it:

```tsx
// Good — data-driven, one component serves all countries
<CountryAboutSection data={zambiaData.about} />

// Bad — per-country section component with hardcoded content
<ZambiaAboutSection />
```

The exception is skatepark sections, which vary too significantly between countries to share a template.

### No `React.cloneElement`

This is a legacy escape hatch. Use render props or component props instead:

```tsx
// Bad — current pattern in Carousel (legacy, to be fixed)
{React.cloneElement(component, { ...data })}

// Good — render prop
<Carousel
  items={galleryItems}
  renderItem={(item) => <ImageCard {...item} />}
/>

// Good — component prop (when the component is always the same)
<Carousel items={galleryItems} ItemComponent={ImageCard} />
```

### Boolean guard pattern

Never use `array.length && ...` — it renders `0` when the array is empty:

```tsx
// Bad — renders "0" in the DOM
{items.length && items.map(item => <Card key={item.id} {...item} />)}

// Good
{items.length > 0 && items.map(item => <Card key={item.id} {...item} />)}

// Also good
{items.map(item => <Card key={item.id} {...item} />)}
// (empty array maps to nothing — no guard needed)
```

### Keys must be stable and unique

Never use array index as a React key for lists that can be reordered, filtered, or mutated. Use a stable identifier from the data:

```tsx
// Bad
{items.map((item, index) => <Card key={index} {...item} />)}

// Good
{items.map((item) => <Card key={item.id} {...item} />)}

// Acceptable only for truly static, never-reordered lists
// where each item has no stable ID and will never change
```

---

## Hooks

### No side-effect hacks — use the framework

```tsx
// Bad — duplicated scroll reset
useEffect(() => {
  window.scrollTo({ top: 0 })
}, [])

// Good — once in the router layout (React Router v6.4+)
import { ScrollRestoration } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
```

### Keep effects minimal

Effects should handle synchronization with external systems, not derived state. If you can compute it during render, do so.

---

## Navigation & Links

### External links: `<a>` with `rel="noreferrer noopener"`

Never use React Router's `<Link>` for external URLs. It triggers a full SPA remount for no benefit.

```tsx
// Bad
<Link to="https://external-site.com">Visit</Link>

// Good
<a href="https://external-site.com" target="_blank" rel="noreferrer noopener">
  Visit
</a>
```

### Interactive elements must be semantic

Never put `onClick` on a `<div>`. If it navigates, use `<a>`. If it triggers an action, use `<button>`.

```tsx
// Bad — not keyboard accessible, not crawlable
<div onClick={() => window.location.href = url}>
  <img src={logo} />
</div>

// Good — for navigation
<a href={url} target="_blank" rel="noreferrer noopener">
  <img src={logo} alt={name} />
</a>

// Good — for actions
<button type="button" onClick={handleClick} aria-label="Next slide">
  <ArrowRight size={40} />
</button>
```

---

## Error Handling

### Error boundaries at route level

Every route should be wrapped in an error boundary so a crash in one page doesn't take down the entire app:

```tsx
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <h2>Something went wrong</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

// In router config
<Route
  path="/zambia"
  element={
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Zambia />
    </ErrorBoundary>
  }
/>
```

---

## Code Splitting

### Lazy load every route

```tsx
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Mozambique = lazy(() => import('./pages/Mozambique'))
const Zambia = lazy(() => import('./pages/Zambia'))
// ...

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mozambique" element={<Mozambique />} />
        {/* ... */}
      </Routes>
    </Suspense>
  )
}
```

---

## File Organization

### Component file patterns

Simple components: single `.tsx` file in `src/components/ui/`
```
src/components/ui/
  Section.tsx
  Grid.tsx
  Heading.tsx
```

Components with co-located styles (when SCSS module is needed):
```
src/components/Header/
  index.tsx
  index.module.scss
```

### Separate data from components

Components should receive data via props. Static content belongs in `src/data/`:

```tsx
// src/data/countries/zambia.tsx — data only
export const zambiaData: CountryPageData = {
  hero: { cityName: 'Mongu', countryName: 'Zambia', backgroundImage: heroImage },
  about: { ... },
  // ...
}
```

```tsx
// src/pages/Zambia/index.tsx — rendering only
import { zambiaData } from '@/data/countries/zambia'
import CountryPage from '@/components/pages/CountryPage'

const Zambia = () => (
  <Layout>
    <SEO title="Zambia" />
    <CountryPage data={zambiaData} skateparkSection={<ZambiaSkateparkSection />} />
  </Layout>
)
```

---

## Checklist

Before considering a React component complete:

- [ ] Props have a typed interface (see typescript.md)
- [ ] No `any`, no `React.cloneElement`, no `defaultProps`
- [ ] Interactive elements are `<button>` or `<a>`, never `<div onClick>`
- [ ] External links use `<a>` with `rel="noreferrer noopener"`, not `<Link>`
- [ ] All images have `alt` text
- [ ] Component is a single responsibility — data is passed in, not hardcoded
- [ ] No `useEffect` for things the framework or platform handles natively
- [ ] `key` props use stable identifiers, not array indices
- [ ] Uses UI primitives from `src/components/ui/` for layout patterns

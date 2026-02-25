# Skill: React Proficiency

> Use this skill when creating, modifying, or reviewing React components.

## Core Principle

Components should be small, composable, and do one thing well. Separate data from presentation. Use the platform (semantic HTML, native browser APIs) before reaching for abstractions.

---

## Component Design

### Composition over configuration

Prefer composable children over deeply configurable prop APIs:

```tsx
// Bad — component does too many things via props
<BaseSection
  headerAnnotation="Our Projects"
  headerTitle="Zambia"
  headerUnderlined="Lusaka Skatepark"
  text="We built a skatepark..."
/>

// Good — composable, flexible, readable
<Section>
  <Section.Header>
    <Section.Eyebrow>Our Projects</Section.Eyebrow>
    <Section.Title>Zambia</Section.Title>
    <Section.Subtitle>Lusaka Skatepark</Section.Subtitle>
  </Section.Header>
  <Section.Body>
    <p>We built a skatepark...</p>
  </Section.Body>
</Section>
```

### Compound components must be renderable at every level

If `Section.Header` is a namespace, it must also be a valid React component. Never attach sub-components to a plain object.

```tsx
// Bad — Header is not renderable
BaseSection.Header = { Base, Annotation, Text }

// Good — Header is both a component and a namespace
const Header = ({ children, ...props }: HeaderProps) => (
  <header {...props}>{children}</header>
)
Header.Eyebrow = Eyebrow
Header.Title = Title
Section.Header = Header
```

### No `React.cloneElement`

This is a legacy escape hatch. Use render props or component props instead:

```tsx
// Bad — current pattern in Carousel
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
// Bad — duplicated in every page component in this project
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

### Custom hooks for shared logic

When multiple components need the same logic, extract it:

```tsx
// If we keep the SPA (not Next.js), scroll restoration as a hook:
function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}
```

### Keep effects minimal

Effects should handle synchronization with external systems, not derived state. If you can compute it during render, do so.

---

## Navigation & Links

### External links: `<a>` with `rel="noreferrer noopener"`

Never use React Router's `<Link>` for external URLs. It triggers a full SPA remount for no benefit.

```tsx
// Bad — current pattern
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

### One component per file, co-located with its styles

```
src/components/Hero/
  index.tsx            # Component
  Hero.module.scss     # Styles (or Hero.module.css with Tailwind @apply)
  Hero.test.tsx        # Tests
```

### Separate data from components

Components should receive data via props. Static content arrays belong in `src/data/`:

```
src/data/
  gallery.ts           # Gallery items for all countries
  partners.ts          # Partner logos and links
  press.ts             # Press coverage items
  countries.ts         # Country page configuration (hero image, title, slug, sections)
```

```tsx
// src/data/partners.ts
import type { Partner } from '@/types'
import czechAidLogo from '@/images/icons/czech-aid.png'

export const partners = [
  { name: 'Czech Aid', imageSrc: czechAidLogo, link: 'https://www.czechaid.cz/', alt: 'Czech Aid logo' },
  // ...
] satisfies Partner[]
```

### Reduce duplication with data-driven templates

The five country pages share ~95% identical structure. Use a single template:

```tsx
// src/components/CountryPage/index.tsx
interface CountryPageProps {
  hero: { title: string; backgroundImage: string }
  sections: React.ReactNode
}

const CountryPage = ({ hero, sections }: CountryPageProps) => (
  <Layout>
    <Hero {...hero} />
    {sections}
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

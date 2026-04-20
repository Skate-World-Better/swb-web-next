---
paths: ["src/components/**/*.tsx", "src/pages/**/*.tsx"]
---

# React

## Use UI primitives for layout

The project has layout primitives in `src/components/ui/`. Use them instead of raw Tailwind:

```tsx
// Good
<Section spacing="md">
  <Grid cols={2}>
    <Stack gap="sm">
      <Heading level={3}>Title</Heading>
      <Text>Description</Text>
    </Stack>
    <Image src={photo} alt="Photo description" />
  </Grid>
</Section>

// Bad — raw utility strings for patterns that have primitives
<section className="mx-auto max-w-[1140px] px-4 py-6 lg:py-12">
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">...</div>
  </div>
</section>
```

## Data-driven sections over copy-paste

Country page sections receive data via props. Never copy a section to make a variant — parameterize it:

```tsx
<CountryAboutSection data={zambiaData.about} />
```

Exception: skatepark sections vary too significantly between countries to share a template.

## No `React.cloneElement`

Use render props or component props:

```tsx
<Carousel
  items={galleryItems}
  renderItem={(item) => <ImageCard {...item} />}
/>
```

## Boolean guard pattern

Never `array.length && ...` — renders `0` when empty:

```tsx
// Good
{items.length > 0 && items.map(item => <Card key={item.id} {...item} />)}

// Also good — empty map returns nothing
{items.map(item => <Card key={item.id} {...item} />)}
```

## Keys must be stable and unique

Never use array index as key for dynamic lists. Use a stable identifier:

```tsx
{items.map((item) => <Card key={item.title} {...item} />)}
```

Index keys acceptable only for truly static, never-reordered lists with no stable ID.

## No scroll-reset useEffect hacks

The `ScrollToTop` component in `src/components/ScrollToTop.tsx` handles scroll-on-navigate globally. Never add per-page `useEffect(() => window.scrollTo(...), [])`.

## External links: `<a>` not `<Link>`

React Router `<Link>` is for internal SPA navigation only:

```tsx
// External
<a href="https://external.com" target="_blank" rel="noreferrer noopener">Visit</a>

// Internal
<Link to="/mozambique">Mozambique</Link>
```

## Interactive elements must be semantic

Never `<div onClick>`. If it navigates → `<a>`. If it triggers an action → `<button>`.

```tsx
// Navigation
<a href={url} target="_blank" rel="noreferrer noopener">
  <img src={logo} alt={name} />
</a>

// Action
<button type="button" onClick={handleClick} aria-label="Next slide">
  <ArrowRight size={40} />
</button>
```

## Error boundaries at route level

The app has a root `ErrorBoundary` in `App.tsx`. Per-route boundaries are optional but recommended for isolation.

## Lazy load routes

All routes use `React.lazy()` + `<Suspense>` in `App.tsx`. New routes must follow this pattern:

```tsx
const NewCountry = lazy(() => import("./pages/NewCountry"))
```

## Separate data from components

Components receive data via props. Static content belongs in `src/data/`:

```tsx
// src/data/countries/zambia.ts — data only
export const zambiaData: CountryPageData = { ... }

// src/pages/Zambia/index.tsx — rendering only
<CountryPage data={zambiaData} skateparkSection={...} />
```

# Skill: Performance

> Use this skill when adding images, creating new pages/routes, modifying the build pipeline, or reviewing anything that affects load time.

## Core Principle

A marketing site for a non-profit must load fast on every connection. The target audience includes users in African countries where mobile bandwidth may be limited. Every kilobyte matters. Measure first, optimize what matters most.

---

## Bundle Size

### Code splitting by route

Every route should be a separate chunk. The user visiting `/` should never download the code and images for `/zambia`:

```tsx
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Zambia = lazy(() => import('./pages/Zambia'))

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zambia" element={<Zambia />} />
      </Routes>
    </Suspense>
  )
}
```

### Vendor chunk separation

Configure Vite to split framework code into a separate cacheable chunk:

```ts
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        react: ['react', 'react-dom'],
        router: ['react-router-dom'],
      },
    },
  },
},
```

### No unused dependencies in `package.json`

Before adding any dependency, verify it will actually be imported. Before shipping, audit with:

```bash
npx depcheck
```

Current unused deps that must be removed: `antd`, `@ant-design/icons`, `react-svg`, `@types/react-router-dom`.

### Tree-shaking awareness

Import only what you use:

```tsx
// Bad — may pull in the entire library depending on bundler config
import { Container, Row, Col, Image, Collapse, Navbar } from 'react-bootstrap'

// Good — direct module imports (guaranteed tree-shakeable)
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
```

---

## Images

### Every `<img>` below the fold must have `loading="lazy"`

```tsx
<img src={imageSrc} alt={alt} loading="lazy" />
```

The hero image (above the fold) should NOT be lazy-loaded — it should load immediately.

### Responsive images with `srcSet` and `sizes`

Serve appropriate image sizes for each viewport:

```tsx
<img
  src={imageSrc800}
  srcSet={`${imageSrc400} 400w, ${imageSrc800} 800w, ${imageSrc1200} 1200w`}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt={alt}
  loading="lazy"
/>
```

### Image format: WebP with JPEG fallback

Use build-time image optimization (e.g., `vite-imagetools` or `sharp` script) to generate WebP/AVIF variants. If using Next.js, `<Image>` handles this automatically.

### Width and height to prevent layout shift

Always set `width` and `height` (or `aspect-ratio` in CSS) on images to reserve space before load:

```tsx
<img src={src} alt={alt} width={800} height={600} loading="lazy" />
```

Or in CSS:
```css
.cardImage {
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
}
```

### No duplicate image imports

If the same image is used on multiple pages (e.g., Zambia photos on both home and country pages), import it from a single canonical location:

```tsx
// src/data/gallery.ts — single source
import zambia1 from '@/images/countries/zambia/1.jpg'
export const zambiaGallery = [{ imageSrc: zambia1, alt: '...' }, ...]

// Both pages import from the same data file
import { zambiaGallery } from '@/data/gallery'
```

---

## Fonts

### Preconnect + stylesheet link in `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Gloria+Hallelujah&display=swap">
```

### Limit font weights

Only load the weights actually used. Currently: Poppins 300, 400, 600, 700 and Gloria Hallelujah regular. Don't add more without removing unused ones.

### `font-display: swap`

Already handled by `&display=swap` in the Google Fonts URL. Never remove this — it prevents invisible text during load.

---

## CSS

### Only import what you use

If staying with a CSS framework, import individual modules rather than the entire library:

```scss
// Bad — imports everything (156KB CSS)
@import 'bootstrap/scss/bootstrap';

// Good — import only used modules
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/grid';
@import 'bootstrap/scss/navbar';
```

### Prefer CSS that purges unused rules

Tailwind CSS automatically purges unused utilities in production. If using a different approach, ensure dead CSS is removed at build time.

---

## Third-Party Scripts

### Defer or lazy-load non-critical embeds

YouTube iframes and Vimeo players should not load until the user scrolls to them:

```tsx
// Use native lazy loading for iframes
<iframe
  src={videoUrl}
  title={title}
  loading="lazy"
  width="560"
  height="315"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

Or, for even better performance, show a thumbnail with a play button and load the iframe only on click (facade pattern).

---

## Performance Budget

Target metrics for this marketing site:

| Metric | Target |
|---|---|
| Initial JS (gzipped) | < 80KB |
| Initial CSS (gzipped) | < 15KB |
| Largest Contentful Paint | < 2.5s on 3G |
| Cumulative Layout Shift | < 0.1 |
| First Input Delay | < 100ms |
| Total page weight (home) | < 1MB including images |

---

## Checklist

Before shipping any change:

- [ ] New routes are lazy-loaded
- [ ] All below-fold images have `loading="lazy"`
- [ ] Images have `width`/`height` or CSS `aspect-ratio` set
- [ ] No new dependencies added without checking bundle impact
- [ ] No duplicate image imports across files
- [ ] Iframes are lazy-loaded
- [ ] `npm run build` output shows reasonable chunk sizes

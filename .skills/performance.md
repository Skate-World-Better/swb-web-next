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

### Tree-shaking awareness

Import only what you use. Prefer named imports from well-tree-shakeable libraries.

---

## Images

### The `Image` primitive handles lazy loading

The `src/components/ui/Image.tsx` primitive applies `loading="lazy"` and `decoding="async"` by default. Use it for all content images:

```tsx
import { Image } from '@/components/ui'

<Image src={photoSrc} alt="Children skating" />
```

For hero images (above the fold), use a raw `<img>` without `loading="lazy"` to ensure immediate loading.

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

Use build-time image optimization (e.g., `vite-imagetools` or `sharp` script) to generate WebP/AVIF variants.

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

If the same image is used on multiple pages, import it from a single canonical location. Country images are imported in `src/data/countries/{country}.tsx` and in gallery data files — keep them consistent.

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

### Tailwind CSS purges unused utilities

Tailwind CSS automatically purges unused utilities in production builds. This keeps CSS bundle size minimal. Ensure `content` paths in `tailwind.config.js` cover all files that use Tailwind classes.

### Don't import CSS you don't use

Legacy SCSS modules should only be kept for components that genuinely need them (e.g., complex animations). Remove empty or near-empty SCSS modules.

---

## Third-Party Scripts

### Defer or lazy-load non-critical embeds

The `VideoEmbed` component (`src/components/ui/VideoEmbed.tsx`) wraps iframes in a responsive 16:9 container with `loading="lazy"`. Use it for all video embeds:

```tsx
<VideoEmbed src={videoUrl} title="Documentary about the project" />
```

For even better performance, consider showing a thumbnail with a play button and loading the iframe only on click (facade pattern).

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
- [ ] All below-fold images use the `Image` primitive (or have `loading="lazy"`)
- [ ] Images have `width`/`height` or CSS `aspect-ratio` set
- [ ] No new dependencies added without checking bundle impact
- [ ] No duplicate image imports across files
- [ ] Iframes use the `VideoEmbed` component (or have `loading="lazy"`)
- [ ] `npm run build` output shows reasonable chunk sizes

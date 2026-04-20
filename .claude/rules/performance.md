---
paths: ["src/images/**", "vite.config.*", "src/App.tsx", "src/pages/**"]
---

# Performance

## Route splitting

All routes use `React.lazy()` + `<Suspense>` in `App.tsx`. New routes must follow this pattern. Never eagerly import page components.

## Vendor chunk separation

Configure in `vite.config.ts` if needed:

```ts
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

## No unused dependencies

Audit with `npx depcheck` before shipping. Don't add dependencies without checking bundle impact.

## Image lazy loading

The `Image` primitive (`src/components/ui/Image.tsx`) applies `loading="lazy"` and `decoding="async"` by default. Use it for all content images:

```tsx
<Image src={photoSrc} alt="Children skating" />
```

For hero/above-fold images, use raw `<img>` without `loading="lazy"`.

## Responsive images

Serve appropriate sizes per viewport:

```tsx
<img
  src={img800}
  srcSet={`${img400} 400w, ${img800} 800w, ${img1200} 1200w`}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt={alt}
  loading="lazy"
/>
```

## Prevent layout shift

Always set `width`/`height` attributes or CSS `aspect-ratio` on images:

```tsx
<img src={src} alt={alt} width={800} height={600} loading="lazy" />
```

Or in CSS: `aspect-ratio: 4 / 3; object-fit: cover; width: 100%;`

## No duplicate image imports

If the same image is used on multiple pages, import from a single canonical location. Country images: imported in `src/data/galleries/{country}.ts` and `src/data/countries/{country}.ts`.

## Font loading

Fonts are loaded in `index.html` with preconnect:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Gloria+Hallelujah&display=swap">
```

- Never use `@import url()` in CSS for fonts
- Only load weights actually used (Poppins 300/400/600/700 + Gloria Hallelujah regular)
- `&display=swap` prevents invisible text during load — never remove it

## Tailwind purges unused CSS

Production builds automatically strip unused utilities. Ensure `content` paths in `tailwind.config.ts` cover all files.

## Video embeds

Use the `VideoEmbed` component which wraps iframes in responsive containers. Consider facade pattern (thumbnail + play button) for non-critical videos.

## Performance Budget

| Metric | Target |
|--------|--------|
| Initial JS (gzipped) | < 80KB |
| Initial CSS (gzipped) | < 15KB |
| Largest Contentful Paint | < 2.5s on 3G |
| Cumulative Layout Shift | < 0.1 |
| First Input Delay | < 100ms |
| Total page weight (home) | < 1MB |

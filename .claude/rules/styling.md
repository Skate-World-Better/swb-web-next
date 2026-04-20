---
paths: ["**/*.{css,scss}", "tailwind.config.*", "src/styles/**", "src/components/ui/**"]
---

# Styling

## Design Tokens

All values come from CSS custom properties in `src/styles/globals.css`:

```css
:root {
  --color-primary: #f7b70d;        /* amber/gold */
  --color-primary-hover: #f9ca4c;
  --color-primary-active: #c99407;
  --color-secondary: #8db600;      /* lime green */
  --color-secondary-hover: #b7ce6b;
  --color-secondary-active: #719200;
  --color-dark: #16130e;
  --color-accent: #1b1811;
  --color-surface: #f5f3ed;
  --color-surface-alt: #f0f4e8;
  --font-primary: 'Poppins', system-ui, sans-serif;
  --font-decorative: 'Gloria Hallelujah', cursive;
}
```

Mapped to Tailwind in `tailwind.config.ts` (e.g., `bg-primary`, `text-dark`, `font-decorative`).

## Never hardcode values

```tsx
// Bad
className="text-[#f7b70d]"

// Good
className="text-primary"
```

If a value doesn't exist in tokens, consider whether it should be added or an existing token is close enough.

## Use `cn()` for conditional classes

```tsx
import { cn } from '@/lib/cn'

<button className={cn(
  'px-6 py-2.5 rounded-md font-semibold transition-colors',
  variant === 'primary' && 'bg-primary text-dark hover:bg-primary-hover',
  className,
)}>
```

## Prefer UI primitives over raw utility strings

```tsx
// Bad — repeated layout pattern
<div className="flex flex-wrap my-6 py-6 lg:my-12 lg:py-12 text-center lg:text-left">
  <div className="w-full lg:w-1/2">...</div>
</div>

// Good
<Grid cols={2} centered>
  <div>...</div>
  <div>...</div>
</Grid>
```

## No `@apply` in CSS

Defeats the purpose of utility-first CSS. Only use for truly repeated patterns in `@layer components` that can't be a component.

## Zero `!important`

If you need it, the architecture is wrong. Fix specificity, scope with wrappers, or fix import order.

## No inline `style={}`

```tsx
// Bad
<div style={{ padding: '16px', fontSize: '12px' }}>

// Good
<div className="p-4 text-xs">
```

Exception: truly dynamic runtime values (e.g., `style={{ backgroundImage: \`url(${img})\` }}`).

## Mobile-first responsive design

Base styles = mobile. Add responsive variants for larger screens:

```tsx
<div className="w-full text-center lg:w-1/2 lg:text-left">
```

Use standard Tailwind breakpoints only (`sm`, `md`, `lg`, `xl`, `2xl`).

## Global CSS Structure

`src/styles/globals.css` is organized into:
1. `@tailwind base/components/utilities` directives
2. `:root` tokens (colors, typography, spacing, misc)
3. `@layer base` — typography resets (body, headings, links)
4. `@layer components` — utility classes (`.contours`, `.font-alt`, `.social-link`, `.stretched-link`)

Don't add component-specific styles to globals. Use a co-located SCSS module if needed.

## Background patterns

```tsx
// Beige contours (used in Why sections)
<section className="bg-darkened contours">

// White contours (used in Hero)
<section className="contours bg-whitened">

// Green contours (footer)
<section className="contours footer">
```

The `Section` primitive with `background="surface-contours"` handles this automatically.

## Decorative text

Use `<Highlight>` for the brand decorative text pattern (Gloria Hallelujah in primary gold):

```tsx
<Highlight>skateparks</Highlight>
// renders: <span className="font-alt font-primary">skateparks</span>
```

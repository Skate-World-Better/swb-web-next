# Skill: Styling & CSS

> Use this skill when writing styles, working with Tailwind utilities, design tokens, or reviewing CSS.

## Core Principle

Styles should have a single source of truth for every design decision (color, spacing, typography). Use Tailwind utility classes for layout and visual properties. Use CSS custom properties as the design token layer. Never fight the cascade with `!important` — if you need it, the architecture is wrong.

---

## Current Stack

- **Tailwind CSS 3** for utility-first styling
- **CSS custom properties** as the design token layer (defined in `src/styles/globals.css`)
- **`cn()` utility** (`src/lib/cn.ts`) — wraps `clsx` + `tailwind-merge` for conditional class composition
- **UI primitives** (`src/components/ui/`) — encapsulate repeated Tailwind patterns into reusable components
- **A few legacy SCSS modules** remain for complex animations (e.g., `PartnersSection/index.module.scss`)

---

## Design Tokens

### Tokens are CSS custom properties in `src/styles/globals.css`

```css
:root {
  /* Colors — Brand */
  --color-primary: #f7b70d;
  --color-primary-hover: #f9ca4c;
  --color-primary-active: #c99407;
  --color-secondary: #8db600;
  --color-secondary-hover: #b7ce6b;
  --color-secondary-active: #719200;

  /* Colors — Neutral */
  --color-dark: #16130e;
  --color-accent: #1b1811;
  --color-white: #ffffff;
  --color-surface: #f5f3ed;
  --color-surface-alt: #f0f4e8;

  /* Typography */
  --font-primary: 'Poppins', system-ui, sans-serif;
  --font-decorative: 'Gloria Hallelujah', cursive;

  /* Spacing, radius, shadows also defined */
}
```

These are mapped into `tailwind.config.js` so you can use them as Tailwind classes (e.g., `bg-primary`, `text-dark`, `font-alt`).

### Never hardcode values

```tsx
// Bad — magic hex value in className
className="text-[#f7b70d]"

// Good — uses Tailwind token mapped from CSS custom property
className="text-primary"

// Good — in custom CSS, reference the token
color: var(--color-primary);
```

If a value doesn't exist in the token set, ask whether it should be added as a token or whether an existing token is close enough. Don't invent one-off values.

---

## Styling Approach

### Use Tailwind utilities inline via `cn()`

```tsx
import { cn } from '@/lib/cn'

<button className={cn(
  'px-6 py-2.5 rounded-md font-semibold transition-colors',
  variant === 'primary' && 'bg-primary text-dark hover:bg-primary-hover',
  variant === 'secondary' && 'border-2 border-primary text-dark hover:bg-amber-50',
  className,
)}>
```

### Prefer UI primitives over raw utility strings

When the same combination of Tailwind classes appears in multiple places, it should already be encapsulated in a UI primitive. Use the existing ones:

```tsx
// Bad — repeated layout pattern
<div className="flex flex-wrap my-6 py-6 lg:my-12 lg:py-12 text-center lg:text-left">
  <div className="w-full lg:w-1/2">...</div>
  <div className="w-full lg:w-1/2">...</div>
</div>

// Good — use the Grid primitive
<Grid cols={2} centered>
  <div>...</div>
  <div>...</div>
</Grid>
```

```tsx
// Bad — repeated section wrapper
<section className="mx-auto max-w-[1140px] px-4 py-6 lg:py-12">
  ...
</section>

// Good — use the Section primitive
<Section spacing="md">
  ...
</Section>
```

### Don't use `@apply` in CSS files

`@apply` defeats the purpose of utility-first CSS. Only use it for truly repeated patterns that can't be a component (e.g., prose styles from `@layer components` in `globals.css`).

### Zero `!important`

If you need `!important`, one of these is wrong:
1. Specificity is too high elsewhere — flatten selectors
2. A third-party library's styles are leaking — scope with a wrapper class or CSS layer
3. The cascade order is wrong — fix the import order

### No inline `style={}` in JSX

Move all visual properties to Tailwind classes or CSS:

```tsx
// Bad
<div style={{ padding: '16px', fontSize: '12px' }}>

// Good
<div className="p-4 text-xs">
```

The only exception is truly dynamic values computed at runtime (e.g., `style={{ '--hero-bg': `url(${backgroundImage})` }}`).

### Mobile-first responsive design

Tailwind is mobile-first by default. Write the base (mobile) styles first, then add responsive variants:

```tsx
// Mobile: full width, centered text
// Desktop (lg:): half width, left-aligned
<div className="w-full text-center lg:w-1/2 lg:text-left">
```

Use only standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`). Never use arbitrary breakpoints like `min-[425px]` or `max-[464px]`.

---

## Global CSS Structure

`src/styles/globals.css` is organized into:

1. **Tailwind directives** — `@tailwind base/components/utilities`
2. **`:root` tokens** — CSS custom properties for colors, typography, spacing
3. **`@layer base`** — Base typography resets (body, headings, links)
4. **`@layer components`** — Utility classes that don't fit as Tailwind config (`.contours`, `.font-alt`, `.social-link`, `.stretched-link`)

Do not add component-specific styles to `globals.css`. If a component needs custom CSS beyond Tailwind utilities, use a co-located SCSS module.

---

## Font Loading

### Fonts are loaded in `index.html` with preconnect

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Gloria+Hallelujah&display=swap">
```

Never use `@import url()` in CSS for fonts — it's render-blocking.

---

## Component Styling Patterns

### Background patterns

The `.contours` class in `globals.css` provides SVG background patterns. Combine with modifiers:

```tsx
// Beige contours background (used in WhySection, etc.)
<section className="bg-darkened contours">

// White contours background
<section className="contours bg-whitened">

// Green contours (footer only)
<section className="contours footer">
```

The `Section` primitive with `background="surface-contours"` handles this automatically.

### Decorative text (Highlight)

The brand decorative text pattern (Gloria Hallelujah font in primary gold) is encapsulated in `<Highlight>`:

```tsx
// Instead of:
<span className="font-alt font-primary">Mongu</span>

// Use:
<Highlight>Mongu</Highlight>
```

---

## Checklist

Before considering styles complete:

- [ ] Zero `!important` declarations
- [ ] Zero hardcoded color/spacing values — all reference Tailwind tokens or CSS custom properties
- [ ] Zero inline `style={}` (unless truly dynamic runtime values)
- [ ] Responsive design is mobile-first using standard Tailwind breakpoints
- [ ] Font loading happens in `<head>`, not in CSS
- [ ] Repeated utility class patterns use a UI primitive component
- [ ] `cn()` used for all conditional class composition

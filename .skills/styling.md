# Skill: Styling & CSS

> Use this skill when writing styles, migrating from Bootstrap, working with design tokens, or reviewing CSS/SCSS.

## Core Principle

Styles should have a single source of truth for every design decision (color, spacing, typography). Never fight the cascade with `!important` — if you need it, the architecture is wrong.

---

## Current State (Bootstrap migration context)

The project currently uses Bootstrap 4 (EOL) via SCSS with 21 `!important` declarations, ~30 hardcoded hex values, and three conflicting naming conventions. The target is to drop Bootstrap entirely and move to a utility-first approach with CSS custom properties as the token layer.

During migration, you may encounter Bootstrap classes (`Row`, `Col`, `Container`, `d-flex`, `py-4`, etc.) and `react-bootstrap` components. Replace them with the new system incrementally — don't mix old and new in the same component.

---

## Design Tokens

### Define tokens as CSS custom properties

```css
/* src/styles/globals.css */
:root {
  /* Colors */
  --color-primary: #f7b70d;
  --color-primary-hover: #f9ca4c;
  --color-primary-active: #c99407;
  --color-secondary: #8db600;
  --color-secondary-hover: #b7ce6b;
  --color-secondary-active: #719200;
  --color-dark: #16130e;
  --color-white: #ffffff;
  --color-surface: #f5f3ed;
  --color-surface-alt: #f0f4e8;

  /* Typography */
  --font-primary: 'Poppins', system-ui, sans-serif;
  --font-decorative: 'Gloria Hallelujah', cursive;
  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.25rem;     /* 20px */
  --font-size-xl: 1.5rem;      /* 24px */
  --font-size-2xl: 2rem;       /* 32px */
  --font-size-3xl: 2.5rem;     /* 40px */

  /* Spacing (consistent scale) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Breakpoints (reference — use in media queries) */
  --bp-sm: 640px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;

  /* Misc */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --shadow-card: 0 2px 8px rgba(22, 19, 14, 0.1);
}
```

### Never hardcode values

```css
/* Bad — magic hex value */
background-color: #f7b70d;
border-color: #1b1811;
padding: 16px;

/* Good — references token */
background-color: var(--color-primary);
border-color: var(--color-dark);
padding: var(--space-4);
```

If a value doesn't exist in the token set, ask whether it should be added as a token or whether an existing token is close enough. Don't invent one-off values.

---

## Styling Rules

### Zero `!important`

If you need `!important`, one of these is wrong:
1. Specificity is too high elsewhere — flatten selectors
2. A third-party library's styles are leaking — scope with a wrapper class or CSS layer
3. The cascade order is wrong — fix the import order

### No inline `style={}` in JSX

Move all visual properties to CSS/class:

```tsx
// Bad — current pattern
<Row style={{ maxHeight: '1440px', marginTop: '-10%' }}>
<div style={{ padding: '16px' }}>
<span style={{ fontSize: '12px' }}>

// Good — in the CSS module or utility class
<Row className={styles.heroRow}>
<div className={styles.cardBody}>
<span className={styles.caption}>
```

The only exception is truly dynamic values computed at runtime (e.g., `style={{ '--progress': `${percent}%` }}`).

### Mobile-first responsive design

Always write the mobile layout first, then layer on wider breakpoints:

```css
/* Mobile first (default) */
.hero {
  height: 30vh;
}

/* Tablet and up */
@media (min-width: 768px) {
  .hero {
    height: 50vh;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .hero {
    height: 70vh;
  }
}
```

Use only the standard breakpoints defined in the token set. Never use arbitrary values like `425px` or `464px`.

### One naming convention

Use **camelCase** in CSS modules (this is the default behavior of CSS module class name generation):

```css
/* Component.module.css */
.heroSection { }
.heroTitle { }
.heroSubtitle { }
```

Do not create global utility classes with kebab-case (`.font-alt`, `.social-link`). If utility classes are needed, use the chosen utility framework (Tailwind) or scoped CSS module classes.

---

## Component Styling Pattern

### Structure a component's styles

```css
/* Hero.module.css */

/* 1. Layout / positioning */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 50vh;
}

/* 2. Visual / decorative */
.hero {
  background-size: cover;
  background-position: center;
}

/* 3. Variants (scoped to this component) */
.heroCompact {
  min-height: 30vh;
}

/* 4. Responsive overrides */
@media (min-width: 1024px) {
  .hero {
    min-height: 70vh;
  }
}
```

### Parameterize with CSS custom properties for variants

When a component differs only by one or two values (like hero background image per country), use CSS custom properties instead of duplicating the entire stylesheet:

```tsx
// Component
<section
  className={styles.hero}
  style={{ '--hero-bg': `url(${backgroundImage})` } as React.CSSProperties}
>
```

```css
/* Styles */
.hero {
  background-image: var(--hero-bg);
  background-size: cover;
  background-position: center;
}
```

This eliminates the 5 duplicate hero SCSS files.

---

## Font Loading

### Never use `@import url()` in CSS for fonts

```css
/* Bad — render-blocking, discovered late */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

/* Good — in index.html, preconnected */
```

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Gloria+Hallelujah&display=swap">
```

Single request, preconnected, non-blocking with `display=swap`.

---

## Tailwind-Specific Guidance (if adopted)

### Use Tailwind utilities inline, not `@apply` in CSS files

`@apply` defeats the purpose of utility-first CSS. Only use it for truly repeated patterns that can't be a component (e.g., prose styles).

### Use `cn()` (clsx + tailwind-merge) for conditional classes

```tsx
import { cn } from '@/lib/cn'

<button className={cn(
  'px-6 py-2.5 rounded-md font-semibold transition-colors',
  variant === 'primary' && 'bg-amber-500 text-dark hover:bg-amber-400',
  variant === 'secondary' && 'border-2 border-amber-500 text-dark hover:bg-amber-50',
  className,
)}>
```

---

## Checklist

Before considering styles complete:

- [ ] Zero `!important` declarations
- [ ] Zero hardcoded color/spacing values — all reference tokens
- [ ] Zero inline `style={}` (unless truly dynamic runtime values)
- [ ] Responsive design is mobile-first with standard breakpoints
- [ ] Font loading happens in `<head>`, not in CSS
- [ ] No duplicate stylesheets for components that differ by one value
- [ ] Class names follow one consistent convention

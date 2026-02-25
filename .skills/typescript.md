# Skill: TypeScript Proficiency

> Use this skill when writing, reviewing, or refactoring any `.ts` or `.tsx` file.

## Core Principle

TypeScript exists to catch bugs at compile time. Every `any` is a hole in the safety net. This project has `strict: true` in `tsconfig.json` — honor that by writing code that actually benefits from it.

---

## Rules

### Never use `any`

There is always a better type. Common replacements:

```tsx
// children
children: React.ReactNode

// event handlers
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

// component props you don't control
props: React.ComponentPropsWithoutRef<'div'>

// truly unknown data (API responses, JSON)
data: unknown  // then narrow with type guards

// callback with flexible signature
callback: (...args: unknown[]) => void
```

If you encounter `any` in existing code, replace it with the correct type as part of whatever change you're making. Don't leave `any` behind.

### Prop interfaces live next to the component

Define the interface directly above the component. Name it `{ComponentName}Props`. Export it if other files need it.

```tsx
interface HeroProps {
  title: string
  backgroundImage: string
  subtitle?: string
}

const Hero = ({ title, backgroundImage, subtitle }: HeroProps) => { ... }
```

Do not put prop interfaces in a shared `types/` file unless they are genuinely used by multiple unrelated components.

### Use discriminated unions for variant patterns

When a component behaves differently based on a mode or variant, use a discriminated union — not a bag of optional booleans.

```tsx
// Bad — this project's current pattern
interface ButtonProps {
  primary?: boolean
  secondary?: boolean
  complementary?: boolean
  light?: boolean
  accent?: boolean
  link?: boolean
  href?: string
}
// Nothing prevents { primary: true, secondary: true, link: true, href: undefined }

// Good — impossible states are unrepresentable
type ButtonProps =
  | { variant: 'primary' | 'secondary' | 'accent'; as?: 'button'; onClick?: () => void }
  | { variant: 'primary' | 'secondary' | 'accent' | 'complementary'; as: 'link'; href: string; external?: boolean }
```

### Use `satisfies` for static data objects

When defining static content arrays (gallery images, partner data, press items), use `satisfies` to type-check without widening:

```tsx
interface GalleryItem {
  imageSrc: string
  title: string
  alt: string
}

const galleryItems = [
  { imageSrc: zambiaImg1, title: 'Lusaka Build', alt: 'Skatepark construction in Lusaka' },
  // ...
] satisfies GalleryItem[]
```

This catches typos and missing fields at compile time while preserving the literal types for autocomplete.

### Narrow `unknown` instead of casting to `any`

```tsx
// Bad
const data = response as any
console.log(data.name)

// Good
function isPartner(value: unknown): value is Partner {
  return typeof value === 'object' && value !== null && 'name' in value && 'imageSrc' in value
}
```

### Const assertions for fixed data

Use `as const` for arrays and objects that should never be mutated:

```tsx
const BRAND_COLORS = {
  primary: '#f7b70d',
  secondary: '#8db600',
  dark: '#16130e',
} as const

type BrandColor = typeof BRAND_COLORS[keyof typeof BRAND_COLORS]
```

### Use `React.ComponentPropsWithoutRef<T>` for wrapper components

When building components that wrap native HTML elements, extend the native props:

```tsx
interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  variant?: 'default' | 'wide'
}

const Section = ({ variant = 'default', children, className, ...rest }: SectionProps) => (
  <section className={cn(styles.section, styles[variant], className)} {...rest}>
    {children}
  </section>
)
```

### No `defaultProps` — use ES6 defaults

`defaultProps` is deprecated for function components in React 18+.

```tsx
// Bad (deprecated)
SEO.defaultProps = { lang: 'en', meta: [], description: '' }

// Good
function SEO({ lang = 'en', meta = [], description = '', title }: SEOProps) { ... }
```

### Import types with `type` keyword

```tsx
import type { ReactNode } from 'react'
import type { GalleryItem } from '@/data/gallery'
```

This makes the boundary between runtime and type-level code explicit, and helps bundlers with tree-shaking.

---

## Path Aliases

Use `@/` path aliases instead of deep relative imports. Configure in both `vite.config.ts` and `tsconfig.json`:

```tsx
// Bad
import Hero from '../../../../../components/Hero'
import img from '../../../../../images/zambia-1.jpg'

// Good
import Hero from '@/components/Hero'
import img from '@/images/zambia-1.jpg'
```

---

## Strictness Checklist

Before considering a TypeScript file complete:

- [ ] Zero `any` types
- [ ] All component props have an explicit interface
- [ ] No type assertions (`as`) unless narrowing from `unknown` after a guard
- [ ] Event handlers are properly typed
- [ ] Static data uses `satisfies` or explicit type annotations
- [ ] Imports use `type` keyword where applicable
- [ ] No `.js` extensions in `.tsx` file imports

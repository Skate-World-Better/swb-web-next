---
paths: ["**/*.{ts,tsx}"]
---

# TypeScript

## Never use `any`

There is always a better type:

```tsx
children: React.ReactNode
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
props: React.ComponentPropsWithoutRef<'div'>
data: unknown  // then narrow with type guards
callback: (...args: unknown[]) => void
```

If you encounter `any` in existing code, replace it with the correct type as part of your change.

## Prop interfaces next to component

Define directly above the component. Name: `{ComponentName}Props`. Export only if other files need it.

```tsx
interface HeroProps {
  title: string
  backgroundImage: string
  subtitle?: string
}

const Hero = ({ title, backgroundImage, subtitle }: HeroProps) => { ... }
```

## Discriminated unions for variant patterns

Use discriminated unions, not bags of optional booleans:

```tsx
type ButtonProps =
  | { variant: 'primary' | 'secondary' | 'accent'; as?: 'button'; onClick?: () => void }
  | { variant: 'primary' | 'secondary' | 'accent' | 'complementary'; as: 'link'; href: string; external?: boolean }
```

## `satisfies` for static data

Type-check without widening:

```tsx
const galleryItems = [
  { imageSrc: img1, title: 'Build', alt: 'Construction in Lusaka' },
] satisfies GalleryItem[]
```

## `as const` for fixed data

```tsx
const spacingMap = {
  sm: 'py-4',
  md: 'py-6 lg:py-12',
  lg: 'py-12 lg:py-24',
} as const
```

## `ComponentPropsWithoutRef<T>` for wrapper components

```tsx
interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  variant?: 'default' | 'wide'
}

const Section = ({ variant = 'default', children, className, ...rest }: SectionProps) => (
  <section className={cn('mx-auto max-w-[1140px] px-4', className)} {...rest}>
    {children}
  </section>
)
```

## No `defaultProps`

Deprecated in React 18+. Use ES6 defaults:

```tsx
function SEO({ lang = 'en', meta = [], description = '', title }: SEOProps) { ... }
```

## Import types with `type` keyword

```tsx
import type { ReactNode } from 'react'
import type { GalleryItem } from '@/data/galleries/types'
```

## Narrow `unknown` — never cast to `any`

```tsx
function isPartner(value: unknown): value is Partner {
  return typeof value === 'object' && value !== null && 'name' in value && 'imageSrc' in value
}
```

## Path aliases

Use `@/` instead of deep relative imports:

```tsx
import Hero from '@/components/CountryHero'
import img from '@/images/zambia-1.jpg'
```

## No `.js` extensions in imports

Some legacy files use `.js` extensions — remove them when touching those files.

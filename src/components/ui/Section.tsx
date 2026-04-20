import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

const spacingMap = {
  sm: 'py-4',
  md: 'py-6 lg:py-12',
  lg: 'py-12 lg:py-24',
} as const

interface SectionProps {
  children: ReactNode
  background?: 'default' | 'surface' | 'surface-contours'
  spacing?: keyof typeof spacingMap
  fluid?: boolean
  centered?: boolean
  className?: string
}

const Section = ({
  children,
  background = 'default',
  spacing = 'md',
  fluid = false,
  centered = false,
  className,
}: SectionProps) => {
  const container = (
    <div
      className={cn(
        fluid ? 'w-full px-4' : 'mx-auto w-full max-w-[1140px] px-4',
        spacingMap[spacing],
        centered && 'text-center lg:text-left',
        className,
      )}
    >
      {children}
    </div>
  )

  if (background === 'surface-contours') {
    return (
      <section className="bg-darkened contours">
        {container}
      </section>
    )
  }

  if (background === 'surface') {
    return (
      <section className="bg-darkened">
        {container}
      </section>
    )
  }

  return container
}

export default Section

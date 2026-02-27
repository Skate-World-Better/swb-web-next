import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

const gapMap = {
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-12',
} as const

interface StackProps {
  children: ReactNode
  gap?: keyof typeof gapMap
  align?: 'left' | 'center'
  className?: string
}

const Stack = ({
  children,
  gap = 'md',
  align = 'left',
  className,
}: StackProps) => (
  <div
    className={cn(
      'flex flex-col',
      gapMap[gap],
      align === 'center' && 'items-center text-center',
      className,
    )}
  >
    {children}
  </div>
)

export default Stack

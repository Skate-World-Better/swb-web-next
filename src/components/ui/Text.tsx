import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TextProps {
  children: ReactNode
  size?: 'sm' | 'base'
  className?: string
}

const Text = ({ children, size = 'base', className }: TextProps) => (
  <p className={cn(size === 'sm' && 'text-sm', className)}>
    {children}
  </p>
)

export default Text

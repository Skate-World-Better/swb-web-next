import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

const tagMap: Record<number, ElementType> = {
  2: 'h2',
  3: 'h3',
  5: 'h5',
  6: 'h6',
}

interface HeadingProps {
  children: ReactNode
  level?: 2 | 3 | 5 | 6
  as?: ElementType
  sub?: boolean
  className?: string
}

const Heading = ({
  children,
  level = 3,
  as,
  sub = false,
  className,
}: HeadingProps) => {
  const Tag = as ?? tagMap[level] ?? 'h3'

  return (
    <Tag className={cn(sub && 'sub', className)}>
      {children}
    </Tag>
  )
}

export default Heading

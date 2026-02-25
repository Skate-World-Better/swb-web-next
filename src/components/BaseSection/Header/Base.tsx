import type { ElementType, ReactNode } from 'react'

interface BaseProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

const Base = ({children, className, as: Tag = 'h2'}: BaseProps) => (
  <Tag className={className}>
    {children}
  </Tag>
)

Base.displayName = 'BaseSection.Header.Base'

export default Base

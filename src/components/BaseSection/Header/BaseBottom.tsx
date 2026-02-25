import type { ElementType, ReactNode } from 'react'

interface BaseBottomProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

const BaseBottom = ({children, className, as: Tag = 'h4'}: BaseBottomProps) => (
  <Tag className={className}>
    {children}
  </Tag>
)

BaseBottom.displayName = 'BaseSection.Header.BaseBottom'

export default BaseBottom

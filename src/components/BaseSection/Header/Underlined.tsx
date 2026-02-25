import type { ElementType, ReactNode } from 'react'

interface UnderlinedProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

const Underlined = ({children, className, as: Tag = 'h5'}: UnderlinedProps) => (
  <Tag className={className}>
    {children}
  </Tag>
)

Underlined.displayName = 'BaseSection.Header.Underlined'

export default Underlined

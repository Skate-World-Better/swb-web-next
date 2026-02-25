import type { ElementType, ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

const Text = ({children, className, as: Tag = 'h3'}: TextProps) => (
  <Tag className={className}>
    {children}
  </Tag>
)

Text.displayName = 'BaseSection.Header.Text'

export default Text

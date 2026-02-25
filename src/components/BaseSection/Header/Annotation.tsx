import type { ElementType, ReactNode } from 'react'

interface AnnotationProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

const Annotation = ({children, className, as: Tag = 'h6'}: AnnotationProps) => (
  <Tag className={className}>
    {children}
  </Tag>
)

Annotation.displayName = 'BaseSection.Header.Annotation'

export default Annotation

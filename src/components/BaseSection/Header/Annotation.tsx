interface AnnotationProps {
  children: any
  className?: string
}

const Annotation = ({children, className}: AnnotationProps) => (
  <h6 className={className}>
    {children}
  </h6>
)

Annotation.displayName = 'BaseSection.Header.Annotation'

export default Annotation

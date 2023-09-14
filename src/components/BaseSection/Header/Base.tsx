const Base = ({children, className}: any) => (
  <h2 className={className}>
    {children}
  </h2>
)

Base.displayName = 'BaseSection.Header.Base'

export default Base

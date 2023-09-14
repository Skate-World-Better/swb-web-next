const Underlined = ({children, className}: any) => (
  <h5 className={className}>
    {children}
  </h5>
)

Underlined.displayName = 'BaseSection.Header.Underlined'

export default Underlined

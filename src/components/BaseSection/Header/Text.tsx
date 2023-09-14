const Text = ({children, className}: any) => (
  <h3 className={className}>
    {children}
  </h3>
)

Text.displayName = 'BaseSection.Header.Text'

export default Text

const Text = ({children, className}: any) => (
  <p className={className}>
    {children}
  </p>
)

Text.displayName = 'BaseSection.Text'

export default Text

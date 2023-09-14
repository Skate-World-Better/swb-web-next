import Container from 'react-bootstrap/Container'

import Header from './Header'
import Text from './Text.tsx'

const BaseSection = ({ children,  ...props }: any) => (
  <Container {...props}>
    {children}
  </Container>
)

BaseSection.Header = Header
BaseSection.Text = Text

BaseSection.displayName = 'BaseSection'

export default BaseSection

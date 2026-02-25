import type { ReactNode } from 'react'
import type { ContainerProps } from 'react-bootstrap/Container'
import Container from 'react-bootstrap/Container'

import Header from './Header'
import Text from './Text.tsx'

interface BaseSectionProps extends ContainerProps {
  children: ReactNode
}

const BaseSection = ({ children, ...props }: BaseSectionProps) => (
  <Container {...props}>
    {children}
  </Container>
)

BaseSection.Header = Header
BaseSection.Text = Text

BaseSection.displayName = 'BaseSection'

export default BaseSection

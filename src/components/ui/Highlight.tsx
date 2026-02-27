import type { ReactNode } from 'react'

interface HighlightProps {
  children: ReactNode
}

const Highlight = ({ children }: HighlightProps) => (
  <span className="font-alt font-primary">{children}</span>
)

export default Highlight

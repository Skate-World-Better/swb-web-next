import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

import styles from './index.module.scss'

interface ButtonProps {
  children: ReactNode
  className?: string
  link?: boolean
  href?: string
  target?: string
  primary?: boolean
  secondary?: boolean
  complementary?: boolean
  light?: boolean
  accent?: boolean
  block?: boolean
  onClick?: () => void
}

const Button = ({
  children,
  className,
  link,
  href,
  target,
  primary,
  secondary,
  complementary,
  light,
  accent,
  block,
  onClick,
}: ButtonProps) => {
  if (link) {
    return <a href={href} rel="noreferrer" target={target} className={cn(className,
      styles.btn,
      primary && styles.btnPrimary,
      secondary && styles.btnSecondary,
      accent && styles.btnAccent,
      block && styles.btnBlock,
      complementary && !light && styles.btnComplementaryDark,
      complementary && light && styles.btnComplementaryLight,
    )}>
      {children}
    </a>
  }

  return <button type="button" onClick={onClick} className={cn(className,
    styles.btn,
    accent && styles.btnAccent,
    primary && styles.btnPrimary,
    secondary && styles.btnSecondary,
    block && styles.btnBlock,
    complementary && styles.btnComplementaryDark,
  )}>
    {children}
  </button>
}

export default Button

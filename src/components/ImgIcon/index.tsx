import { cn } from '@/lib/cn'

const sizeClasses = {
  small: 'h-9 w-auto',
  medium: 'h-12 w-auto',
  large: 'h-28 w-auto',
} as const

interface ImgIconProps {
  size: 'small' | 'medium' | 'large'
  src: string
  alt?: string
  className?: string
}

const ImgIcon = (props: ImgIconProps) => {
  return <img src={props.src} alt={props.alt ?? ''} className={cn(props.className, sizeClasses[props.size])} loading="lazy" decoding="async" />
}

export default ImgIcon

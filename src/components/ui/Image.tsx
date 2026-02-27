import { cn } from '@/lib/cn'

interface ImageProps {
  src: string
  alt?: string
  rounded?: boolean
  className?: string
}

const Image = ({ src, alt = '', rounded = true, className }: ImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn(
      'max-w-full h-auto',
      rounded && 'rounded-lg',
      className,
    )}
    loading="lazy"
    decoding="async"
  />
)

export default Image

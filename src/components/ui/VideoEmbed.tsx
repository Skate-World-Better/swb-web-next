import { cn } from '@/lib/cn'

interface VideoEmbedProps {
  src: string
  title: string
  rounded?: boolean
  className?: string
}

const VideoEmbed = ({ src, title, rounded = true, className }: VideoEmbedProps) => (
  <div
    className={cn(
      'relative h-0 overflow-hidden pb-[56.25%]',
      className,
    )}
  >
    <iframe
      title={title}
      src={src}
      className={cn(
        'absolute inset-0 h-full w-full border-0',
        rounded && 'rounded-lg',
      )}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export default VideoEmbed

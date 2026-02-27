import type { ReactNode } from 'react'
import { useState } from 'react'
import { cn } from '@/lib/cn'

import style from './ImageCard.module.scss'

type AspectRatio = '4:5' | '3:4' | '2:3' | '1:2' | '1:1'

interface ImageCardProps {
  imageSrc?: string
  ratio?: AspectRatio
  link?: string
  title?: string
  subtitle?: string
  content?: ReactNode
  isExpandable?: boolean
  withBlur?: boolean
  withGradient?: boolean
  isLink?: boolean
  removeShadow?: boolean
  fullWidth?: boolean
  loading?: 'lazy' | 'eager'
}

const ImageCard = ({
  imageSrc,
  ratio,
  link,
  title,
  subtitle,
  content,
  isExpandable,
  withBlur,
  withGradient,
  isLink,
  removeShadow,
  fullWidth,
  loading = 'lazy',
}: ImageCardProps) => {
  const [ open, setOpen ] = useState(false)

  const ratioToPadding = (ratioSring?: AspectRatio) => {
    switch (ratioSring) {
      case '4:5':
        return '125%'
      case '3:4':
        return '133.33%'
      case '2:3':
        return '150%'
      case '1:2':
        return '200%'
      case '1:1':
      default:
        return '100%'
    }
  }

  return (
    <div
      className={cn(style.cardCustom, removeShadow && style.noShadow)}
      style={{ paddingBottom: ratioToPadding(ratio) }}
      onMouseEnter={() => {
        if (!isExpandable) {
          return false
        }
        setOpen(true)
      }}
      onMouseLeave={() => {
        if (!isExpandable) {
          return false
        }
        setOpen(false)
      }}
    >
      <div className={cn(style.cardImageContainer, withBlur && style.withBlur, fullWidth && style.fullWidth)}>
        <img src={imageSrc} loading={loading} alt={title || ''} />
      </div>
        <div
          className={cn(style.cardContentContainer, withGradient && style.withGradient)}
        >
          {(!isExpandable && title) && <div className="p-6">
            {subtitle && <span className="text-xs">{subtitle}</span>}
            <h3>{title}</h3>
          </div>}
          {isExpandable && (
            <div
              className={cn(style.cardContent, open && style.lightBackground)}
            >
              <div>
                {subtitle && <span className="text-xs">{subtitle}</span>}
                <h3>{title}</h3>
              </div>
              {(content || link) && (
                <div className={cn(style.collapseWrapper, open && style.collapseOpen)}>
                  <div className={style.collapseContent}>
                    {content && <p>{content}</p>}
                    {link && (
                      <a href={link} target="_blank" rel="noreferrer noopener" className="text-dark">
                        Read more
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      {isLink && link && <a href={link} target="_blank" rel="noreferrer noopener" className="stretched-link" />}
    </div>
  )
}

export default ImageCard

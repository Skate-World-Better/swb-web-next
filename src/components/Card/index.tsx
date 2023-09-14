import { useState } from 'react'
import classNames from 'classnames'
import Collapse from 'react-bootstrap/Collapse'
import Image from 'react-bootstrap/Image'

import style from './ImageCard.module.scss'

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
  fullWidth
}: any) => {
  const [ open, setOpen ] = useState(false)

  const ratioToPadding = (ratioSring: any) => {
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
      className={classNames(style.cardCustom, {
        [style.noShadow]: removeShadow,
      })}
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
      <div className={classNames(style.cardImageContainer, {
        [style.withBlur]: withBlur,
        [style.fullWidth]: fullWidth,
      })}>
        <Image src={imageSrc} />
      </div>
        <div
          className={classNames(style.cardContentContainer, {
            [style.withGradient]: withGradient
          })}
        >
          {(!isExpandable && title) && <div
            style={{ padding: '16px' }}
          >
            {subtitle && <span style={{ fontSize: "12px" }}>{subtitle}</span>}
            <h3>{title}</h3>
          </div
            >}
          {isExpandable && (
            <div
              className={classNames(style.cardContent, {
                [style.lightBackground]: open,
              })}
            >
              <div>
                {subtitle && <span style={{ fontSize: "12px" }}>{subtitle}</span>}
                <h3>{title}</h3>
              </div>
              {(content || link) && (
                <Collapse in={open}>
                  <div>
                    {content && <p>{content}</p>}
                    {link && (
                      <a href={link} target="_blank" rel="norefferer noopener" className="text-dark">
                        Read more
                      </a>
                    )}
                  </div>
                </Collapse>
              )}
            </div>
          )}
        </div>
      {isLink && link && <a href={link} target="_blank" rel="norefferer noopener" className={classNames('stretched-link')} />}
    </div>
  )
}

export default ImageCard

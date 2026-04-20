import type { ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import styles from './Carousel.module.scss'

interface ButtonGroupProps {
  next?: () => void
  previous?: () => void
}

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <div className={styles.carouselButtonGroup}>
      <button
        type="button"
        className={styles.carouselButton}
        onClick={previous}
        aria-label="Previous slide"
      >
        <ArrowLeft size={40} />
      </button>
      <button
        type="button"
        className={styles.carouselButton}
        onClick={next}
        aria-label="Next slide"
      >
        <ArrowRight size={40} />
      </button>
    </div>
  );
}

interface CarouselConfig {
  countLarge?: number
  countDesktop?: number
  countTablet?: number
  countMobile?: number
  visibilityLarge?: number
  visibilityDesktop?: number
  visibilityTablet?: number
  visibilityMobile?: number
  hidePartial?: boolean
}

interface MediaCarouselProps {
  items: Record<string, unknown>[]
  renderItem: (data: Record<string, unknown>) => ReactNode
  config?: CarouselConfig
}

const MediaCarousel = ({
  items,
  renderItem,
  config,
}: MediaCarouselProps) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2500 },
      items: config?.countLarge ?? 5,
      partialVisibilityGutter: config?.visibilityLarge ?? 20,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: config?.countDesktop ?? 4,
      partialVisibilityGutter: config?.visibilityDesktop ?? 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: config?.countTablet ?? 2,
      partialVisibilityGutter: config?.visibilityTablet ?? 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: config?.countMobile ?? 1,
      partialVisibilityGutter: config?.visibilityMobile ?? 0,
    },
  }

  return <div className={styles.carouselContainer}>
    <Carousel
      responsive={responsive}
      infinite={true}
      focusOnSelect={true}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      partialVisible={config?.hidePartial ? !config.hidePartial : true}
      minimumTouchDrag={30}
    >
      {items.length > 0 && items.map((data: Record<string, unknown>, index: number) => (
        <div key={index} className={styles.carouselItem}>
          {renderItem(data)}
        </div>
      ))}
    </Carousel>
  </div>
}

export default MediaCarousel

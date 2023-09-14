import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import styles from './Carousel.module.scss'

const ButtonGroup = ({ next, previous }: any) => {
  return (
    <div className={styles.carouselButtonGroup}>
      <div className={styles.carouselButton} onClick={previous} >
        <ArrowLeft size={40} />
      </div>
      <div className={styles.carouselButton} onClick={next} >
        <ArrowRight size={40} />
      </div>
    </div>
  );
}

const MediaCarousel = ({
  items,
  component,
  config,
}: any) => {
  const responsive = {
    // Change for breakpoint variables
    superLargeDesktop: {
      breakpoint: {
        max: 4000,
        min: 2500
      },
      items: config && config.countLarge ? config.countLarge : 5,
      partialVisibilityGutter: config && config.visibilityLarge ? config.visibilityLarge : 20
    },
    desktop: {
      breakpoint: {
        max: 2500,
        min: 1024
      },
      items: config && config.countDesktop ? config.countDesktop : 4,
      partialVisibilityGutter: config && config.visibilityDesktop ? config.visibilityDesktop : 20
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: config && config.countTablet ? config.countTablet : 2,
      partialVisibilityGutter: config && config.visibilityTablet ? config.visibilityTablet : 10
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: config && config.countMobile ? config.countMobile : 1,
      partialVisibilityGutter: config && config.visibilityMobile ? config.visibilityMobile : 0
    }
  }

  return <div className={styles.carouselContainer}>
    <Carousel
      responsive={responsive}
      infinite={true}
      focusOnSelect={true}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      partialVisible={config && config.hidePartial ? !config.hidePartial : true}
      minimumTouchDrag={30}
    >
      {items.length && items.map((data: any, index: number) => <div key={index} className={styles.carouselItem}>
        {React.cloneElement(component, { ...data })}
      </div>)}
    </Carousel>
  </div>
}

export default MediaCarousel

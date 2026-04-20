/**
 * Example: Gallery data file
 * Location: src/data/galleries/{country}.ts
 *
 * Exports an array of GalleryItem objects for the country's photo gallery carousel.
 */
import type { GalleryItem } from './types'

import ImageOne from '../../images/{country}-1.jpg'
import ImageTwo from '../../images/{country}-2.jpg'
import ImageThree from '../../images/{country}-3.jpg'
// ... add as many images as needed

export const exampleGalleryData: GalleryItem[] = [
  { imageSrc: ImageOne },
  { imageSrc: ImageTwo },
  { imageSrc: ImageThree },
]

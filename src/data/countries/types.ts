import type { ResultCardProps } from '@/components/ui/ResultCard'
import type { GalleryItem } from '@/data/galleries/types'

export interface CountryHeroData {
  cityName: string
  countryName: string
  backgroundImage: string
}

export interface CountryAboutData {
  heading: string
  description: string
  /** Additional content below the main description (e.g. links, extra paragraphs) */
  extraDescription?: string
  image: string
  /** Content shown below the image (e.g. Ethiopia's quote) */
  imageCaption?: string
  /** Annotation above the results grid — defaults to "Results" */
  resultsAnnotation?: string
  results: ResultCardProps[]
}

export interface CountryWhyData {
  heading: string
  description: string
}

export type AspectRatio = '4:5' | '3:4' | '2:3' | '1:2' | '1:1'

export interface CountryGalleryData {
  /** Small label above heading — defaults to "Photogallery" */
  annotation?: string
  heading: string
  description: string
  images: GalleryItem[]
  /** Image card aspect ratio — defaults to "2:3" */
  imageRatio?: AspectRatio
}

export interface CountryPageData {
  hero: CountryHeroData
  about: CountryAboutData
  why: CountryWhyData
  gallery: CountryGalleryData
}

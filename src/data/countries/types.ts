import type { ReactNode } from 'react'
import type { ResultCardProps } from '@/components/ui/ResultCard'
import type { GalleryItem } from '@/data/galleries/types'

export interface CountryHeroData {
  cityName: string
  countryName: string
  backgroundImage: string
}

export interface CountryAboutData {
  heading: ReactNode
  description: ReactNode
  /** Additional content below the main description (e.g. links, extra paragraphs) */
  extraDescription?: ReactNode
  image: string
  /** Content shown below the image (e.g. Ethiopia's quote) */
  imageCaption?: ReactNode
  /** Annotation above the results grid — defaults to "Results" */
  resultsAnnotation?: string
  results: ResultCardProps[]
}

export interface CountryWhyData {
  heading: ReactNode
  description: ReactNode
}

export type AspectRatio = '4:5' | '3:4' | '2:3' | '1:2' | '1:1'

export interface CountryGalleryData {
  /** Small label above heading — defaults to "Photogallery" */
  annotation?: string
  heading: ReactNode
  description: ReactNode
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

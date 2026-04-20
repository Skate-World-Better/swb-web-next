/**
 * Example: Skatepark data file
 * Location: src/data/skateparks/{country}.ts
 *
 * Used with the shared SkateparkSection component.
 * For custom skatepark sections (multiple parks, video embeds),
 * create a dedicated component instead — see MozambiqueSkateparkSection.tsx.
 */
import type { SkateparkData } from './types'

import ParkOne from '@/images/{country}-park-1.jpg'
import ParkTwo from '@/images/{country}-park-2.jpg'
import ParkThree from '@/images/{country}-park-3.jpg'
// ... add all park photos

export const exampleSkateparkData: SkateparkData = {
  heading: 'This is the result of *our work*!',
  parkName: 'Park Name Here',
  description:
    'Description of the skatepark — location, accessibility, who manages it, what activities happen there.',
  images: [ParkOne, ParkTwo, ParkThree],
}

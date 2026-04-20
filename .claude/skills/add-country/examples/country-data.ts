/**
 * Example: Country page data file
 * Location: src/data/countries/{country}.ts
 *
 * This file exports a single CountryPageData object containing
 * all content for the country page template.
 */
import type { CountryPageData } from './types'
import { exampleGalleryData } from '@/data/galleries/example'

// Hero image
import heroImage from '@/images/{country}-hero.jpg'
// About section image
import aboutImage from '@/images/{country}-about.jpg'
// Result icons (reuse existing or add new to src/images/icons/)
import IconOne from '@/images/icons/icon_public_two_skateparks.png'
import IconTwo from '@/images/icons/icon_community_space.png'
import IconThree from '@/images/icons/icon_local_support.png'

export const exampleData: CountryPageData = {
  hero: {
    cityName: 'City Name',
    countryName: 'Country',
    backgroundImage: heroImage,
  },
  about: {
    heading: 'What did we do in *City Name?*',
    description:
      'Main description text. Use *asterisks* for highlighted words. Use [text](url) for links.',
    // Optional: extra paragraph below main description
    // extraDescription: 'Additional text or links',
    image: aboutImage,
    // Optional: caption below the about image
    // imageCaption: '"A quote or caption"',
    // Optional: change "Results" label above the results grid
    // resultsAnnotation: 'Intentions',
    results: [
      {
        icon: IconOne,
        title: 'Result title one',
        description: 'Description of the first result or achievement.',
      },
      {
        icon: IconTwo,
        title: 'Result title two',
        description: 'Description of the second result.',
      },
      {
        icon: IconThree,
        title: 'Result title three',
        description: 'Description of the third result.',
      },
    ],
  },
  why: {
    heading: 'Why did we go to *City Name?*',
    description:
      'Explanation of why this location was chosen for the project.',
  },
  gallery: {
    // Optional: override "Photogallery" label
    // annotation: 'Stories',
    heading: 'Some cool *moments*',
    description:
      'Description text for the gallery section.',
    images: exampleGalleryData,
    // Optional: override default "2:3" aspect ratio
    // imageRatio: '4:5',
  },
}

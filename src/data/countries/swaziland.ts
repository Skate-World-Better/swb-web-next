import type { CountryPageData } from './types'
import { swazilandGalleryData } from '@/data/galleries/swaziland'

import heroImage from '@/images/swaziland-trip.jpg'
import FlagImage from '@/images/swaziland-flag.jpg'
import TwoSkateparks from '@/images/icons/icon_public_two_skateparks.png'
import ThreeBlock from '@/images/icons/icon_three_block_center.png'
import CommunityProjects from '@/images/icons/icon_community_projects.png'

export const swazilandData: CountryPageData = {
  hero: {
    cityName: 'Mbabane',
    countryName: 'Swaziland',
    backgroundImage: heroImage,
  },
  about: {
    heading: 'What did we do in *Mbabane?*',
    description:
      'Mbabane is the capital city of Swaziland right in the middle of the Drakensberg range. We built a skatepark in a public park in the middle of the city with the great view over the mountains. We went down in early 2023 in a group of eight volunteers from RSA, France, Belgium and mostly the crew from [Bonidee Skateparks](https://www.bonidee.cz/?lang=en). In forty days we managed to build a multifunctional 350 square meter big skatepark feasible for cultural events, gatherings, BBQ and so on. We engaged with an Italian NGO Cospe who regularly runs their program called "YES" - Youth Empowerment Strategy on top of the skateboarding classes secured by the local organization Emaswati Skate.',
    image: FlagImage,
    results: [
      {
        icon: TwoSkateparks,
        title: 'Public skatepark',
        description:
          'We have obtained a public land of 350 square meters. A historic, non-functional miniramp stood on that land and we worked it into the new concrete skatepark with all elements of modern skateboarding.',
      },
      {
        icon: ThreeBlock,
        title: 'Three Block Fanclub',
        description:
          'To be found only at Stalinplaza, Prague - Czech Rep. & Lafezeka skatepark, Mbabane - Swaziland. This granite ledge was created in an aim to show respect to the Prague skateboarding community. We created a little Stalinplaza vibe in Africa, to prove that keeping [@stalinplaza](https://www.instagram.com/stalinplaza/) the way it is, is the very best option. Its existence has produced an ambition, creativity and countless friendships over the years and it shall do the same in Swaziland and [@eswatini_skateboarding](https://www.instagram.com/eswatini_skateboarding/)',
      },
      {
        icon: CommunityProjects,
        title: 'Community projects',
        description:
          'Our key partner on this project was Emaswati skate. The organization has an agenda of working in poorer regions of the country just as much as in the capital city. They use skateboarding to tackle the everyday struggles around the country. This skatepark is the biggest of five facilities that escalated around the country.',
      },
    ],
  },
  why: {
    heading: 'Why did we want to go to *Mbabane?*',
    description:
      'We took a trip to Mbabane after we finished our first project in Mozambique and we just fell in love with the local nature, atmosphere and the community. We engaged in some planning and managed to deliver the project four years later. Connecting the surrounding countries together through our actions is a lifetime mission. We\'d like to create a strong international community, which is why we select countries in a close proximity.',
  },
  gallery: {
    heading: 'Some cool *moments*',
    description:
      'Here are a few pictures from a trip around Swaziland and the construction process. Should you be interested in having one printed on your wall, just let us know!',
    images: swazilandGalleryData,
  },
}

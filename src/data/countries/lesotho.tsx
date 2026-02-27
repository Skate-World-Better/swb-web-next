import type { CountryPageData } from './types'
import Highlight from '@/components/ui/Highlight'
import { lesothoGalleryData } from '@/data/galleries/lesotho'

import heroImage from '@/images/lesotho-2.jpg'
import Lesotho4 from '@/images/lesotho-4.jpg'
import TwoSkateparks from '@/images/icons/icon_public_two_skateparks.png'
import OlympicCenter from '@/images/icons/icon_olympic_center.png'
import LocalNgo from '@/images/icons/icon_local_ngo.png'

export const lesothoData: CountryPageData = {
  hero: {
    cityName: 'Maseru',
    countryName: 'Lesotho',
    backgroundImage: heroImage,
  },
  about: {
    heading: <>What will we do in <Highlight>Lesotho?</Highlight></>,
    description: (
      <>
        We decided to build the next project in the mountainous Lesotho, particularly in the capital city of Maseru. We have secured a land in the Lepereng area easily accessible by all the Maseru locals. The project is designed to meet all the parameters and at the same time be feasible to be constructed by a team of professionals within a maximum period of five weeks. The land falls under the local Olympic Committee and the skatepark will be surrounded by other sports facilities that will support the integrity of the entire area. The space will be publicly accessible, managed by the capital and the local organization Lesotho Skateboarding.
      </>
    ),
    image: Lesotho4,
    resultsAnnotation: 'Intentions',
    results: [
      {
        icon: TwoSkateparks,
        title: 'Public skatepark',
        description: (
          <>
            The Lepereng skatepark will be maintained by the Olympic committee of Lesotho and the local organization Lesotho Skateboarding. This means the park will be open to public at all times, but rules and order will be looked after by the facility administrator. Local crew will organize regular skateboarding lectures and other events that shall be held in the park for the enjoyment of the general public.
          </>
        ),
      },
      {
        icon: OlympicCenter,
        title: 'Olympic center',
        description: (
          <>
            The skatepark will feature professional elements, but also a vast area for the beginners, where kids can learn without limiting the rest of the park users. Apart from skateboarding, the area will be eligible for public events, video screenings lectures and other sportive activities. We will make sure that the project is electrified for an easy device plug in and we will paint a little pitch on the ground, so that the space has a greater use potential for the Olympic center.
          </>
        ),
      },
      {
        icon: LocalNgo,
        title: 'Local NGO',
        description: (
          <>
            We have a great support for this project amidst the local crew, but also the local non-profit sector. We count on a regular involvement of the Lesotho skateboarding members, but on top of that, we have partnered with <a
            href="https://www.kick4life.org/">Kick4Life</a> organization that will be involved in the construction process.
          </>
        ),
      },
    ],
  },
  why: {
    heading: <>Why do we want to go to <Highlight>Maseru?</Highlight></>,
    description: (
      <>
        Lesotho has always drew our attention. A small nation in the mountains, beautiful nature, amazing people, very little public life. An ambition of this project is a deeper connection of the centers in Mozambique, Swaziland and Lesotho. Geographically, they are in a close proximity, and their further cooperation is therefore a multi-year strategy of the Skate World Better initiative.
      </>
    ),
  },
  gallery: {
    heading: <>Some cool <Highlight>moments</Highlight></>,
    description: (
      <>
        We went down to Lesotho for a research trip in 2024 to get to know our local partners and look at the future jobsite.
      </>
    ),
    images: lesothoGalleryData,
  },
}

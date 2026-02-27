import type { CountryPageData } from './types'
import Highlight from '@/components/ui/Highlight'
import { zambiaGalleryData } from '@/data/galleries/zambia'

import heroImage from '@/images/zambia-hero.jpg'
import KidsZambia from '@/images/kids_zambia.jpg'
import TwoSkateParks from '@/images/icons/icon_public_two_skateparks.png'
import CommunitySpace from '@/images/icons/icon_community_space.png'
import LocalSupport from '@/images/icons/icon_local_support.png'

export const zambiaData: CountryPageData = {
  hero: {
    cityName: 'Mongu',
    countryName: 'Zambia',
    backgroundImage: heroImage,
  },
  about: {
    heading: <>What did we do in <Highlight>Mongu?</Highlight></>,
    description: (
      <>
        For some Mongu may be a small city in the western province of Zambia but for
        skateboarding, Mongu is a great opportunity. With a great historical importance for
        the region, Mongu lies right on the edge of the Liuwa plains famous for its
        seasonal animal migration. The city may be far less populous and glamorous
        than the capital Lusaka but it still entertains an incredibly strong and united
        community of young people. As soon as we got in touch with the guys from We
        Skate Mongu, we just knew this is the place where we want to go next.
      </>
    ),
    image: KidsZambia,
    results: [
      {
        icon: TwoSkateParks,
        title: 'Public skatepark',
        description: (
          <>
            We bought a 1200m2 land plot in the south of
            Mongu. We built a public skatepark and an adjacent cabin right next to it,
            connected to water and electricity. The kids have a place to hang out, relax,
            skate, dance and attend lectures in the prepared program.
          </>
        ),
      },
      {
        icon: CommunitySpace,
        title: 'Community space',
        description: (
          <>
            While skateboarding is an important tool for us and our projects, we make sure that the space can be used for multiple purposes. After all, We Skate Mongu is a community of skaters, dancers, artists and people of all interests. The place is open to screenings, exhibitions, talks and other events.
          </>
        ),
      },
      {
        icon: LocalSupport,
        title: 'Local support',
        description: (
          <>
            We connected with a bunch of local CSOs for a greater impact.
            Any CSO can use the entire space as a platform for seminars, workshops and
            other activities.
          </>
        ),
      },
    ],
  },
  why: {
    heading: <>Why did we want to go to <Highlight>Mongu?</Highlight></>,
    description: (
      <>
        To put it simply, our local partner We Skate Mongu was doing outstanding work
        and we really wanted to support them in their mission. We have to mention
        Johnny - the ever smiling leader. He and his team had been providing street
        education for the underprivileged kids, initiating activities for the youngest and
        bringing skateboarding to the lives of the people in Mongu for years. The focus of
        We Skate Mongu had not gone unheard in the skateboarding community. We
        decided to bring to life a 700m2 concrete park and we brought a ton of boards
        with it.
      </>
    ),
  },
  gallery: {
    heading: <>Zambia is the <Highlight>fashion</Highlight></>,
    description: (
      <>
        We produce our own merch to celebrate the cultures of Africa, of its countries and people. Visit one of the events, we organize, or simply text us on instagram if you want your piece!
      </>
    ),
    images: zambiaGalleryData,
  },
}

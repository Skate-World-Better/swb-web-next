import type { CountryPageData } from './types'
import { Link } from 'react-router-dom'
import Highlight from '@/components/ui/Highlight'
import { ethiopiaGalleryData } from '@/data/galleries/ethiopia'

import heroImage from '@/images/ethiopia-hero.jpg'
import KidsEthiopia from '@/images/kids-ethiopia.jpg'
import TwoSkateparks from '@/images/icons/icon_public_two_skateparks.png'
import CommunitySpace from '@/images/icons/icon_community_space.png'
import BonideeCoop from '@/images/icons/icon_swb_bonidee_coop.png'

export const ethiopiaData: CountryPageData = {
  hero: {
    cityName: 'Addis Abeba',
    countryName: 'Ethiopia',
    backgroundImage: heroImage,
  },
  about: {
    heading: <>What did we do in <Highlight>Addis Abeba?</Highlight></>,
    description: (
      <>
        For the first time in our existence we decided to go on a mission to a destination,
        where skateboarding and skate-related activities already have a long history. The
        capital city of Ethiopia has two standing skateparks where the localy established
        organization Ethiopia Skate runs their programs. Based on a recommendation from
        our friends from <Link to="https://foreverplayground.org/">Forever Playground Magazine</Link> we decided to contact Israel Dejene,
        the local hero who runs a suburban based social project called Megabi House, where
        all street kids are welcome. He is passionate about skateboarding and he even linked
        up with Tony Hawk, Nyjah Huston and the gang and they went down there back in
        2015 to build him a miniramp right on the land of Megabi House. In December 2023
        we went down to Addis to continue on the job sparked by Tony and we worked out
        the space into a full skatepark. It took us two weeks of work day and night in a crew
        of six people. We left a concrete jungle with obstacles for the most skilled riders but
        also for the very beginners. We decorated the space with a mozaic, couple plants
        and two palmtrees. Having left more than twenty complete boards, shoes and couple
        of concrete tools, we believe that this project will continue to thrive in the years to
        come!
      </>
    ),
    extraDescription: (
      <>SEE MORE OF HIS WORK <Link to="https://www.megabi.org/megabiskate">HERE!</Link></>
    ),
    image: KidsEthiopia,
    imageCaption: (
      <>
        "Megabi House is a home for children and youth who literally have no place to sleep. In our community there are many street kids who have no home or family to go home to at the end of the day"
      </>
    ),
    results: [
      {
        icon: TwoSkateparks,
        title: 'Public skatepark',
        description: (
          <>
            The skatepark is open to anybody, just go ahead and ask around, or shoot us a message on whatsapp and we will put you together with the local crew.The park is usually serving as a kids playground, but at certain hours it is open for public sessions. Go ahead and session it if you're in the town.
          </>
        ),
      },
      {
        icon: CommunitySpace,
        title: 'Community space',
        description: (
          <>
            Megabi house is a community space ran by Israel Dejene and his sisters. Many families live together in a shared housing, creating a sustainable form of existence. With countles children running around the vast area is lacking a calm space where children can feel safe and can focus on themselves. Even better they can spend their time being active in the skatepark.
          </>
        ),
      },
      {
        icon: BonideeCoop,
        title: 'Company support',
        description: (
          <>
            This was the first project ever to be completely put together by the Bonidee_Skateparks guys. In a crew of 7 people together with a Slovakian photographer Kubo Kri&#x17e;o, this project was completed in 14 days of non stop work followed by a couple days of non stop fun.
          </>
        ),
      },
    ],
  },
  why: {
    heading: <>Why did we go to <Highlight>Addis</Highlight></>,
    description: (
      <>
        The Czech Republic has a long-lasting partnership with Ethiopia thus we've managed to secure a funding for this project. With the potential feasible budget, we looked out for a partner and once we got to know Israel Dejene and his Megabi organization we knew right away that this is a project that we should invest our time into.
      </>
    ),
  },
  gallery: {
    annotation: 'Stories',
    heading: <>Some cool <Highlight>moments</Highlight></>,
    description: (
      <>
        Here are a few pictures from Ethiopia
        and the construction process. Should you be interested in having
        one printed on your wall, just let us know!
      </>
    ),
    images: ethiopiaGalleryData,
  },
}

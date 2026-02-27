import type { CountryPageData } from './types'
import Highlight from '@/components/ui/Highlight'
import { mozambiqueGalleryData } from '@/data/galleries/mozambique'

import heroImage from '@/images/kids-in-skatepark.jpg'
import KidsImage from '@/images/kids-assembling-skateboard.jpg'
import TwoSkateparks from '@/images/icons/icon_public_two_skateparks.png'
import SharingBoards from '@/images/icons/icon_sharing_boards.png'
import SkateboardChamp from '@/images/icons/icon_skateboard_champ.png'
import CorruptionInMozambique from '@/components/pages/MozambiquePage/Sections/GallerySection/documents/Corruption-in-Mozambique.pdf'

export const mozambiqueData: CountryPageData = {
  hero: {
    cityName: 'Maputo',
    countryName: 'Mozambique',
    backgroundImage: heroImage,
  },
  about: {
    heading: <>What went down in <Highlight>Maputo?</Highlight></>,
    description: (
      <>
        Mozambique was our very first project. It took place in late 2019 and 36 international volunteers from around the world were present, many of them united under the amazing organization <a href="https://wondersaroundtheworld.org/">Wonders Around The World</a>. We managed to build two skateparks, one in the center and one on the edge of the city of Maputo. Further we have brought 40+ boards to the two organizations we supported, namely ASM and Maputo-Skate. The project was our first one, therefore it took us long months of preparation, then two months of preparation In Maputo and then about six weeks of work. We've build the parks simultaneously and switched crews on daily basis. It was a hard, but an important lesson for the beginning.
      </>
    ),
    image: KidsImage,
    results: [
      {
        icon: TwoSkateparks,
        title: 'Two skateparks',
        description: (
          <>
            Both are concrete, both have an adjacent center with all facilities, both host events of all kinds and regular skate classes. One skatepark is open to public at all times, while the other is hosting regular weekly activities. Contact us for more info if you plan a visit to Maputo.
          </>
        ),
      },
      {
        icon: SharingBoards,
        title: 'Sharing boards',
        description: (
          <>
            We brought more than forty boards, from a wheel to a griptape. We
            divided it between the two skateparks for kids to share. And they do!
          </>
        ),
      },
      {
        icon: SkateboardChamp,
        title: 'Skateboarding champ',
        description: (
          <>
            One of the kids is a real prodigy. His name is Noel Cossa and he has been progressing since we met in 2019. Soon after we left he was taken on a African championship held in Angola and ended 3rd. We keep our material support to him and his closest friend Junior. It seems possible to see him compete on an international level at some point!
          </>
        ),
      },
    ],
  },
  why: {
    heading: <>Why did we go to <Highlight>Maputo?</Highlight></>,
    description: (
      <>
        It was our first option when we were still students. We were
        interested in the Lusophone world and Mozambique was still without a
        skatepark, so we decided to change it.
      </>
    ),
  },
  gallery: {
    heading: <>Some cool <Highlight>moments</Highlight></>,
    description: (
      <>
        Here are a few pictures from the journey, from the process and the
        results of our work. Should you be interested in having one printed on
        your wall, just let us know! Read the assessment on corruption in
        Mozambique put together by Martin Louzecky, the founder of SWB, as
        his diploma work <a target="_blank" rel="noreferrer noopener" href={CorruptionInMozambique}>here</a>.
      </>
    ),
    images: mozambiqueGalleryData,
  },
}

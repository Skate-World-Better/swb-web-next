import type { SkateparkData } from './types'

import ParkOne from '@/images/lesotho-park-1.png'
import ParkTwo from '@/images/lesotho-park-2.png'
import ParkThree from '@/images/lesotho-park-3.png'
import ParkFour from '@/images/lesotho-park-4.png'
import ParkFive from '@/images/lesotho-park-5.png'
import ParkSix from '@/images/lesotho-park-6.png'
import Park7 from '@/images/lesotho-park-7.png'
import Park8 from '@/images/lesotho-park-8.png'
import Park9 from '@/images/lesotho-park-9.png'
import Park10 from '@/images/lesotho-park-10.png'

export const lesothoSkateparkData: SkateparkData = {
  heading: 'This is the look of the future *skate park!*',
  parkName: 'Lepereng Skatepark',
  description:
    'Lepereng skatepark features two levels, one surrounded by quarterpipes and the other directly open to the space around. The layout resembles the local "white spot" that locals consider the birthplace of skateboarding in Lesotho. We took the inspiration and turned it into a full skatepark. Decorated in green and blue colors, with the local sandstone tiles, we try to bring the national vibe to the first skatepark in the country.',
  images: [
    ParkOne,
    ParkTwo,
    ParkThree,
    ParkFour,
    ParkFive,
    ParkSix,
    Park7,
    Park8,
    Park9,
    Park10,
  ],
}

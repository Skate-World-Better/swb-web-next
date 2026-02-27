import Section from '@/components/ui/Section'
import Grid from '@/components/ui/Grid'
import Highlight from '@/components/ui/Highlight'
import MediaCarousel from '@/components/Carousel'

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

const parkImages = [
  { imageSrc: ParkOne },
  { imageSrc: ParkTwo },
  { imageSrc: ParkThree },
  { imageSrc: ParkFour },
  { imageSrc: ParkFive },
  { imageSrc: ParkSix },
  { imageSrc: Park7 },
  { imageSrc: Park8 },
  { imageSrc: Park9 },
  { imageSrc: Park10 },
]

const LesothoSkateparkSection = () => (
  <Section spacing="md" centered>
    <Grid centered gap="md">
      <h3 className="mb-12">
        This is the look of the future
        <Highlight> skate park!</Highlight>
      </h3>
      <MediaCarousel
        items={parkImages}
        renderItem={(data) => (
          <div className="w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${data.imageSrc as string})`, aspectRatio: '3/2' }} role="img" />
        )}
        config={{ countLarge: 1, countDesktop: 1, countTablet: 1, countMobile: 1, hidePartial: true }}
      />
      <p className="pt-12 item-title">Lepereng Skatepark</p>
      <h6 className="lg:mr-12">
        Lepereng skatepark features two levels, one surrounded by quarterpipes and the other directly open to the space around. The layout resembles the local "white spot" that locals consider the birthplace of skateboarding in Lesotho. We took the inspiration and turned it into a full skatepark. Decorated in green and blue colors, with the local sandstone tiles, we try to bring the national vibe to the first skatepark in the country.
      </h6>
    </Grid>
  </Section>
)

export default LesothoSkateparkSection

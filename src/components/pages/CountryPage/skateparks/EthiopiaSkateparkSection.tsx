import Section from '@/components/ui/Section'
import Grid from '@/components/ui/Grid'
import Highlight from '@/components/ui/Highlight'
import MediaCarousel from '@/components/Carousel'

import ParkOne from '@/images/ethiopia-park-1.jpg'
import ParkTwo from '@/images/ethiopia-park-2.jpg'
import ParkThree from '@/images/ethiopia-park-3.jpg'
import ParkFour from '@/images/ethiopia-park-4.jpg'
import ParkFive from '@/images/ethiopia-park-5.jpg'
import ParkSix from '@/images/ethiopia-park-6.jpg'
import ParkSeven from '@/images/ethiopia-park-7.jpg'
import ParkEight from '@/images/ethiopia-park-8.jpg'
import ParkNine from '@/images/ethiopia-park-9.jpg'
import ParkTen from '@/images/ethiopia-park-10.jpg'

const parkImages = [
  { imageSrc: ParkOne },
  { imageSrc: ParkTwo },
  { imageSrc: ParkThree },
  { imageSrc: ParkFour },
  { imageSrc: ParkFive },
  { imageSrc: ParkSix },
  { imageSrc: ParkSeven },
  { imageSrc: ParkEight },
  { imageSrc: ParkNine },
  { imageSrc: ParkTen },
]

const EthiopiaSkateparkSection = () => (
  <Section spacing="md" centered>
    <Grid centered gap="md">
      <h3 className="mb-12">
        This is the result of
        <Highlight> our work</Highlight>
        !
      </h3>
      <MediaCarousel
        items={parkImages}
        renderItem={(data) => (
          <div className="w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${data.imageSrc as string})`, aspectRatio: '3/2' }} role="img" />
        )}
        config={{ countLarge: 1, countDesktop: 1, countTablet: 1, countMobile: 1, hidePartial: true }}
      />
      <p className="pt-12 item-title">Megabi skatepark</p>
      <h6 className="lg:mr-12">
        The skatepark is located at the suburban area of the city, right under the
        Entoto forest surrounding Addis Abeba. We continued on a work once
        started by California Skateparks. What was once only a miniramp is now
        a full skatepark with both challenging and beginners elements. This project was funded from the Czech-UNDP partnership and our peers from the Czech skateboarding community.
      </h6>
    </Grid>
  </Section>
)

export default EthiopiaSkateparkSection

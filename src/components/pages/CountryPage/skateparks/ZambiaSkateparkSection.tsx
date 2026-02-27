import Section from '@/components/ui/Section'
import Grid from '@/components/ui/Grid'
import Highlight from '@/components/ui/Highlight'
import MediaCarousel from '@/components/Carousel'

import ParkOne from '@/images/Skatepark1.jpg'
import ParkTwo from '@/images/Skatepark2.jpg'
import ParkThree from '@/images/Skatepark3.jpg'
import ParkFour from '@/images/Skatepark4.jpg'
import ParkFive from '@/images/Skatepark5.jpg'
import ParkSix from '@/images/Skatepark6.jpg'
import ParkSeven from '@/images/Skatepark7.jpg'
import ParkEight from '@/images/Skatepark8.jpg'
import ParkNine from '@/images/Skatepark9.jpg'
import ParkTen from '@/images/Skatepark10.jpg'
import ParkEleven from '@/images/Skatepark11.jpg'
import ParkTwelve from '@/images/Skatepark12.jpg'

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
  { imageSrc: ParkEleven },
  { imageSrc: ParkTwelve },
]

const ZambiaSkateparkSection = () => (
  <Section spacing="md" centered>
    <Grid centered gap="md">
      <h3 className="mb-12">
        This is
        <Highlight> the park</Highlight>
        !
      </h3>
      <MediaCarousel
        items={parkImages}
        renderItem={(data) => (
          <div className="w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${data.imageSrc as string})`, aspectRatio: '3/2' }} role="img" />
        )}
        config={{ countLarge: 1, countDesktop: 1, countTablet: 1, countMobile: 1, hidePartial: true }}
      />
      <p className="pt-12 item-title">Lukabe Hande skatepark</p>
      <h6 className="lg:mr-12">
        Our good friend Johnny Kalenga came up with the name, explaining that:
        "Lukaba Hande can be translated as <span className="uppercase">we will be allright!</span> We went with this
        name particularly because when We Skate Mongu started we only had one
        skateboard and 15 students. We didn't really worry about what we didn't have at
        that time because we always said: Lukaba Hande!
      </h6>
    </Grid>
  </Section>
)

export default ZambiaSkateparkSection

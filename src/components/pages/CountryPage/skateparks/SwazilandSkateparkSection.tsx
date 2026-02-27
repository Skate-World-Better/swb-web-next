import Section from '@/components/ui/Section'
import Grid from '@/components/ui/Grid'
import Highlight from '@/components/ui/Highlight'
import MediaCarousel from '@/components/Carousel'

import Park1 from '@/images/swazi-park-1.jpg'
import Park2 from '@/images/swazi-park-2.jpg'
import Park3 from '@/images/swazi-park-3.jpg'
import Park4 from '@/images/swazi-park-4.jpg'
import Park5 from '@/images/swazi-park-5.jpg'
import Park6 from '@/images/swazi-park-6.jpg'
import Park7 from '@/images/swazi-park-7.jpg'
import Park8 from '@/images/swazi-park-8.jpg'
import Park9 from '@/images/swazi-park-9.jpg'
import Park10 from '@/images/swazi-park-10.jpg'
import Park11 from '@/images/swazi-park-11.jpg'
import Park12 from '@/images/swazi-park-12.jpg'
import Park13 from '@/images/swazi-park-13.jpeg'
import Park14 from '@/images/swazi-park-14.jpeg'
import Park15 from '@/images/swazi-park-15.jpeg'

const parkImages = [
  { imageSrc: Park1 },
  { imageSrc: Park2 },
  { imageSrc: Park3 },
  { imageSrc: Park4 },
  { imageSrc: Park5 },
  { imageSrc: Park6 },
  { imageSrc: Park7 },
  { imageSrc: Park8 },
  { imageSrc: Park9 },
  { imageSrc: Park10 },
  { imageSrc: Park11 },
  { imageSrc: Park12 },
  { imageSrc: Park13 },
  { imageSrc: Park14 },
  { imageSrc: Park15 },
]

const SwazilandSkateparkSection = () => (
  <Section spacing="md" centered>
    <Grid centered gap="md">
      <h3 className="mb-12">
        This is the result of <Highlight>our work</Highlight>
      </h3>
      <MediaCarousel
        items={parkImages}
        renderItem={(data) => (
          <div className="w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${data.imageSrc as string})`, aspectRatio: '3/2' }} role="img" />
        )}
        config={{ countLarge: 1, countDesktop: 1, countTablet: 1, countMobile: 1, hidePartial: true }}
      />
      <p className="pt-12 item-title">Coronation skatepark</p>
      <h6 className="lg:mr-12">
        The skatepark is located in a so-called Coronation Park, which is the biggest public park in Mbabane. It is right by an existing sporting area with tennis courts and public facilities. The skatepark is easily accessible to anybody as it is located in the middle of the city. It is public and open all day long, but the activities are carried out by a local organization - Emaswati Skate.
      </h6>
    </Grid>
  </Section>
)

export default SwazilandSkateparkSection

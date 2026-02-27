import Section from '@/components/ui/Section'
import Highlight from '@/components/ui/Highlight'
import VideoEmbed from '@/components/ui/VideoEmbed'
import MediaCarousel from '@/components/Carousel'

import KhongoloteZero from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/khongolete0.jpg'
import KhongoloteOne from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/khongolete1.jpg'
import KhongoloteTwo from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/khongolete2.jpg'
import KhongoloteThree from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/khongolete3.jpg'
import KhongoloteFour from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/khongolete4.jpg'
import MaxaqueneZero from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/maxaquene0.jpg'
import MaxaqueneOne from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/maxaquene1.jpg'
import MaxaqueneTwo from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/maxaquene2.jpg'
import MaxaqueneThree from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/maxaquene3.jpg'
import MaxaqueneFour from '@/components/pages/MozambiquePage/Sections/SkateparkSection/images/maxaquene4.jpg'

const maxaqueneImages = [
  { imageSrc: MaxaqueneZero },
  { imageSrc: MaxaqueneOne },
  { imageSrc: MaxaqueneTwo },
  { imageSrc: MaxaqueneThree },
  { imageSrc: MaxaqueneFour },
]

const khongoloteImages = [
  { imageSrc: KhongoloteZero },
  { imageSrc: KhongoloteOne },
  { imageSrc: KhongoloteTwo },
  { imageSrc: KhongoloteThree },
  { imageSrc: KhongoloteFour },
]

const carouselConfig = { countLarge: 1, countDesktop: 1, countTablet: 1, countMobile: 1, hidePartial: true } as const

const renderParkImage = (data: Record<string, unknown>) => (
  <div className="w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${data.imageSrc as string})`, aspectRatio: '3/2' }} role="img" />
)

const MozambiqueSkateparkSection = () => (
  <>
    <Section spacing="md">
      <div className="flex flex-wrap my-6 py-6 lg:my-12 lg:py-12">
        <div className="w-full lg:w-1/2 lg:ml-[25%]">
          <h3 className="mb-12 text-center">
            These are the lovely <br /> skateparks that <Highlight>we did</Highlight>
          </h3>
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-12">
          <div className="pt-12 lg:pt-0 pb-12">
            <h3 className="text-center lg:text-left">Skate park <Highlight>Maxaquene</Highlight></h3>
            <h6 className="pt-4 lg:pr-12">
              Maxaquene is among the central districts of Maputo. It is
              residential but close to the beach and nearby restaurants and
              bars. It is easily accessible by anyone, the kids of Maputo and
              the skateboarders passing by.
            </h6>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-12">
          <div className="pb-6">
            <MediaCarousel items={maxaqueneImages} renderItem={renderParkImage} config={carouselConfig} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap my-2 py-2 lg:my-12 lg:py-12 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-12">
          <div className="pb-6">
            <MediaCarousel items={khongoloteImages} renderItem={renderParkImage} config={carouselConfig} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-12">
          <div className="pt-12 lg:pt-0 pb-12">
            <h3 className="text-center lg:text-left">Skate park <Highlight>Khongolote</Highlight></h3>
            <h6 className="pt-4 lg:pr-12">
              Khongolote is on the very edge of the city. It is quite hard to
              get there from the centre, but the spirit of this place is beyond
              belief. It is in an area absolutely lacking any place for children
              to play, so the skatepark just hit the spot.
            </h6>
          </div>
        </div>
      </div>
    </Section>
    <Section background="surface-contours" spacing="md">
      <div className="flex flex-wrap pt-6 lg:py-6 lg:mb-12">
        <div className="w-full lg:w-8/12 lg:ml-[16.67%]">
          <h3 className="mb-12 text-center">
            Have fun watching the video <br /> about construction of the <Highlight>skatepark</Highlight>
          </h3>
        </div>
        <div className="w-full lg:w-8/12 lg:ml-[16.67%]">
          <VideoEmbed
            src="https://www.youtube.com/embed/rp-jLIltMgs"
            title="Mozambique skatepark construction video"
          />
        </div>
      </div>
    </Section>
  </>
)

export default MozambiqueSkateparkSection

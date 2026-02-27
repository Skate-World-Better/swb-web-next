import { Tv } from 'react-feather'

import Section from '../../../../ui/Section'
import Highlight from '../../../../ui/Highlight'
import VideoEmbed from '../../../../ui/VideoEmbed'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'
import Button from '../../../../Button'
import { momentsData } from '../../../../../data/moments'

const MomentsSection = () => (
  <>
    <Section spacing="md">
      <div className="flex flex-wrap my-6 py-6 lg:my-12 lg:py-12 items-center text-center lg:text-left">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-12">
          <h6 className="mb-6 sub">Stories</h6>
          <h3 className="mb-12">
            Some cool <Highlight>moments</Highlight>
          </h3>
          <p className="py-6 lg:mr-12">
            Doing this, it is not just great times spent in Africa, but also hours
            and hours of planning and meetings. These are some great moments and
            stories that we experience on the way to all of this.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-12">
          <MediaCarousel
            items={momentsData}
            config={{
              countLarge: 2,
              countDesktop: 2,
            }}
            renderItem={(data) => (
              <ImageCard
                ratio="1:2"
                isExpandable={false}
                imageSrc={data.imageSrc as string}
                loading="eager"
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-wrap pt-6 lg:py-6 lg:mt-12">
        <div className="w-full order-2 lg:w-1/2 lg:order-1 mb-6 lg:mb-0 lg:pr-12">
          <VideoEmbed
            src="https://player.vimeo.com/video/504058820"
            title="vimeo-player"
          />
        </div>
        <div className="w-full order-1 lg:w-1/2 lg:order-2 mb-6 lg:mb-0 lg:pl-12">
          <h3 className="mb-12">
            When we go on <Highlight>projects</Highlight>
          </h3>
          <p className="py-6">
            Building skateparks across Africa is more than construction—it's about creating spaces where communities thrive. Each project brings together local youth, volunteers, and partners to build something lasting. These are the stories of transformation, one skatepark at a time.
          </p>
        </div>
      </div>
    </Section>
    <Section background="surface-contours" spacing="md">
      <div className="flex flex-wrap my-6 py-6 lg:my-12 lg:py-12">
        <div className="w-full lg:w-8/12 lg:ml-[16.67%]">
          <h3 className="text-center"><Highlight>SKEJTY A LOPATY</Highlight></h3>
          <p className="mt-2 text-center">
            Česká Televize got excited about our work and supported us in developing a five episode documentary from the project that took place in Zambia.
          </p>
          <p className="text-center mb-0">
            <Button
              className="mt-2"
              link
              complementary
              href="https://www.ceskatelevize.cz/porady/15126029820-skejty-a-lopaty/"
            >
              <Tv size={16} />
              {' '}
              <span className="pl-1 ml-1">Have a look!</span>
            </Button>
          </p>
        </div>
      </div>
    </Section>
  </>
)

export default MomentsSection

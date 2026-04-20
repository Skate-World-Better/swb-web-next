import Section from '../../../../ui/Section'
import Highlight from '../../../../ui/Highlight'
import ImageCard from '../../../../Card'
import PressCarousel from '../../../../Carousel'
import { pressData } from '../../../../../data/press'

const PressSection = () => (
  <Section spacing="sm">
    <div className="flex flex-wrap pt-12 mb-4 lg:pt-12 lg:mt-12">
      <div className="w-full lg:w-1/3 lg:ml-[33.33%]">
        <h3 className="text-center mb-6">
          What has been <Highlight>written</Highlight> about us
        </h3>
      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full">
        <PressCarousel
          items={pressData}
          config={{
            countLarge: 3,
            countDesktop: 3,
          }}
          renderItem={(data) => (
            <ImageCard
              ratio="1:1"
              withGradient
              isExpandable={false}
              withBlur
              isLink
              imageSrc={data.imageSrc as string}
              title={data.title as string}
              link={data.link as string}
              loading="eager"
            />
          )}
        />
      </div>
    </div>
  </Section>
)

export default PressSection

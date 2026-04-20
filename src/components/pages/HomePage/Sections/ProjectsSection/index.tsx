import Section from '../../../../ui/Section'
import Highlight from '../../../../ui/Highlight'
import ImageCard from '../../../../Card'

import ProjectOneImage from './images/project-1.jpg'
import ProjectTwoImage from './images/project-2.jpg'

const ProjectsSection = () => (
  <Section className="mb-12 lg:mb-12 lg:py-12">
    <div className="flex flex-wrap py-12 my-12 items-center text-center lg:text-left">
      <div className="w-full lg:w-1/3">
        <h6 className="mb-6 sub">Projects</h6>
        <h3 className="mb-12">
          These are our first two projects in <Highlight>Mozambique</Highlight>
        </h3>
        <h6 className="py-6">
          We have built one park in the centre of the city accessible to
          everyone. The second is on the very edge of the city with virtually
          zero places for kids to play on.
        </h6>
      </div>
      <div className="w-full lg:w-1/3">
        <ImageCard
          imageSrc={ProjectOneImage}
          isExpandable={false}
          ratio="2:3"
          link="/mozambique"
          isLink
        />
        <p className="text-center mt-6">Maxaquene skatepark</p>
      </div>
      <div className="w-full lg:w-1/3">
        <ImageCard
          imageSrc={ProjectTwoImage}
          isExpandable={false}
          ratio="2:3"
          link="/mozambique"
          isLink
        />
        <p className="text-center mt-6">Khongolote skatepark</p>
      </div>
    </div>
  </Section>
)

export default ProjectsSection

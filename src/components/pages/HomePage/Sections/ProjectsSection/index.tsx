import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import ImageCard from '../../../../Card'

import ProjectOneImage from './images/project-1.jpg'
import ProjectTwoImage from './images/project-2.jpg'

const ProjectsSection = () => (
  <BaseSection className="mb-5 mb-lg-5 py-lg-5">
    <Row className="py-5 my-5 align-items-center text-center text-lg-left">
      <Col xs={12} lg={4}>
        <BaseSection.Header.Annotation className="mb-4 sub">
          Projects
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">
          These are our first two projects in <span className="font-alt font-primary">Mozambique</span>
        </BaseSection.Header.Text>
        <BaseSection.Header.Annotation className="py-4">
          We have built one park in the centre of the city accessible to
          everyone. The second is on the very edge of the city with virtually
          zero places for kids to play on.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4}>
        <ImageCard
          imageSrc={ProjectOneImage}
          isExpandable={false}
          ratio="2:3"
          link="/mozambique"
          isLink
        />
        <BaseSection.Text className="text-center mt-4">
          Maxaquene skatepark
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4}>
        <ImageCard
          imageSrc={ProjectTwoImage}
          isExpandable={false}
          ratio="2:3"
          link="/mozambique"
          isLink
        />
        <BaseSection.Text className="text-center mt-4">
          Khongolote skatepark
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default ProjectsSection

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import Lesotho2 from '../../../../../images/lesotho-1.jpg'
import Lesotho3 from '../../../../../images/lesotho-2.jpg'
import Lesotho4 from '../../../../../images/lesotho-3.jpg'
import Lesotho5 from '../../../../../images/lesotho-4.jpg'
import Lesotho6 from '../../../../../images/lesotho-5.jpg'
import Lesotho7 from '../../../../../images/lesotho-6.jpg'
import Lesotho1 from '../../../../../images/lesotho-7.jpg'

const data = [
  {
    imageSrc: Lesotho1,
  },
  {
    imageSrc: Lesotho2,
  },
  {
    imageSrc: Lesotho3,
  },
  {
    imageSrc: Lesotho4,
  },
  {
    imageSrc: Lesotho5,
  },
  {
    imageSrc: Lesotho6,
  },
  {
    imageSrc: Lesotho7,
  },
]

const GallerySection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Some cool <span className="font-alt font-primary">moments</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          We went down to Lesotho for a research trip in 2024 to get to know our local partners and look at the future jobsite.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <MediaCarousel
          items={data}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          component={<ImageCard ratio="2:3" isExpandable={false} />}
        />
      </Col>
    </Row>
  </BaseSection>
)

export default GallerySection

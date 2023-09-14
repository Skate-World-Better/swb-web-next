import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import SwazilandOne from '../../../../../images/swaziland-1.jpg'
import SwazilandTwo from '../../../../../images/swaziland-2.jpg'
import SwazilandThree from '../../../../../images/swaziland-3.jpg'
import SwazilandFour from '../../../../../images/swaziland-4.jpg'
import SwazilandFive from '../../../../../images/swaziland-5.jpg'
import SwazilandSix from '../../../../../images/swaziland-6.jpg'
import SwazilandSeven from '../../../../../images/swaziland-7.jpg'
import SwazilandEight from '../../../../../images/swaziland-8.jpg'
import SwazilandNine from '../../../../../images/swaziland-9.jpg'
import SwazilandTen from '../../../../../images/swaziland-10.jpg'

const data = [{
    imageSrc: SwazilandOne,
  },
  {
    imageSrc: SwazilandTwo,
  },
  {
    imageSrc: SwazilandThree,
  },
  {
    imageSrc: SwazilandFour,
  },
  {
    imageSrc: SwazilandFive,
  },
  {
    imageSrc: SwazilandSix,
  },
  {
    imageSrc: SwazilandSeven,
  },
  {
    imageSrc: SwazilandEight,
  },
  {
    imageSrc: SwazilandNine,
  },
  {
    imageSrc: SwazilandTen,
  }
]

const GallerySection = () => (
  <BaseSection className="mb-5 py-5 mb-lg-5 py-lg-5">
    <Row className="mb-5 align-items-center py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Some cool <span className="font-alt font-primary">moments</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          Here are a few pictures from a trip around Swaziland and the construction process. Should you be interested in having one
          printed on your wall, just let us know!
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

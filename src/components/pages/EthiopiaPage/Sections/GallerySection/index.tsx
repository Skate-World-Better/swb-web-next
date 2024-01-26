import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import EthiopiaOne from '../../../../../images/ethiopia-1.jpg'
import EthiopiaTwo from '../../../../../images/ethiopia-2.jpg'
import EthiopiaThree from '../../../../../images/ethiopia-3.jpg'
import EthiopiaFour from '../../../../../images/ethiopia-4.jpg'
import EthiopiaFive from '../../../../../images/ethiopia-5.jpg'
import EthiopiaSix from '../../../../../images/ethiopia-6.jpg'
import EthiopiaSeven from '../../../../../images/ethiopia-7.jpg'
import EthiopiaEight from '../../../../../images/ethiopia-9.jpg'
import EthiopiaNine from '../../../../../images/ethiopia-8.jpg'

const data = [
  {
    imageSrc: EthiopiaOne,
  },
  {
    imageSrc: EthiopiaTwo,
  },
  {
    imageSrc: EthiopiaThree,
  },
  {
    imageSrc: EthiopiaFour,
  },
  {
    imageSrc: EthiopiaFive,
  },
  {
    imageSrc: EthiopiaSix,
  },
  {
    imageSrc: EthiopiaSeven,
  },
  {
    imageSrc: EthiopiaEight,
  },
  {
    imageSrc: EthiopiaNine,
  },
]

const GallerySection = () => (
  <BaseSection className="mb-5 py-5 mb-lg-5 py-lg-5">
    <Row className="mb-5 align-items-center py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="mb-4 sub">
          Stories
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">
          Some cool <span className="font-alt font-primary">moments</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          Here are a few pictures from Ethiopia
          and the construction process. Should you be interested in having
          one printed on your wall, just let us know!
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <MediaCarousel
          items={data}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          component={<ImageCard isExpandable={false} />}
        />
      </Col>
    </Row>
  </BaseSection>
)

export default GallerySection

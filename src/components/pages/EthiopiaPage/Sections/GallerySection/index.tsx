import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import EthiopiaOne from '../../../../../images/ethiopia-1.jpg'
import EthiopiaTwo from '../../../../../images/ethiopia-2.jpg'
import EthiopiaThree from '../../../../../images/ethiopia-hero.jpg'
import EthiopiaFour from '../../../../../images/kids-ethiopia.jpg'

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
]

const GallerySection = () => (
  <BaseSection className="mb-5 py-5 mb-lg-5 py-lg-5">
    <Row className="mb-5 align-items-center py-5 text-center text-lg-left">
      <Col xs={12} lg={12}>
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

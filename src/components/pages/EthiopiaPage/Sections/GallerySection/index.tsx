import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import ZambiaOne from '../../../../../images/1.1.jpg'
import ZambiaTwo from '../../../../../images/1.2.jpg'
import ZambiaThree from '../../../../../images/1.3.jpg'
import ZambiaFour from '../../../../../images/1.4.jpg'
import ZambiaFive from '../../../../../images/1.5.jpg'
import ZambiaSix from '../../../../../images/1.6.jpg'
import ZambiaSeven from '../../../../../images/1.7.jpg'
import ZambiaEight from '../../../../../images/1.8.jpg'
import ZambiaNine from '../../../../../images/1.9.jpg'
import Product1 from '../../../../../images/product1.jpg'
import Product2 from '../../../../../images/product2.jpg'
import Product3 from '../../../../../images/product3.jpg'
import Product4 from '../../../../../images/product4.jpg'
import Product5 from '../../../../../images/product5.jpg'
import Product6 from '../../../../../images/product6.jpg'
import Product7 from '../../../../../images/product7.jpg'

const data = [
  {
    imageSrc: ZambiaOne,
  },
  {
    imageSrc: ZambiaTwo,
  },
  {
    imageSrc: ZambiaThree,
  },
  {
    imageSrc: ZambiaFour,
  },
  {
    imageSrc: ZambiaFive,
  },
  {
    imageSrc: ZambiaSix,
  },
  {
    imageSrc: ZambiaSeven,
  },
  {
    imageSrc: ZambiaEight,
  },
  {
    imageSrc: ZambiaNine,
  },
  {
    imageSrc: Product1,
  },
  {
    imageSrc: Product2,
  },
  {
    imageSrc: Product3,
  },
  {
    imageSrc: Product4,
  },
  {
    imageSrc: Product5,
  },
  {
    imageSrc: Product6,
  },
  {
    imageSrc: Product7,
  }
]

const GallerySection = () => (
  <BaseSection className="mb-5 py-5 mb-lg-5 py-lg-5">
    <Row className="mb-5 align-items-center py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Zambia is the <span className="font-alt font-primary">fashion</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          We produce our own merch to celebrate the cultures of Africa, of its
          countries and people. You can find all of our pieces{' '}
          <a href="https://skateworldbetter.shop/" target="_blank" className="link-dark font-primary">
            here
          </a>.
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

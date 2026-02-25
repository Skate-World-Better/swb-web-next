import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import { zambiaGalleryData } from '../../../../../data/galleries/zambia'

const GallerySection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Zambia is the <span className="font-alt font-primary">fashion</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          We produce our own merch to celebrate the cultures of Africa, of its countries and people. Visit one of the events, we organize, or simply text us on instagram if you want your piece!
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <MediaCarousel
          items={zambiaGalleryData}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          renderItem={(data) => <ImageCard ratio="2:3" isExpandable={false} imageSrc={data.imageSrc as string} loading="eager" />}
        />
      </Col>
    </Row>
  </BaseSection>
)

export default GallerySection

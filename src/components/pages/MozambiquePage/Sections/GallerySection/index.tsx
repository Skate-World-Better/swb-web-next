import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import { mozambiqueGalleryData } from '../../../../../data/galleries/mozambique'
import CorruptionInMozambique from './documents/Corruption-in-Mozambique.pdf'

const GallerySection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 align-items-center text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Some cool <span className="font-alt font-primary">moments</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          Here are a few pictures from the journey, from the process and the
          results of our work. Should you be interested in having one printed on
          your wall, just let us know! Read the assessment on corruption in
          Mozambique put together by Martin Loužecký, the founder of SWB, as
          his diploma work <a target="_blank" rel="noreferrer noopener" href={CorruptionInMozambique}>here</a>.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <MediaCarousel
          items={mozambiqueGalleryData}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          renderItem={(data) => (
            <ImageCard
              ratio="2:3"
              isExpandable={false}
              imageSrc={data.imageSrc as string}
              loading="eager"
            />
          )}
        />
      </Col>
    </Row>
  </BaseSection>
)

export default GallerySection

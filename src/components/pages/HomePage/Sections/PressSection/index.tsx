import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import ImageCard from '../../../../Card'
import PressCarousel from '../../../../Carousel'
import { pressData } from '../../../../../data/press'

const PressSection = () => (
  <BaseSection className="py-2 py-lg-4">
    <Row className="pt-5 mb-3 pt-lg-5 mt-lg-5">
      <Col xs={12} lg={4} className="offset-lg-4">
        <BaseSection.Header.Text className="text-center mb-4">
          What has been <span className="font-alt font-primary">written</span> about us
        </BaseSection.Header.Text>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
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
      </Col>
    </Row>
  </BaseSection>
)

export default PressSection

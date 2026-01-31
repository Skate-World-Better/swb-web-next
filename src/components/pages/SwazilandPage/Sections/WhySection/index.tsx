import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

const WhySection = () => (
  <section className="bg-darkened contours">
    <BaseSection className="py-4 py-lg-4">
      <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <BaseSection.Header.Text className="mb-3 mb-lg-5">
            Why did we want to go to <span className="font-alt font-primary">Mbabane?</span>
          </BaseSection.Header.Text>
          <BaseSection.Text>
            We took a trip to Mbabane after we finished our first project in Mozambique and we just fell in love with the local nature, atmosphere and the community. We engaged in some planning and managed to deliver the project four years later. Connecting the surrounding countries together through our actions is a lifetime mission. We'd like to create a strong international community, which is why we select countries in a close proximity.
          </BaseSection.Text>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default WhySection

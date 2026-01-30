import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

const WhySection = () => (
  <section className="bg-darkened contours">
    <BaseSection className="py-4 py-lg-5">
      <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <BaseSection.Header.Text className="mb-3 mb-lg-5">
            Why did we go to <span className="font-alt font-primary">Maputo?</span>
          </BaseSection.Header.Text>
          <BaseSection.Text>
            It was our first option when we were still students. We were
            interested in the Lusophone world and Mozambique was still without a
            skatepark, so we decided to change it.
          </BaseSection.Text>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default WhySection

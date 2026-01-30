import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

const WhySection = () => (
  <section className="bg-darkened contours">
    <BaseSection className="py-4 py-lg-5">
      <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <BaseSection.Header.Text className="mb-3 mb-lg-5">
            Why did we go to <span className="font-alt font-primary">Addis</span>
          </BaseSection.Header.Text>
          <BaseSection.Text>
            The Czech Republic has a long-lasting partnership with Ethiopia thus we’ve managed to secure a funding for this project. With the potential feasible budget, we looked out for a partner and once we got to know Israel Dejene and his Megabi organization we knew right away that this is a project that we should invest our time into.
          </BaseSection.Text>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default WhySection

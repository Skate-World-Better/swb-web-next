import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

const WhySection = () => (
  <section className="bg-darkened contours">
    <BaseSection className="py-4 py-lg-5">
      <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <BaseSection.Header.Text className="mb-3 mb-lg-5">
            Why do we want to go to <span className="font-alt font-primary">Maseru?</span>
          </BaseSection.Header.Text>
          <BaseSection.Text>
            Lesotho has always drew our attention. A small nation in the mountains, beautiful nature, amazing people, very little public life. An ambition of this project is a deeper connection of the centers in Mozambique, Swaziland and Lesotho. Geographically, they are in a close proximity, and their further cooperation is therefore a multi-year strategy of the Skate World Better initiative.
          </BaseSection.Text>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default WhySection

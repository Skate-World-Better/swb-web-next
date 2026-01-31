import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

const WhySection = () => (
  <section className="bg-darkened contours">
    <BaseSection className="py-4 py-lg-4">
      <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <BaseSection.Header.Text className="mb-3 mb-lg-5">
            Why did we want to go to <span className="font-alt font-primary">Mongu?</span>
          </BaseSection.Header.Text>
          <BaseSection.Text>
            To put it simply, our local partner We Skate Mongu was doing outstanding work
            and we really wanted to support them in their mission. We have to mention
            Johnny - the ever smiling leader. He and his team had been providing street
            education for the underprivileged kids, initiating activities for the youngest and
            bringing skateboarding to the lives of the people in Mongu for years. The focus of
            We Skate Mongu had not gone unheard in the skateboarding community. We
            decided to bring to life a 700m2 concrete park and we brought a ton of boards
            with it.
          </BaseSection.Text>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default WhySection

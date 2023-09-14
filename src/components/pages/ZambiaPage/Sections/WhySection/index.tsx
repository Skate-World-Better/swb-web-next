import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import { ReactComponent as SkateIcon } from "../../../../../images/icons/skateboarder-icon.svg"
import { ReactComponent as HealthIcon } from '../../../../../images/icons/health-icon.svg'
import { ReactComponent as CultureIcon } from '../../../../../images/icons/culture-icon.svg'
import { ReactComponent as YouthIcon } from '../../../../../images/icons/youth-icon.svg'

const WhySection = () => (
  <BaseSection className="mb-2 pb-0 pt-5 mb-lg-5">
    <Row className="my-2 py-2 my-lg-5 text-center text-lg-left">
      <Col xs={12} lg={{ span: 8, offset: 2 }} className="mb-5 text-center">
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
    <Row>
      <Col xs={12} lg={3} className="mb-5 mt-3">
        <YouthIcon />
        <BaseSection.Text className="pt-3 item-title">The children</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          45% of the population in Zambia is younger than 14 years of age. While this
          might not be the highest youth bulge number in Africa, it is still pretty high.
          Supporting the youngest is the main goal for us!
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3} className="mb-5 mt-3">
        <HealthIcon />
        <BaseSection.Text className="pt-3 item-title">The CSO's</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          We connected with Člověk v Tísni (People in Need), an established Czech NGO.
          They mostly target malnutrition, youth empowerment, HIV/AIDS and other issues
          like child rights protection. Together with We Skate Mongu they are currently
          working on a tailor made educational program in the skatepark.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3} className="mb-5 mt-3">
        <SkateIcon />
        <BaseSection.Text className="pt-3 item-title">The skate scene</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Zambian kids are naturally talented but it was a bit more difficult for them to have
          proper conditions. They make their own boards from old suitcases and pieces of
          wood. Still they perform crazy tricks with elegant style and you have to wonder
          about their progress with a real board and a real skatepark now standing.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3} className="mb-5 mt-3">
        <CultureIcon />
        <BaseSection.Text className="pt-3 item-title">The malnutrition</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Fighting malnutrition has been a long term objective of the local government and
          other bodies. And we want to help. We aim to use the remaining space around
          the skatepark for purposes related to the educational activities centered around
          farming.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default WhySection

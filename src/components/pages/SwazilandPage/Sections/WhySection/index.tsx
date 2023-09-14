import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import { ReactComponent as SkateIcon } from "../../../../../images/icons/skateboarder-icon.svg"
import { ReactComponent as HealthIcon } from '../../../../../images/icons/health-icon.svg'
import { ReactComponent as CultureIcon } from '../../../../../images/icons/culture-icon.svg'
import { ReactComponent as YouthIcon } from '../../../../../images/icons/youth-icon.svg'

const WhySection = () => (
  <BaseSection className="mb-2 pb-0 pt-5 mb-lg-5 py-lg-5">
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={4} className="mb-5">
        <BaseSection.Header.Text className="mb-3 mb-lg-5">
          Why did we want to go to <span className="font-alt font-primary">Mbabane?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text>
          We took a trip to Mbabane after we finished our first project in Mozambique and we just fell in love with the local nature, atmosphere and the community. We engaged in some planning and here we go.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="mb-5 mt-3">
        <YouthIcon />
        <BaseSection.Text className="pt-3 item-title">The children</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Swaziland is not an extreme case of the youth bulge phenomenon, but it has still a high percentage with 38% of population below 14 compared to an average 15% in Europe.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="mb-5 mt-3">
        <HealthIcon />
        <BaseSection.Text className="pt-3 item-title">The HIV rate</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          WHO claims that 61% of the deaths are caused by HIV. Swaziland has the highest prevalance in the world, unfortunately even among children.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="offset-lg-4 mb-5 mt-3">
        <SkateIcon />
        <BaseSection.Text className="pt-3 item-title">The skate scene</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          The skateboarding scene has been growing in Mbabane for many years now. They skate on parking lots showing some good skills and they deserve a real park. We managed to link this project with the legendary Stalinplaza in Prague. Martin, the founder of SWB was born in Prague and fell in love with skateboarding through days and days spent on Stalinplaza. It seemed necessary to pay tribute to this infamous skatespot. Generally, through our actions we want to give back to skateboarding. Swaziland has a lot of granite, so it felt like a great fit.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="mb-5 mt-3">
        <CultureIcon />
        <BaseSection.Text className="pt-3 item-title">The culture</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          This skatepark has an amazing potential to host events for individuals and families being in the open space. Swaziland has one of the biggest festivals in southern Africa called the Bush Fire, so it is apparent that the culture is there
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default WhySection

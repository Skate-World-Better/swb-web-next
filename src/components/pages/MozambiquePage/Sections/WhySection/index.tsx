import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import { ReactComponent as SkateIcon } from "../../../../../images/icons/skateboarder-icon.svg"
import { ReactComponent as EducationIcon } from '../../../../../images/icons/education-icon.svg'
import { ReactComponent as MoneyIcon } from '../../../../../images/icons/money-icon.svg'
import { ReactComponent as YouthIcon } from '../../../../../images/icons/youth-icon.svg'

const WhySection = () => (
  <BaseSection className="mb-2 pb-0 pt-5 mb-lg-5 py-lg-5">
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={4} className="mb-5">
        <BaseSection.Header.Text className="mb-3 mb-lg-5">
          Why did we go to <span className="font-alt font-primary">Maputo?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text>
          It was our first option when we were still students. We were
          interested in the Lusophone world and Mozambique was still without a
          skatepark, so we decided to change it.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="mb-5 mt-3">
        <YouthIcon />
        <BaseSection.Text className="pt-3 item-title">The children</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Around 46% of the population in Mozambique is 14 and younger, a
          typical case of a youth bulge.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="mb-5 mt-3">
        <MoneyIcon />
        <BaseSection.Text className="pt-3 item-title">The situation</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Mozambique still belongs among the poorest countries of the world.
          Development of sport is definitely not on the first place on the
          priority list.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="offset-lg-4 mb-5 mt-3">
        <EducationIcon />
        <BaseSection.Text className="pt-3 item-title">The education</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Many of the children do not even have the opportunity to go to school.
          We wanted to build a place of gather, where other activites can take
          place, educative endeavor among them.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="mb-5 mt-3">
        <SkateIcon />
        <BaseSection.Text className="pt-3 item-title">The skate scene</BaseSection.Text>
        <BaseSection.Header.Annotation className="px-4 px-lg-0">
          Believe it or not, there is a lot of kids who love skateboarding. They
          were skating old boards and rusty spots, which was not exactly safe.
          Streetskating is genuine, but it is always good to learn in the park.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default WhySection

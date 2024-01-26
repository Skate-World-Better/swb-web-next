import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from '../../../../Button'
import BaseSection from '../../../../BaseSection'
import { Brushed } from '../../../../Texts'

import { ReactComponent as HealthIcon } from "../../../../../images/icons/health-icon.svg"
import { ReactComponent as EducationIcon } from '../../../../../images/icons/education-icon.svg'
import { ReactComponent as MoneyIcon } from '../../../../../images/icons/money-icon.svg'
import { ReactComponent as YouthIcon } from '../../../../../images/icons/youth-icon.svg'
import { ReactComponent as AfricaMap } from '../../../../../images/africa-green.svg'

const FactsSection = () => (
  <BaseSection className="mb-5 mb-lg-5 pb-lg-5">
    <Row className="py-5 mx-lg-5 text-center text-lg-left">
      <Col xs={12} lg={3}>
        <HealthIcon />
        <BaseSection.Header.Underlined className="text-uppercase pt-3">
          Health issues
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mt-2 mb-3 mt-lg-3 pb-5 px-4 p-lg-0 mr-lg-3">
          91 % of the world’ s HIV - positive children live in Africa.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3}>
        <EducationIcon />
        <BaseSection.Header.Underlined className="text-uppercase pt-3">
          Poor education
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mt-2 mb-3 mt-lg-3 pb-5 px-4 p-lg-0 mr-lg-3">
          Every second (51%) in the age group from 6 to 14 years is out of
          school.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3}>
        <MoneyIcon />
        <BaseSection.Header.Underlined className="text-uppercase pt-3">
          No sports
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mt-2 mb-3 mt-lg-3 pb-5 px-4 p-lg-0 mr-lg-3">
          Children have very little opportunities in terms of doing sports
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3}>
        <YouthIcon />
        <BaseSection.Header.Underlined className="text-uppercase pt-3">
          Youth bulge
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mt-2 mb-3 mt-lg-3 px-4 p-lg-0 mr-lg-3">
          In some countries around 50% of the population are 15 years and
          younger.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
    <Row className="my-5 py-5">
      <Col xs={12} lg={5} className="text-center text-lg-left">
        <BaseSection.Header.Annotation className="mb-4 sub">
          What we do
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">
          As <span className="font-alt font-primary">skateboarders</span> we do what we know best
        </BaseSection.Header.Text>
        <BaseSection.Text className="py-2">
          We build skateparks, we bring boards, we come up with educative
          activities and we share good times!
        </BaseSection.Text>
        <BaseSection.Header.Annotation className="pb-2">
          As a bunch of skaters we know how this sport is powerful in creating a
          community. We believe that this aspect can be the key to sustainable
          help. Especially regarding younger generations.
        </BaseSection.Header.Annotation>
        <Button className="mt-4" link accent href="https://www.ceskatelevize.cz/porady/15126029820-skejty-a-lopaty/">
          See what we did
        </Button>
      </Col>
      <Col xs={12} lg={5} className="offset-lg-2 mt-5 mt-lg-0 pt-5 p-lg-0">
        <Brushed isBlock brushStyle="oneFadedPlus" position={{ left: '-15%', width: '90%', top: '-15%', height: '130%' }}>
          <BaseSection.Header.Base className="font-alt">960,000,000</BaseSection.Header.Base>
          <BaseSection.Text>People in Africa are under 25 years</BaseSection.Text>
        </Brushed>
        <AfricaMap className="pr-5 mt-3" style={{ width: '100%', height: 'auto', fill: '#7FB432' }} />
      </Col>
    </Row>
  </BaseSection>
)

export default FactsSection

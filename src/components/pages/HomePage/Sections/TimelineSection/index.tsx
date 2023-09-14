import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BaseSection from '../../../../BaseSection'

import { ReactComponent as CreationIcon } from "./icons/creation-icon.svg"
import { ReactComponent as FirstSkateparkIcon } from './icons/first-skatepark-icon.svg'
import { ReactComponent as SecondSkateparkIcon } from './icons/second-skatepark-icon.svg'
import { ReactComponent as ExpandingIcon } from './icons/expanding-icon.svg'
import { BrushedCorners } from '../../../../Texts'

const TimelineSection = () => (
  <BaseSection className="mb-5 mb-lg-5 py-lg-5">
    <Row className="py-5 my-5">
      <Col xs={12} lg={10} className="offset-lg-1 text-center">
        <BaseSection.Header.Text className="font-alt">
          <BrushedCorners>
            Founded in 2018, our first build took place in 2019. We relocated from
            Copenhagen to Prague pushing towards new and exciting projects.
          </BrushedCorners>
        </BaseSection.Header.Text>
      </Col>
    </Row>
    <Row className="pt-2 pb-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={3} className="my-3">
        <CreationIcon />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          Establishment of SWB
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We founded SWB in Copenhagen as a university project.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3} className="my-3">
        <FirstSkateparkIcon />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          First project
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We build the first two skateparks in Mozambique
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3} className="my-3">
        <ExpandingIcon />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          Expanding
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          Moved to Prague and we are preparing our next project in Swaziland.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={3} className="my-3">
        <SecondSkateparkIcon />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          Second project
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We build the first skatepark in Zambia
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default TimelineSection

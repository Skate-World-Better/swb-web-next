import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection/'

import FlagImage from '../../../../../images/swaziland-flag.jpg'

import { ReactComponent as SkateparkIcon } from "../../../../../images/icons/skatepark-icon.svg"
import { ReactComponent as BbqIcon } from "../../../../../images/icons/bbq-icon.svg"
import { ReactComponent as HealthIcon } from "../../../../../images/icons/hiv-icon.svg"
import {Link} from "react-router-dom";

const AboutSection = () => (
  <BaseSection className="pt-4 mb-lg-5 py-lg-5">
    <Row className="mb-4 py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What did we do in <span className="font-alt font-primary">Mbabane?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          Mbabane is the capital city of Swaziland right in the middle of the Drakensberg range. We built a skatepark in a public park in the middle of the city with the great view over the mountains. We went down in early 2023 in a group of eight volunteers from RSA, France, Belgium and mostly the crew from <Link to="https://www.bonidee.cz/?lang=en">Bonidee Skateparks</Link>. In forty days we managed to build a multifunctional 350 square meter big skatepark feasible for cultural events, gatherings, BBQ and so on. We engaged with an Italian NGO Cospe who regularly runs their program called “YES” - Youth Empowerment Strategy on top of the skateboarding classes secured by the local organization Emaswati Skate.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={FlagImage} fluid rounded />
      </Col>
    </Row>
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12}>
        <BaseSection.Header.Annotation className="d-none d-md-block sub">
          Intensions
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <SkateparkIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Public skatepark
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          We have obtained a public land of 350 square meters. A historic, non-functional miniramp stood on that land and we worked it into the new concrete skatepark with all elements of modern skateboarding.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <HealthIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Combating HIV
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          HIV is a really big issue in Swaziland. Our deal is to help prevent from this deadly dissease through seminars and events taking place in the skatepark.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <BbqIcon />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Creating a public hub
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          Given the nature of the location, the skatepark serves perfectly as a place of public gatherings, BBQ, open air concerts, seminars, workshops and so on.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

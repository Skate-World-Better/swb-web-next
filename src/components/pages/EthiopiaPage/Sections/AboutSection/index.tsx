import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import KidsZambia from '../../../../../images/kids-ethiopia.jpg'

import { Link } from "react-router-dom"

const AboutSection = () => (
  <BaseSection className="pt-4 mb-lg-5 py-lg-5">
    <Row className="mb-4 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What will we do in <span className="font-alt font-primary">Addis Abeba?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          For the first time in our existence we decided to go on a mission to a destination, where skateboarding and skate-related activities already have a long history. The capital city of Ethiopia has two standing skateparks where the localy established organization Ethiopia Skate runs their programs. Based on a recommendation from our friends from <Link to="https://foreverplayground.org">Forever Playground Magazine</Link> we decided to contact Israel Dejene, the local hero who runs a suburban based social project called Megabi House, where all street kids are welcome. He is passionate about skateboarding and he even linked up with Tony Hawk, Nyjah Huston and the gang and they went down there back in 2015 to build him a miniramp right on the land of Megabi House. Unfortunately, we have to take down this miniramp, but we will build a much greater facility by the end of 2023.
        </BaseSection.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          "Megabi House is a home for children and youth who literally have no place to sleep. In our community there are many street kids who have no home or family to go home to at the end of the day"
        </BaseSection.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          SEE MORE OF HIS WORK <Link to="https://www.megabi.org/megabiskate">HERE!</Link>
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={KidsZambia} fluid rounded />
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

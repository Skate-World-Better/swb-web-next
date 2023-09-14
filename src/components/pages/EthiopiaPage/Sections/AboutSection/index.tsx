import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import KidsZambia from '../../../../../images/kids_zambia.jpg'

import { ReactComponent as SkateparkIcon } from "../../../../../images/icons/skatepark-icon.svg"
import { ReactComponent as BbqIcon } from "../../../../../images/icons/bbq-icon.svg"
import { ReactComponent as HealthIcon } from "../../../../../images/icons/hiv-icon.svg"
import {Link} from "react-router-dom";

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
      </Col>
      <Col xs={12} lg={6}>
        <Image src={KidsZambia} fluid rounded />
      </Col>
    </Row>
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12}>
        <BaseSection.Header.Annotation className="d-none d-md-block sub">
          Results
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <SkateparkIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Public skatepark
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          We bought a 1200m2 land plot in the south of
          Mongu. We built a public skatepark and an adjacent cabin right next to it,
          connected to water and electricity. The kids have a place to hang out, relax,
          skate, dance and attend lectures in the prepared program.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <BbqIcon />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Public hub
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          Is the skatepark for skaters only? Of course not! While
          skateboarding is an important tool for us and our projects, we make sure that the
          space can be used for multiple purposes. After all, We Skate Mongu is a
          community of skaters, dancers, artists and people of all interests. The place is
          open to screenings, exhibitions, talks and other events.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <HealthIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          CSO's
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          We connected with a bunch of local CSOs for a greater impact.
          Any CSO can use the entire space as a platform for seminars, workshops and
          other activities.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

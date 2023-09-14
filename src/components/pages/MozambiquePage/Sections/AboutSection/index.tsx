import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import KidsImage from '../../../../../images/kids-assembling-skateboard.jpg'

import { ReactComponent as SkateparkIcon } from "../../../../../images/icons/skatepark-icon.svg"
import { ReactComponent as SkateboardIcon } from "../../../../../images/icons/skateboard-icon.svg"
import { ReactComponent as ChampionIcon } from "../../../../../images/icons/champion-icon.svg"

const AboutSection = () => (
  <BaseSection className="pt-4 mb-lg-5 py-lg-5">
    <Row className="mb-4 py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What went down in <span className="font-alt font-primary">Maputo?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          Mozambique was our very first project. It took place in late 2019 and
          36 international volunteers from around the world were present, many
          of them united under the amazing organization Wonders Around The
          World. We managed to build two skateparks, one in the center and one
          on the edge of the city of Maputo. Further we have brought 40+ boards
          to the two organizations we supported, namely ASM and Maputo-Skate.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={KidsImage} fluid rounded />
      </Col>
    </Row>
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12}>
        <BaseSection.Header.Annotation className="d-none d-md-block sub">Results</BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <SkateparkIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Two skateparks
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          Both are concrete, both have an adjacent center with all facilities,
          both host events of all kinds and regular skate classes. One of the
          parks also became a facility for the nearby S.O.S. Chilldren’s
          Village.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <SkateboardIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Sharing boards
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          We brought more than forty boards, from a wheel to a griptape. We
          divided it between the two skateparks for kids to share. And they do!
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <ChampionIcon />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Skateboarding champ
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          One of the kids is a real prodigy. His name is Noel Cossa and he is
          14. Soon after we left he was taken on a African championship held in
          Angola and ended 3rd. But now he has a place to practice, so let’s see
          next time!
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

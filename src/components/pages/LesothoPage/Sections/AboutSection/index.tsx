import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import Lesotho4 from '../../../../../images/lesotho-4.jpg'
import TwoSkateparks from '../../../../../images/icons/icon_public_two_skateparks.png'
import OlympicCenter from '../../../../../images/icons/icon_olympic_center.png'
import LocalNgo from '../../../../../images/icons/icon_local_ngo.png'

import ImgIcon from "../../../../ImgIcon";

const AboutSection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What will we do in <span className="font-alt font-primary">Lesotho?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          We decided to build the next project in the mountainous Lesotho, particularly in the capital city of Maseru. We have secured a land in the Lepereng area easily accessible by all the Maseru locals. The project is designed to meet all the parameters and at the same time be feasible to be constructed by a team of professionals within a maximum period of five weeks. The land falls under the local Olympic Committee and the skatepark will be surrounded by other sports facilities that will support the integrity of the entire area. The space will be publicly accessible, managed by the capital and the local organization Lesotho Skateboarding.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={Lesotho4} fluid rounded loading="lazy" />
      </Col>
    </Row>
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12}>
        <BaseSection.Header.Annotation className="d-none d-md-block sub">
          Intentions
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <ImgIcon src={TwoSkateparks} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Public skatepark
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          The Lepereng skatepark will be maintained by the Olympic committee of Lesotho and the local organization Lesotho Skateboarding. This means the park will be open to public at all times, but rules and order will be looked after by the facility administrator. Local crew will organize regular skateboarding lectures and other events that shall be held in the park for the enjoyment of the general public.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <ImgIcon src={OlympicCenter} size="large" />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Olympic center
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          The skatepark will feature professional elements, but also a vast area for the beginners, where kids can learn without limiting the rest of the park users. Apart from skateboarding, the area will be eligible for public events, video screenings lectures and other sportive activities. We will make sure that the project is electrified for an easy device plug in and we will paint a little pitch on the ground, so that the space has a greater use potential for the Olympic center.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <ImgIcon src={LocalNgo} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Local NGO
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          We have a great support for this project amidst the local crew, but also the local non-profit sector. We count on a regular involvement of the Lesotho skateboarding members, but on top of that, we have partnered with <a
          href="https://www.kick4life.org/">Kick4Life</a> organization that will be involved in the construction process.
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

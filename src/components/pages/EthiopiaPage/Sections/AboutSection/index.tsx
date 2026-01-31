import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import KidsEthiopia from '../../../../../images/kids-ethiopia.jpg'

import { Link } from "react-router-dom"
import ImgIcon from "../../../../ImgIcon";
import TwoSkateparks from "../../../../../images/icons/icon_public_two_skateparks.png";
import CommunitySpace from "../../../../../images/icons/icon_community_space.png";
import BonideeCoop from "../../../../../images/icons/icon_swb_bonidee_coop.png";

const AboutSection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What did we do in <span className="font-alt font-primary">Addis Abeba?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          For the first time in our existence we decided to go on a mission to a destination,
          where skateboarding and skate-related activities already have a long history. The
          capital city of Ethiopia has two standing skateparks where the localy established
          organization Ethiopia Skate runs their programs. Based on a recommendation from
          our friends from <Link to="https://foreverplayground.org/">Forever Playground Magazine</Link> we decided to contact Israel Dejene,
          the local hero who runs a suburban based social project called Megabi House, where
          all street kids are welcome. He is passionate about skateboarding and he even linked
          up with Tony Hawk, Nyjah Huston and the gang and they went down there back in
          2015 to build him a miniramp right on the land of Megabi House. In December 2023
          we went down to Addis to continue on the job sparked by Tony and we worked out
          the space into a full skatepark. It took us two weeks of work day and night in a crew
          of six people. We left a concrete jungle with obstacles for the most skilled riders but
          also for the very beginners. We decorated the space with a mozaic, couple plants
          and two palmtrees. Having left more than twenty complete boards, shoes and couple
          of concrete tools, we believe that this project will continue to thrive in the years to
          come!
        </BaseSection.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          SEE MORE OF HIS WORK <Link to="https://www.megabi.org/megabiskate">HERE!</Link>
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={KidsEthiopia} fluid rounded className="mt-lg-5" />
        <BaseSection.Text className="mt-lg-5 mr-lg-4 mb-5 mb-md-0">
          "Megabi House is a home for children and youth who literally have no place to sleep. In our community there are many street kids who have no home or family to go home to at the end of the day"
        </BaseSection.Text>
      </Col>
    </Row>
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12}>
        <BaseSection.Header.Annotation className="d-none d-md-block sub">
          Results
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={TwoSkateparks} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Public skatepark
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          The skatepark is open to anybody, just go ahead and ask around, or shoot us a message on whatsapp and we will put you together with the local crew.The park is usually serving as a kids playground, but at certain hours it is open for public sessions. Go ahead and session it if you’re in the town.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={CommunitySpace} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Community space
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          Megabi house is a community space ran by Israel Dejene and his sisters. Many families live together in a shared housing, creating a sustainable form of existence. With countles children running around the vast area is lacking a calm space where children can feel safe and can focus on themselves. Even better they can spend their time being active in the skatepark.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={BonideeCoop} size="large" />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Company support
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          This was the first project ever to be completely put together by the Bonidee_Skateparks guys. In a crew of 7 people together with a Slovakian photographer Kubo Križo, this project was completed in 14 days of non stop work followed by a couple days of non stop fun.
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

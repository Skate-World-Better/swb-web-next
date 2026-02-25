import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import BaseSection from '../../../../BaseSection/'

import FlagImage from '../../../../../images/swaziland-flag.jpg'
import TwoSkateparks from '../../../../../images/icons/icon_public_two_skateparks.png'
import ThreeBlock from '../../../../../images/icons/icon_three_block_center.png'
import CommunityProjects from '../../../../../images/icons/icon_community_projects.png'

import ImgIcon from "../../../../ImgIcon";

const AboutSection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What did we do in <span className="font-alt font-primary">Mbabane?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          Mbabane is the capital city of Swaziland right in the middle of the Drakensberg range. We built a skatepark in a public park in the middle of the city with the great view over the mountains. We went down in early 2023 in a group of eight volunteers from RSA, France, Belgium and mostly the crew from <a href="https://www.bonidee.cz/?lang=en" target="_blank" rel="noreferrer noopener">Bonidee Skateparks</a>. In forty days we managed to build a multifunctional 350 square meter big skatepark feasible for cultural events, gatherings, BBQ and so on. We engaged with an Italian NGO Cospe who regularly runs their program called “YES” - Youth Empowerment Strategy on top of the skateboarding classes secured by the local organization Emaswati Skate.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={FlagImage} fluid rounded loading="lazy" />
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
          We have obtained a public land of 350 square meters. A historic, non-functional miniramp stood on that land and we worked it into the new concrete skatepark with all elements of modern skateboarding.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={ThreeBlock} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Three Block Fanclub
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          To be found only at Stalinplaza, Prague - Czech Rep. & Lafezeka skatepark, Mbabane - Swaziland. This granite ledge was created in an aim to show respect to the Prague skateboarding community. We created a little Stalinplaza vibe in Africa, to prove that keeping <a href="https://www.instagram.com/stalinplaza/" target="_blank" rel="noreferrer noopener">@stalinplaza</a> the way it is, is the very best option. Its existence has produced an ambition, creativity and countless friendships over the years and it shall do the same in Swaziland and <a
          href="https://www.instagram.com/eswatini_skateboarding/" target="_blank" rel="noreferrer noopener">@eswatini_skateboarding</a>
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={CommunityProjects} size="large" />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Community projects
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          Our key partner on this project was Emaswati skate. The organization has an agenda of working in poorer regions of the country just as much as in the capital city. They use skateboarding to tackle the everyday struggles around the country. This skatepark is the biggest of five facilities that escalated around the country.
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

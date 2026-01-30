import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import BaseSection from '../../../../BaseSection'
import ImgIcon from "../../../../ImgIcon";

import KidsImage from '../../../../../images/kids-assembling-skateboard.jpg'
import TwoSkateparks from '../../../../../images/icons/icon_public_two_skateparks.png'
import SharingBoards from '../../../../../images/icons/icon_sharing_boards.png'
import SkateboardChamp from '../../../../../images/icons/icon_skateboard_champ.png'

const AboutSection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What went down in <span className="font-alt font-primary">Maputo?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          Mozambique was our very first project. It took place in late 2019 and 36 international volunteers from around the world were present, many of them united under the amazing organization <a href="https://wondersaroundtheworld.org/">Wonders Around The World</a>. We managed to build two skateparks, one in the center and one on the edge of the city of Maputo. Further we have brought 40+ boards to the two organizations we supported, namely ASM and Maputo-Skate. The project was our first one, therefore it took us long months of preparation, then two months of preparation In Maputo and then about six weeks of work. We’ve build the parks simultaneously and switched crews on daily basis. It was a hard, but an important lesson for the beginning.
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
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={TwoSkateparks} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Two skateparks
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          Both are concrete, both have an adjacent center with all facilities, both host events of all kinds and regular skate classes. One skatepark is open to public at all times, while the other is hosting regular weekly activities. Contact us for more info if you plan a visit to Maputo.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={SharingBoards} size="large" />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Sharing boards
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          We brought more than forty boards, from a wheel to a griptape. We
          divided it between the two skateparks for kids to share. And they do!
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={4} className="my-3">
        <ImgIcon src={SkateboardChamp} size="large" />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Skateboarding champ
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="mr-lg-5 px-4 p-lg-0">
          One of the kids is a real prodigy. His name is Noel Cossa and he has been progressing since we met in 2019. Soon after we left he was taken on a African championship held in Angola and ended 3rd. We keep our material support to him and his closest friend Junior. It seems possible to see him compete on an international level at some point!
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

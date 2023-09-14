import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import styles from './index.module.scss'

import KhongoloteZero from './images/khongolete0.jpg'
import KhongoloteOne from './images/khongolete1.jpg'
import KhongoloteTwo from './images/khongolete2.jpg'
import KhongoloteThree from './images/khongolete3.jpg'
import KhongoloteFour from './images/khongolete4.jpg'
import MaxaqueneZero from './images/maxaquene0.jpg'
import MaxaqueneOne from './images/maxaquene1.jpg'
import MaxaqueneTwo from './images/maxaquene2.jpg'
import MaxaqueneThree from './images/maxaquene3.jpg'
import MaxaqueneFour from './images/maxaquene4.jpg'

const SkateparkSection = () => (
  <BaseSection className="pt-5 my-lg-5 py-lg-5">
    <Row className="mb-lg-4">
      <Col sm={12} lg={{span: 6, offset: 3}}>
        <BaseSection.Header.Text className="mb-5 text-center">
          These are the lovely <br /> skateparks that <span className="font-alt font-primary">we did</span>
        </BaseSection.Header.Text>
      </Col>
    </Row>
    <Row className="py-4 mb-5">
      <Col sm={12} lg={6} className="my-lg-auto">
        <div className="pt-5 pt-lg-0 pb-5">
          <BaseSection.Header.Text>Skate park <span className="font-alt font-primary">Maxaquene</span></BaseSection.Header.Text>
          <BaseSection.Header.Annotation className="pt-3 pr-lg-5">
            Maxaquene is among the central districts of Maputo. It is
            residential but close to the beach and nearby restaurants and
            bars. It is easily accessible by anyone, the kids of Maputo and
            the skateboarders passing by.
          </BaseSection.Header.Annotation>
        </div>
      </Col>
      <Col sm={12} lg={6}>
        <Carousel>
          <Carousel.Item>
            <Image src={MaxaqueneZero} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={MaxaqueneOne} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={MaxaqueneTwo} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={MaxaqueneThree} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={MaxaqueneFour} className="d-block w-100 h-100"/>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row className="py-4 mb-5 flex-column-reverse flex-lg-row">
      <Col sm={12} lg={6}>
        <Carousel>
          <Carousel.Item>
            <Image src={KhongoloteZero} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={KhongoloteOne} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={KhongoloteTwo} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={KhongoloteThree} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={KhongoloteFour} className="d-block w-100 h-100"/>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col sm={12} lg={6} className="my-lg-auto">
        <div className="pt-5 pt-lg-0 pb-5">
          <BaseSection.Header.Text>Skate park <span className="font-alt font-primary">Khongolote</span></BaseSection.Header.Text>
          <BaseSection.Header.Annotation className="pt-3 pr-lg-5">
            Khongolote is on the very edge of the city. It is quite hard to
            get there from the centre, but the spirit of this place is beyond
            belief. It is in an area absolutely lacking any place for children
            to play, so the skatepark just hit the spot.
          </BaseSection.Header.Annotation>
        </div>
      </Col>
    </Row>
    <Row className="pt-4 py-lg-4 mb-lg-5">
      <Col sm={12} lg={{span: 8, offset: 2}}>
        <BaseSection.Header.Text className="mb-5 text-center">
          Have fun watching the video <br /> about construction of the <span className="font-alt font-primary">skatepark</span>
        </BaseSection.Header.Text>
      </Col>
      <Col sm={12} lg={{span: 8, offset: 2 }} className={styles.videoWrapper}>
        <iframe width="560" height="350" src="https://www.youtube.com/embed/rp-jLIltMgs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </Col>
    </Row>
  </BaseSection>
)

export default SkateparkSection

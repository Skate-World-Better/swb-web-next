import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import ParkOne from '../../../../../images/Skatepark1.jpg'
import ParkTwo from '../../../../../images/Skatepark2.jpg'
import ParkThree from '../../../../../images/Skatepark3.jpg'
import ParkFour from '../../../../../images/Skatepark4.jpg'
import ParkFive from '../../../../../images/Skatepark5.jpg'
import ParkSix from '../../../../../images/Skatepark6.jpg'
import ParkSeven from '../../../../../images/Skatepark7.jpg'
import ParkEight from '../../../../../images/Skatepark8.jpg'
import ParkNine from '../../../../../images/Skatepark9.jpg'
import ParkTen from '../../../../../images/Skatepark10.jpg'
import ParkEleven from '../../../../../images/Skatepark11.jpg'
import ParkTwelve from '../../../../../images/Skatepark12.jpg'

const SkateparkSection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col sm={12} lg={8} className="offset-lg-2">
        <BaseSection.Header.Text className="mb-5">
          This is
          <span className="font-alt font-primary">
            {' '}
            the park
          </span>
          !
        </BaseSection.Header.Text>
        <Carousel>
           <Carousel.Item>
             <Image src={ParkOne} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkTwo} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkThree} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkFour} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkFive} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkSix} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkSeven} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkEight} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkNine} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkTen} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkEleven} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkTwelve} className="d-block w-100 h-100"/>
          </Carousel.Item>
        </Carousel>
        <BaseSection.Text className="pt-5 item-title">
          Lukabe Hande skatepark
          </BaseSection.Text>
        <BaseSection.Header.Annotation className="mr-lg-5">
          Our good friend Johnny Kalenga came up with the name, explaining that:
          “Lukaba Hande can be translated as <span className="text-uppercase">we will be allright!</span> We went with this
          name particularly because when We Skate Mongu started we only had one
          skateboard and 15 students. We didn't really worry about what we didn't have at
          that time because we always said: Lukaba Hande!
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default SkateparkSection

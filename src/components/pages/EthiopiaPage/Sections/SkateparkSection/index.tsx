import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import ParkOne from '../../../../../images/ethiopia-park-1.jpg'
import ParkTwo from '../../../../../images/ethiopia-park-2.jpg'
import ParkThree from '../../../../../images/ethiopia-park-3.jpg'
import ParkFour from '../../../../../images/ethiopia-park-4.jpg'
import ParkFive from '../../../../../images/ethiopia-park-5.jpg'
import ParkSix from '../../../../../images/ethiopia-park-6.jpg'
import ParkSeven from '../../../../../images/ethiopia-park-7.jpg'
import ParkEight from '../../../../../images/ethiopia-park-8.jpg'
import ParkNine from '../../../../../images/ethiopia-park-9.jpg'
import ParkTen from '../../../../../images/ethiopia-park-10.jpg'

const SkateparkSection = () => (
  <BaseSection className="mb-lg-5 py-lg-5">
    <Row className="align-items-center my-4 py-5 text-center text-lg-left">
      <Col sm={12} lg={8} className="offset-lg-2">
        <BaseSection.Header.Text className="mb-5">
          This is the result of
          <span className="font-alt font-primary">
            {' '}
            our work
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
        </Carousel>
        <BaseSection.Text className="pt-5 item-title">
          Lukabe Hande skatepark
          </BaseSection.Text>
        <BaseSection.Header.Annotation className="mr-lg-5">
          The skatepark is located at the suburban area of the city, right under the
          Entoto forest surrounding Addis Abeba. We continued on a work once
          started by California Skateparks. What was once only a miniramp is now
          a full skatepark with both challenging and beginners elements.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default SkateparkSection

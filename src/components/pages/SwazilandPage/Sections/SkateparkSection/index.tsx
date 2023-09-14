import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import ParkFour from '../../../../../images/swazi-park-four.jpg'
import ParkSix from '../../../../../images/swazi-park-six.jpg'

const SkateparkSection = () => (
  <BaseSection className="mb-lg-5 py-lg-5">
    <Row className="align-items-center my-4 py-5 text-center text-lg-left">
      <Col sm={12} lg={8} className="offset-lg-2">
        <BaseSection.Header.Text className="mb-5">
          This is the result of <span className="font-alt font-primary">our work</span>
        </BaseSection.Header.Text>
        <Carousel>
           <Carousel.Item>
             <Image src={ParkSix} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkFour} className="d-block w-100 h-100"/>
          </Carousel.Item>
        </Carousel>
        <BaseSection.Text className="pt-5 item-title">Coronation skatepark</BaseSection.Text>
        <BaseSection.Header.Annotation className="mr-lg-5">
          The skatepark is located in a so-called Coronation Park, which is the biggest public park in Mbabane. It is right by an existing sporting area with tennis courts and public facilities. The skatepark is easily accessible to anybody as it is located in the middle of the city. It is public and open all day long, but the activities are carried out by a local organization - Emaswati Skate.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default SkateparkSection

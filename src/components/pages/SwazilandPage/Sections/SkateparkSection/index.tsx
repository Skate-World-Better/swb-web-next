import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import Park1 from '../../../../../images/swazi-park-1.jpg'
import Park2 from '../../../../../images/swazi-park-2.jpg'
import Park3 from '../../../../../images/swazi-park-3.jpg'
import Park4 from '../../../../../images/swazi-park-4.jpg'
import Park5 from '../../../../../images/swazi-park-5.jpg'
import Park6 from '../../../../../images/swazi-park-6.jpg'
import Park7 from '../../../../../images/swazi-park-7.jpg'
import Park8 from '../../../../../images/swazi-park-8.jpg'
import Park9 from '../../../../../images/swazi-park-9.jpg'
import Park10 from '../../../../../images/swazi-park-10.jpg'
import Park11 from '../../../../../images/swazi-park-11.jpg'
import Park12 from '../../../../../images/swazi-park-12.jpg'

const SkateparkSection = () => (
  <BaseSection className="mb-lg-5 py-lg-5">
    <Row className="align-items-center my-4 py-5 text-center text-lg-left">
      <Col sm={12} lg={8} className="offset-lg-2">
        <BaseSection.Header.Text className="mb-5">
          This is the result of <span className="font-alt font-primary">our work</span>
        </BaseSection.Header.Text>
        <Carousel>
           <Carousel.Item>
             <Image src={Park1} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={Park2} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park3} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park4} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park5} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park6} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park7} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park8} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park9} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park10} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park11} className="d-block w-100 h-100"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park12} className="d-block w-100 h-100"/>
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

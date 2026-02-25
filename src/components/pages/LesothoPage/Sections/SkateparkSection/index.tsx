import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import ParkOne from '../../../../../images/lesotho-park-1.png'
import ParkTwo from '../../../../../images/lesotho-park-2.png'
import ParkThree from '../../../../../images/lesotho-park-3.png'
import ParkFour from '../../../../../images/lesotho-park-4.png'
import ParkFive from '../../../../../images/lesotho-park-5.png'
import ParkSix from '../../../../../images/lesotho-park-6.png'
import Park7 from '../../../../../images/lesotho-park-7.png'
import Park8 from '../../../../../images/lesotho-park-8.png'
import Park9 from '../../../../../images/lesotho-park-9.png'
import Park10 from '../../../../../images/lesotho-park-10.png'

const SkateparkSection = () => (
  <BaseSection className="py-4 py-lg-5">
    <Row className="my-4 py-4 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col sm={12} lg={8} className="offset-lg-2">
        <BaseSection.Header.Text className="mb-5">
          This is the look of the future
          <span className="font-alt font-primary">
            {' '}
            skate park!
          </span>
        </BaseSection.Header.Text>
        <Carousel>
           <Carousel.Item>
             <Image src={ParkOne} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkTwo} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkThree} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
             <Image src={ParkFour} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkFive} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ParkSix} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park7} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park8} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park9} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Park10} className="d-block w-100 h-100" loading="lazy"/>
          </Carousel.Item>
        </Carousel>
        <BaseSection.Text className="pt-5 item-title">
          Lepereng Skatepark
          </BaseSection.Text>
        <BaseSection.Header.Annotation className="mr-lg-5">
          Lepereng skatepark features two levels, one surrounded by quarterpipes and the other directly open to the space around. The layout resembles the local “white spot” that locals consider the birthplace of skateboarding in Lesotho. We took the inspiration and turned it into a full skatepark. Decorated in green and blue colors, with the local sandstone tiles, we try to bring the national vibe to the first skatepark in the country.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default SkateparkSection

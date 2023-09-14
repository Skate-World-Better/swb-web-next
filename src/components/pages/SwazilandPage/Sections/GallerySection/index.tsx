import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import SwazilandGuys from '../../../../../images/swaziland-guys.jpg'
import SwazilandNature from '../../../../../images/swaziland-nature.jpg'
import SwazilandTrip from '../../../../../images/swaziland-trip.jpg'
import SwazilandBuilding from '../../../../../images/swaziland-building.jpg'
import SwazilandSugar from '../../../../../images/swaziland-sugar.jpg'
import SwazilandFlag from '../../../../../images/swaziland-flag.jpg'
import SwazilandCows from '../../../../../images/swaziland-cows.jpg'
import SwazilandElectricity from '../../../../../images/swaziland-electricity.jpg'
import SwazilandTruck from '../../../../../images/swaziland-truck.jpg'

const data = [{
    imageSrc: SwazilandGuys,
  },
  {
    imageSrc: SwazilandNature,
  },
  {
    imageSrc: SwazilandTrip,
  },
  {
    imageSrc: SwazilandTruck,
  },
  {
    imageSrc: SwazilandSugar,
  },
  {
    imageSrc: SwazilandCows,
  },
  {
    imageSrc: SwazilandElectricity,
  },
  {
    imageSrc: SwazilandFlag,
  },
  {
    imageSrc: SwazilandBuilding,
  }
]

const GallerySection = () => (
  <BaseSection className="mb-5 py-5 mb-lg-5 py-lg-5">
    <Row className="mb-5 align-items-center py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Some cool <span className="font-alt font-primary">moments</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          Here are a few pictures from a trip to Swaziland, last year and from
          the preparation process. Should you be interested in having one
          printed on your wall, just let us know!
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <MediaCarousel
          items={data}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          component={<ImageCard ratio="2:3" isExpandable={false} />}
        />
      </Col>
    </Row>
  </BaseSection>
)

export default GallerySection

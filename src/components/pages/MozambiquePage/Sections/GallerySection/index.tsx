import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import BoysImage from '../../../../../images/boys-in-skatepark.jpg'
import KidsAndBoards from '../../../../../images/kids-and-skateboards.jpg'
import KidsInSkatepark from '../../../../../images/kids-in-skatepark.jpg'
import KidsAndSkatepark from '../../../../../images/kids-and-skatepark.jpg'
import KidsInDoneSkatepark from '../../../../../images/kids-in-done-skatepark.jpg'
import KidsAssemblingBoards from "../../../../../images/kids-assembling-skateboard.jpg"
import MaputoKids from '../../../../../images/maputo-kids.jpg'
import MaputoKiddos from '../../../../../images/maputo-kiddos.png'
import MaputoGirl from '../../../../../images/maputo-girl.jpg'
import MaputoGuys from '../../../../../images/maputo-guys.jpg'
import SkateboardAssembling from '../../../../../images/skateboard-assembling.jpg'
import SkateparkBuild from "../../../../../images/skatepark-concrete-build.jpg"
import SkateparkDrill from "../../../../../images/skatepark-drill.jpg"
import SkateparkWork from '../../../../../images/skatepark-work.jpg'
import SkateparkInProgress from '../../../../../images/skatepark-in-progress.jpg'

import CorruptionInMozambique from './documents/Corruption-in-Mozambique.pdf'

const data = [{
    imageSrc: MaputoGirl,
  },
  {
    imageSrc: KidsAssemblingBoards,
  },
  {
    imageSrc: BoysImage,
  },
  {
    imageSrc: KidsAndBoards,
  },
  {
    imageSrc: SkateparkDrill,
  },
  {
    imageSrc: KidsAndSkatepark,
  },
  {
    imageSrc: MaputoKiddos,
  },
  {
    imageSrc: SkateparkBuild,
  },
  {
    imageSrc: KidsInSkatepark,
  },
  {
    imageSrc: SkateparkWork,
  },
  {
    imageSrc: KidsInDoneSkatepark,
  },
  {
    imageSrc: MaputoKids,
  },
  {
    imageSrc: SkateparkInProgress,
  },
  {
    imageSrc: SkateboardAssembling,
  },
  {
    imageSrc: MaputoGuys,
  },
]

const GallerySection = () => (
  <BaseSection className="mb-5 py-5 mb-lg-5 py-lg-5">
    <Row className="align-items-center my-5 py-5 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="pb-2 sub">
          Photogallery
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">Some cool <span className="font-alt font-primary">moments</span></BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          Here are a few pictures from the journey, from the process and the
          results of our work. Should you be interested in having one printed on
          your wall, just let us know! Read the assessment on corruption in
          Mozambique put together by Martin Loužecký, the founder of SWB, as
          his diploma work <a target="_blank" href={CorruptionInMozambique}>here</a>.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <MediaCarousel
          items={data}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          component={
            <ImageCard
              ratio="2:3"
              isExpandable={false}
            />
          }
        />
      </Col>
    </Row>
  </BaseSection>
)

export default GallerySection

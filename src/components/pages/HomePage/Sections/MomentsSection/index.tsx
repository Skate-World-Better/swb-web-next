import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'

import ZambiaOne from '../../../../../images/1.1.jpg'
import ZambiaTwo from '../../../../../images/1.2.jpg'
import ZambiaThree from '../../../../../images/1.3.jpg'
import ZambiaFour from '../../../../../images/1.4.jpg'
import ZambiaFive from '../../../../../images/1.5.jpg'
import ZambiaSix from '../../../../../images/1.6.jpg'
import ZambiaSeven from '../../../../../images/1.7.jpg'
import ZambiaEight from '../../../../../images/1.8.jpg'
import ZambiaNine from '../../../../../images/1.9.jpg'
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
import SwazilandOne from '../../../../../images/swaziland-1.jpg'
import SwazilandTwo from '../../../../../images/swaziland-2.jpg'
import SwazilandThree from '../../../../../images/swaziland-3.jpg'
import SwazilandFour from '../../../../../images/swaziland-4.jpg'
import SwazilandFive from '../../../../../images/swaziland-5.jpg'
import SwazilandSix from '../../../../../images/swaziland-6.jpg'
import SwazilandSeven from '../../../../../images/swaziland-7.jpg'
import SwazilandEight from '../../../../../images/swaziland-8.jpg'
import SwazilandNine from '../../../../../images/swaziland-9.jpg'
import SwazilandTen from '../../../../../images/swaziland-10.jpg'

import styles from './index.module.scss'
import {Link} from "react-router-dom";

const data = [
  {
    imageSrc: ZambiaOne,
  },
  {
    imageSrc: ZambiaTwo,
  },
  {
    imageSrc: ZambiaThree,
  },
  {
    imageSrc: ZambiaFour,
  },
  {
    imageSrc: ZambiaFive,
  },
  {
    imageSrc: ZambiaSix,
  },
  {
    imageSrc: ZambiaSeven,
  },
  {
    imageSrc: ZambiaEight,
  },
  {
    imageSrc: ZambiaNine,
  },
  {
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
  {
    imageSrc: SwazilandOne,
  },
  {
    imageSrc: SwazilandTwo,
  },
  {
    imageSrc: SwazilandThree,
  },
  {
    imageSrc: SwazilandFour,
  },
  {
    imageSrc: SwazilandFive,
  },
  {
    imageSrc: SwazilandSix,
  },
  {
    imageSrc: SwazilandSeven,
  },
  {
    imageSrc: SwazilandEight,
  },
  {
    imageSrc: SwazilandNine,
  },
  {
    imageSrc: SwazilandTen,
  },

]

const MomentsSection = () => (
  <BaseSection className="mb-5 mb-lg-5 py-lg-5">
    <Row className="mb-5 align-items-center text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Annotation className="mb-4 sub">
          Stories
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Text className="mb-5">
          Some cool <span className="font-alt font-primary">moments</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="py-4 mr-lg-5">
          Doing this, it is not just great times spent in Africa, but also hours
          and hours of planning and meetings. These are some great moments and
          stories that we experience on the way to all of this.
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
              ratio="1:2"
              isExpandable={false}
            />
          }
        />
      </Col>
    </Row>
    <Row className="pt-4 py-lg-4 mt-lg-5">
      <Col sm={12} lg={{span: 8, offset: 2}}>
        <BaseSection.Header.Text className="mb-5 text-center">
          When we go on <span className="font-alt font-primary">projects</span>
        </BaseSection.Header.Text>
      </Col>
      <Col sm={12} lg={{ span: 8, offset: 2 }} className={styles.videoWrapper}>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/504058820" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
      </Col>
      <Col sm={12} lg={{span: 8, offset: 2}}>
        <BaseSection.Header.BaseBottom className="mt-5 pt-5 text-center">SKEJTY A LOPATY</BaseSection.Header.BaseBottom>
        <BaseSection.Text className="mt-2 text-center">
          Česká Televize got excited about our work and supported us in developing a five episode documentary from the project that took place in Zambia.
        </BaseSection.Text>
        <BaseSection.Text className="mt-2 text-center">
          <Link to="https://www.ceskatelevize.cz/porady/15126029820-skejty-a-lopaty/">Have a look!</Link>
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default MomentsSection

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import ImageCard from '../../../../Card'
import PartnersCarousel from '../../../../Carousel'

import Alpha from './images/alpha.png'
import Ambassadors from './images/ambassadors.png'
import ASM from './images/asm.png'
import EswatiniSkate from './images/eswatini-skateboarding.png'
import Hitit from './images/hitit.png'
import Jazz from './images/jazz.png'
import MaputoSkate from './images/maputo-skate.png'
import Nief from './images/nief.png'
import OneLove from './images/one-love.png'
import Push from './images/push.png'
import SnowPanic from './images/snow-panic.png'
import SufNDuf from './images/suf-n-duf.png'
import UnicornStudio from './images/uu-studio.png'
import Wonders from './images/waw.png'
import WeSkateMongu from './images/we-skate-mongu.png'
import UNDP from './images/undp.png'
import CzechAid from './images/czechaid.jpeg'

const sponsorsData = [
  {
    imageSrc: UNDP,
    link: 'https://www.undp.org/'
  },
  {
    imageSrc: CzechAid,
    fullWidth: true,
    link: 'http://www.czechaid.cz/'
  },
  {
    imageSrc: Wonders,
    link: 'https://wondersaroundtheworld.org'
  },
  {
    imageSrc: WeSkateMongu,
    link: 'https://www.facebook.com/WeSkate.MG/'
  },
  {
    imageSrc: EswatiniSkate,
    link: 'https://instagram.com/eswatini_skateboarding?'
  },
  {
    imageSrc: Ambassadors,
    link: 'https://www.ambassadors.eu'
  },
  {
    imageSrc: ASM,
    link: 'https://www.facebook.com/MOZAMBIQUESKATEBOARDING/'
  },
  {
    imageSrc: Hitit,
    link: 'https://hititskateboarding.com'
  },
  {
    imageSrc: Jazz,
    link: 'https://www.jazzskateco.com'
  },
  {
    imageSrc: MaputoSkate,
    link: 'https://instagram.com/maputoskate'
  },
  {
    imageSrc: SufNDuf,
    link: 'https://instagram.com/sufnduf'
  },
  {
    imageSrc: UnicornStudio,
    link: 'https://uustudio.cz'
  },
  {
    imageSrc: Alpha,
    link: 'http://www.alphaappeal.co.za/'
  },
  {
    imageSrc: OneLove,
    link: 'https://staging.oneloveboardshop.be/'
  },
  {
    imageSrc: SnowPanic,
    link: 'https://www.snowpanic.cz/'
  },
  {
    imageSrc: Nief,
    link: 'https://www.nief.be/'
  },
  {
    imageSrc: Push,
    link: 'https://www.pushhasselt.be/'
  }
]

const PartnersSection = () => (
  <BaseSection className="mb-5 mb-lg-5 py-lg-5">
    <Row className="py-5 my-5">
      <Col xs={12}>
        <BaseSection.Header.Text className="mb-2 mb-lg-5 px-2 px-lg-0">
          And we could not have done it without our <span className="font-alt font-primary">partners</span>
        </BaseSection.Header.Text>
      </Col>
      <Col xs={12}>
        <PartnersCarousel
          items={sponsorsData}
          config={{
            countLarge: 4,
            countDesktop: 4,
          }}
          component={<ImageCard ratio="4:3" isExpandable={false} removeShadow isLink/>}
        />
      </Col>
    </Row>
  </BaseSection>
)

export default PartnersSection

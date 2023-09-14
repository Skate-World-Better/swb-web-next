import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'
import ImageCard from '../../../../Card'
import PressCarousel from '../../../../Carousel'

import Aktualne from './images/aktualne.png'
import CzechCrunch from './images/czech-crunch.png'
import Forbes from './images/forbes.jpg'
import ForeverPlayground from './images/forever-playground.png'
import WAW from './images/waw.jpg'
import RadioWave from './images/radio-wave.jpg'
import E15 from './images/e15.jpg'
import Skateism from './images/skateism.jpg'
import Boardmag from './images/boardmag.jpg'
import SkateRock from './images/skaterock.jpg'
import CT4Sport from './images/ct4-sport.jpg'
import HostLucie from './images/host-lucie.jpg'
import ReporterPremium from './images/reporter-premium.png'
import HospodarskeNoviny from './images/article_hospodarske_noviny.png'
import GoOut from './images/goout_m_l.jpeg'

const pressData = [
  {
    imageSrc: GoOut,
    title: "IDEAS",
    link: "https://ceskepodcasty.cz/episode/GraotClb5HS7LB1keQ4s"
  },
  {
    imageSrc: HospodarskeNoviny,
    title: "Hospodarske Noviny",
    link: "https://archiv.hn.cz/c1-66962610-cech-stavi-skateparky-v-africe-slouzi-i-jako-misto-kde-se-dela-prevence-proti-aids-nebo-drogam?fbclid=IwAR1Py8hjJ9YTkCy14sWV7s-HTkzjHHqEnju42OC_Nu8sa99y1ljH-jkPOpc"
  },
  {
     imageSrc: CT4Sport,
     title: "CT4 Sport",
     link: "https://www.youtube.com/watch?v=ywAEIegJoLY&t=4s&ab_channel=SKATEWORLDBETTER"
  },
  {
     imageSrc: HostLucie,
     title: "Cesky rozhlas",
     link: "https://www.youtube.com/watch?v=b3_wsHwFeyQ"
  },
  {
     imageSrc: Forbes,
     title: "Forbes",
     link: "https://forbes.cz/cech-stav-v-africe-skate-parky-a-doufa-v-lepsi-svet-i-zajimave-byznys-prilezitosti/"
  },
  {
     imageSrc: ReporterPremium,
     title: "Reporter",
     link: "https://reporterpremium.cz/a/p63xn/v-africe-pro-jednoho-cecha-urcite-prostor-nekde-je"
  },
  {
     imageSrc: Aktualne,
     title: "Aktualne.cz",
     link: "https://zpravy.aktualne.cz/ekonomika/stavba-skateparku-i-pomoc-s-ocnimi-vadami-tak-cesi-pomahaji/r~ae0767be445211ebb1110cc47ab5f122/v~sl:d2251b0a54fdf3b8b9b53b3c4fd13c8f/"
  },
  {
     imageSrc: ForeverPlayground,
     title: "Forever playground",
     link: "https://foreverplayground.org/skate-world-better-with-martin-louzecky"
  },
  {
     imageSrc: CzechCrunch,
     title: "Czech Crunch",
     link: "https://www.czechcrunch.cz/2020/11/v-africe-stavi-skateparky-a-dava-lidem-nadeji-az-mosambik-me-naucil-ze-je-zivot-skvely-rika-martin-louzecky/"
  },
  {
     imageSrc: WAW,
     title: "WAW Magazine",
     link: "https://wondersaroundtheworld.org/magazine/#Strip2"
  },
  {
     imageSrc: RadioWave,
     title: "Radio Wave",
     link: "https://wave.rozhlas.cz/africke-skejtovani-mosambik-me-naucil-ze-zivot-je-skvelej-rika-martin-louzecky-8161245"
  },
  {
     imageSrc: E15,
     title: "E15",
     link: "https://www.e15.cz/magazin/cesky-prispevek-africe-organizace-skate-world-better-postavila-skateparky-v-mosambiku-1367460"
  },
  {
     imageSrc: Skateism,
     title: "Skateism",
     link: "https://www.skateism.com/pay-respect-pour-concrete-martin-louzecky-of-skate-world-better/"
  },
  {
     imageSrc: Boardmag,
     title: "Boardmag",
     link: "http://www.boardmag.cz/featured/projekt-skate-world-better-ktery-ma-za-ukol-postavit-skatepark-v-mozambiku-se-pomalu-blizi-ke-sve-realizaci/"
  },
  {
     imageSrc: SkateRock,
     title: "SkateRock",
     link: "https://www.skaterock.cz/udalosti/skejty-ambassadors-pomahaji-v-mozambiku-v-kampani-skate-world-better/"
  }
]

const PressSection = () => (
  <BaseSection className="mb-5 mb-lg-5 py-lg-5">
    <Row className="pt-5 mb-3 py-lg-5 my-lg-5">
      <Col xs={12} lg={4} className="offset-lg-4">
        <BaseSection.Header.Text className="text-center mb-4">
          What has been <span className="font-alt font-primary">written</span> about us
        </BaseSection.Header.Text>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <PressCarousel
          items={pressData}
          config={{
            countLarge: 3,
            countDesktop: 3,
          }}
          component={
            <ImageCard
              ratio="1:1"
              withGradient
              isExpandable={false}
              withBlur
              isLink
            />
          }
        />
      </Col>
    </Row>
  </BaseSection>
)

export default PressSection

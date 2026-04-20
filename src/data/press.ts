import Aktualne from '../components/pages/HomePage/Sections/PressSection/images/aktualne.png'
import CzechCrunch from '../components/pages/HomePage/Sections/PressSection/images/czech-crunch.png'
import Forbes from '../components/pages/HomePage/Sections/PressSection/images/forbes.jpg'
import ForeverPlayground from '../components/pages/HomePage/Sections/PressSection/images/forever-playground.png'
import WAW from '../components/pages/HomePage/Sections/PressSection/images/waw.jpg'
import RadioWave from '../components/pages/HomePage/Sections/PressSection/images/radio-wave.jpg'
import E15 from '../components/pages/HomePage/Sections/PressSection/images/e15.jpg'
import Skateism from '../components/pages/HomePage/Sections/PressSection/images/skateism.jpg'
import CT4Sport from '../components/pages/HomePage/Sections/PressSection/images/ct4-sport.jpg'
import HostLucie from '../components/pages/HomePage/Sections/PressSection/images/host-lucie.jpg'
import ReporterPremium from '../components/pages/HomePage/Sections/PressSection/images/reporter-premium.png'
import HospodarskeNoviny from '../components/pages/HomePage/Sections/PressSection/images/article_hospodarske_noviny.png'
import GoOut from '../components/pages/HomePage/Sections/PressSection/images/goout_m_l.jpeg'

export interface PressItem {
  [key: string]: unknown
  imageSrc: string
  title: string
  link: string
}

export const pressData: PressItem[] = [
  {
    imageSrc: GoOut,
    title: 'IDEAS',
    link: 'https://open.spotify.com/episode/62B8vln4X2EVOW9JPWBvxq',
  },
  {
    imageSrc: HospodarskeNoviny,
    title: 'Hospodarske Noviny',
    link: 'https://archiv.hn.cz/c1-66962610-cech-stavi-skateparky-v-africe-slouzi-i-jako-misto-kde-se-dela-prevence-proti-aids-nebo-drogam?fbclid=IwAR1Py8hjJ9YTkCy14sWV7s-HTkzjHHqEnju42OC_Nu8sa99y1ljH-jkPOpc',
  },
  {
    imageSrc: CT4Sport,
    title: 'CT4 Sport',
    link: 'https://www.youtube.com/watch?v=ywAEIegJoLY&t=4s&ab_channel=SKATEWORLDBETTER',
  },
  {
    imageSrc: HostLucie,
    title: 'Cesky rozhlas',
    link: 'https://www.youtube.com/watch?v=b3_wsHwFeyQ',
  },
  {
    imageSrc: Forbes,
    title: 'Forbes',
    link: 'https://forbes.cz/cech-stav-v-africe-skate-parky-a-doufa-v-lepsi-svet-i-zajimave-byznys-prilezitosti/',
  },
  {
    imageSrc: ReporterPremium,
    title: 'Reporter',
    link: 'https://reporterpremium.cz/a/p63xn/v-africe-pro-jednoho-cecha-urcite-prostor-nekde-je',
  },
  {
    imageSrc: Aktualne,
    title: 'Aktualne.cz',
    link: 'https://zpravy.aktualne.cz/ekonomika/stavba-skateparku-i-pomoc-s-ocnimi-vadami-tak-cesi-pomahaji/r~ae0767be445211ebb1110cc47ab5f122/v~sl:d2251b0a54fdf3b8b9b53b3c4fd13c8f/',
  },
  {
    imageSrc: ForeverPlayground,
    title: 'Forever playground',
    link: 'https://foreverplayground.org/skate-world-better-with-martin-louzecky',
  },
  {
    imageSrc: CzechCrunch,
    title: 'Czech Crunch',
    link: 'https://www.czechcrunch.cz/2020/11/v-africe-stavi-skateparky-a-dava-lidem-nadeji-az-mosambik-me-naucil-ze-je-zivot-skvely-rika-martin-louzecky/',
  },
  {
    imageSrc: WAW,
    title: 'WAW Magazine',
    link: 'https://wondersaroundtheworld.org/magazine/#Strip2',
  },
  {
    imageSrc: RadioWave,
    title: 'Radio Wave',
    link: 'https://wave.rozhlas.cz/africke-skejtovani-mosambik-me-naucil-ze-zivot-je-skvelej-rika-martin-louzecky-8161245',
  },
  {
    imageSrc: E15,
    title: 'E15',
    link: 'https://www.e15.cz/magazin/cesky-prispevek-africe-organizace-skate-world-better-postavila-skateparky-v-mosambiku-1367460',
  },
  {
    imageSrc: Skateism,
    title: 'Skateism',
    link: 'https://www.skateism.com/pay-respect-pour-concrete-martin-louzecky-of-skate-world-better/',
  },
]

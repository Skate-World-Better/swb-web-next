import CeskaTelevie from '../components/pages/HomePage/Sections/PartnersSections/images/ceska-televize.png'
import EuFond from '../components/pages/HomePage/Sections/PartnersSections/images/eu-fond.png'
import Bonidee from '../components/pages/HomePage/Sections/PartnersSections/images/bonidee.png'
import UNDP from '../components/pages/HomePage/Sections/PartnersSections/images/undp.png'
import CzechAid from '../components/pages/HomePage/Sections/PartnersSections/images/czechaid.jpeg'
import Wonders from '../components/pages/HomePage/Sections/PartnersSections/images/waw.png'
import WeSkateMongu from '../components/pages/HomePage/Sections/PartnersSections/images/we-skate-mongu.png'
import EswatiniSkate from '../components/pages/HomePage/Sections/PartnersSections/images/eswatini-skateboarding.png'
import Ambassadors from '../components/pages/HomePage/Sections/PartnersSections/images/ambassadors.png'
import ASM from '../components/pages/HomePage/Sections/PartnersSections/images/asm.png'
import Hitit from '../components/pages/HomePage/Sections/PartnersSections/images/hitit.png'
import Jazz from '../components/pages/HomePage/Sections/PartnersSections/images/jazz.png'
import MaputoSkate from '../components/pages/HomePage/Sections/PartnersSections/images/maputo-skate.png'
import SufNDuf from '../components/pages/HomePage/Sections/PartnersSections/images/suf-n-duf.png'
import UnicornStudio from '../components/pages/HomePage/Sections/PartnersSections/images/uu-studio.png'
import Alpha from '../components/pages/HomePage/Sections/PartnersSections/images/alpha.png'
import OneLove from '../components/pages/HomePage/Sections/PartnersSections/images/one-love.png'
import SnowPanic from '../components/pages/HomePage/Sections/PartnersSections/images/snow-panic.png'
import Nief from '../components/pages/HomePage/Sections/PartnersSections/images/nief.png'
import Push from '../components/pages/HomePage/Sections/PartnersSections/images/push.png'
import ZaletSi from '../components/pages/HomePage/Sections/PartnersSections/images/zalet-si.png'
import Metronome from '../components/pages/HomePage/Sections/PartnersSections/images/metronome.png'
import Skateroom from '../components/pages/HomePage/Sections/PartnersSections/images/theskateroom_logo_black.png'

export interface Partner {
  imageSrc: string
  name: string
  link?: string
}

export const partnersData: Partner[] = [
  { imageSrc: CeskaTelevie, name: 'Ceska Televize' },
  { imageSrc: EuFond, name: 'EU Fund' },
  { imageSrc: Bonidee, name: 'Bonidee Skateparks', link: 'https://www.bonidee.cz/?lang=en' },
  { imageSrc: UNDP, name: 'UNDP', link: 'https://www.undp.org/' },
  { imageSrc: CzechAid, name: 'Czech Aid', link: 'https://www.czechaid.cz/' },
  { imageSrc: Wonders, name: 'Wonders Around the World', link: 'https://wondersaroundtheworld.org' },
  { imageSrc: WeSkateMongu, name: 'We Skate Mongu', link: 'https://www.facebook.com/WeSkate.MG/' },
  { imageSrc: EswatiniSkate, name: 'Eswatini Skateboarding', link: 'https://instagram.com/eswatini_skateboarding?' },
  { imageSrc: Ambassadors, name: 'Ambassadors', link: 'https://www.ambassadors.eu' },
  { imageSrc: ASM, name: 'Associacao Skate de Mocambique', link: 'https://www.facebook.com/MOZAMBIQUESKATEBOARDING/' },
  { imageSrc: Hitit, name: 'Hit It Skateboarding', link: 'https://hititskateboarding.com' },
  { imageSrc: Jazz, name: 'Jazz Skate Co', link: 'https://www.jazzskateco.com' },
  { imageSrc: MaputoSkate, name: 'Maputo Skate', link: 'https://instagram.com/maputoskate' },
  { imageSrc: SufNDuf, name: 'Suf N Duf', link: 'https://instagram.com/sufnduf' },
  { imageSrc: UnicornStudio, name: 'UU Studio', link: 'https://uustudio.cz' },
  { imageSrc: Alpha, name: 'Alpha Appeal', link: 'https://www.alphaappeal.co.za/' },
  { imageSrc: OneLove, name: 'One Love Board Shop', link: 'https://oneloveboardshop.be/' },
  { imageSrc: SnowPanic, name: 'Snow Panic', link: 'https://www.snowpanic.cz/' },
  { imageSrc: Nief, name: 'Nief', link: 'https://www.nief.be/' },
  { imageSrc: Push, name: 'Push Hasselt', link: 'https://www.pushhasselt.be/' },
  { imageSrc: ZaletSi, name: 'Zalet Si' },
  { imageSrc: Metronome, name: 'Metronome' },
  { imageSrc: Skateroom, name: 'The Skateroom' },
]

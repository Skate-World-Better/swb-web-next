import CountryHero from '../../CountryHero'
import Sections from './Sections'

import heroImage from '../../../images/zambia-hero.jpg'

const ZambiaPage = () => (
  <>
    <CountryHero
      cityName="Mongu"
      countryName="Zambia"
      backgroundImage={heroImage}
    />
    <Sections/>
  </>
)

export default ZambiaPage

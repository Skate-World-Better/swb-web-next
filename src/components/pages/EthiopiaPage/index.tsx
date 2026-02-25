import CountryHero from '../../CountryHero'
import Sections from './Sections'

import heroImage from '../../../images/ethiopia-hero.jpg'

const EthiopiaPage = () => (
  <>
    <CountryHero
      cityName="Addis Abeba"
      countryName="Ethiopia"
      backgroundImage={heroImage}
    />
    <Sections/>
  </>
)

export default EthiopiaPage

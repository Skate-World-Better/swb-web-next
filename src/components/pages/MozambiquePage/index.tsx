import CountryHero from '../../CountryHero'
import Sections from './Sections/index.js'

import heroImage from '../../../images/kids-in-skatepark.jpg'

const MozambiquePage = () => (
  <>
    <CountryHero
      cityName="Maputo"
      countryName="Mozambique"
      backgroundImage={heroImage}
      backgroundPosition="bottom"
    />
    <Sections/>
  </>
)

export default MozambiquePage

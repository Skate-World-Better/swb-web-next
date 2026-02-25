import CountryHero from '../../CountryHero'
import Sections from './Sections'

import heroImage from '../../../images/lesotho-2.jpg'

const LesothoPage = () => (
  <>
    <CountryHero
      cityName="Maseru"
      countryName="Lesotho"
      backgroundImage={heroImage}
    />
    <Sections/>
  </>
)

export default LesothoPage

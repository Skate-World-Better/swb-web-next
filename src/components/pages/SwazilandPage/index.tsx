import CountryHero from '../../CountryHero'
import Sections from './Sections'

import heroImage from '../../../images/swaziland-trip.jpg'

const SwazilandPage = () => (
  <>
    <CountryHero
      cityName="Mbabane"
      countryName="Swaziland"
      backgroundImage={heroImage}
      backgroundPosition="center"
      lightText={false}
    />
    <Sections/>
  </>
)

export default SwazilandPage

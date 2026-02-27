import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import CountryPage from '../../components/pages/CountryPage'
import { swazilandData } from '@/data/countries/swaziland'
import SkateparkSection from '@/components/sections/SkateparkSection'
import { swazilandSkateparkData } from '@/data/skateparks/swaziland'

const Swaziland = () => (
  <Layout>
    <SEO title="Swaziland — Mbabane Skatepark" description="Learn about the SWB skatepark project in Mbabane, Swaziland." />
    <CountryPage data={swazilandData} skateparkSection={<SkateparkSection data={swazilandSkateparkData} />} />
  </Layout>
)

export default Swaziland

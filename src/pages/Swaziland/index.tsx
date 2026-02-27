import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import CountryPage from '../../components/pages/CountryPage'
import { swazilandData } from '@/data/countries/swaziland'
import SwazilandSkateparkSection from '@/components/pages/CountryPage/skateparks/SwazilandSkateparkSection'

const Swaziland = () => (
  <Layout>
    <SEO title="Swaziland — Mbabane Skatepark" description="Learn about the SWB skatepark project in Mbabane, Swaziland." />
    <CountryPage data={swazilandData} skateparkSection={<SwazilandSkateparkSection />} />
  </Layout>
)

export default Swaziland

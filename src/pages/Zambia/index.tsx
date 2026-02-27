import Layout from "../../components/Layout/index.js"
import SEO from "../../components/SEO"
import CountryPage from '../../components/pages/CountryPage'
import { zambiaData } from '@/data/countries/zambia'
import ZambiaSkateparkSection from '@/components/pages/CountryPage/skateparks/ZambiaSkateparkSection'

const Zambia = () => (
  <Layout>
    <SEO title="Zambia — Mongu Skatepark" description="Learn about the SWB skatepark project in Mongu, Zambia." />
    <CountryPage data={zambiaData} skateparkSection={<ZambiaSkateparkSection />} />
  </Layout>
)

export default Zambia

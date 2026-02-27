import Layout from "../../components/Layout/index.js"
import SEO from "../../components/SEO"
import CountryPage from '../../components/pages/CountryPage'
import { zambiaData } from '@/data/countries/zambia'
import SkateparkSection from '@/components/sections/SkateparkSection'
import { zambiaSkateparkData } from '@/data/skateparks/zambia'

const Zambia = () => (
  <Layout>
    <SEO title="Zambia — Mongu Skatepark" description="Learn about the SWB skatepark project in Mongu, Zambia." />
    <CountryPage data={zambiaData} skateparkSection={<SkateparkSection data={zambiaSkateparkData} />} />
  </Layout>
)

export default Zambia

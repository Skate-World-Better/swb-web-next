import Layout from "../../components/Layout/index.js"
import SEO from "../../components/SEO"
import CountryPage from '../../components/pages/CountryPage'
import { ethiopiaData } from '@/data/countries/ethiopia'
import EthiopiaSkateparkSection from '@/components/pages/CountryPage/skateparks/EthiopiaSkateparkSection'

const Ethiopia = () => (
  <Layout>
    <SEO title="Ethiopia — Addis Abeba Skatepark" description="Learn about the SWB skatepark project in Addis Abeba, Ethiopia." />
    <CountryPage data={ethiopiaData} skateparkSection={<EthiopiaSkateparkSection />} />
  </Layout>
)

export default Ethiopia

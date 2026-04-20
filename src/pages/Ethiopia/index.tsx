import Layout from "../../components/Layout/index.js"
import SEO from "../../components/SEO"
import CountryPage from '../../components/pages/CountryPage'
import { ethiopiaData } from '@/data/countries/ethiopia'
import SkateparkSection from '@/components/sections/SkateparkSection'
import { ethiopiaSkateparkData } from '@/data/skateparks/ethiopia'

const Ethiopia = () => (
  <Layout>
    <SEO title="Ethiopia — Addis Abeba Skatepark" description="Learn about the SWB skatepark project in Addis Abeba, Ethiopia." />
    <CountryPage data={ethiopiaData} skateparkSection={<SkateparkSection data={ethiopiaSkateparkData} />} />
  </Layout>
)

export default Ethiopia

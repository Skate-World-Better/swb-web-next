import Layout from "../../components/Layout/index.js"
import SEO from "../../components/SEO"
import CountryPage from '../../components/pages/CountryPage'
import { lesothoData } from '@/data/countries/lesotho'
import SkateparkSection from '@/components/sections/SkateparkSection'
import { lesothoSkateparkData } from '@/data/skateparks/lesotho'

const Lesotho = () => (
  <Layout>
    <SEO title="Lesotho — Maseru Skatepark" description="Learn about the SWB skatepark project in Maseru, Lesotho." />
    <CountryPage data={lesothoData} skateparkSection={<SkateparkSection data={lesothoSkateparkData} />} />
  </Layout>
)

export default Lesotho

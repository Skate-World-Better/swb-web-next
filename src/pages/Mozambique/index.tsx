import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import CountryPage from '../../components/pages/CountryPage'
import { mozambiqueData } from '@/data/countries/mozambique'
import MozambiqueSkateparkSection from '@/components/pages/CountryPage/skateparks/MozambiqueSkateparkSection'

const Index = () => (
  <Layout>
    <SEO title="Mozambique — Maputo Skatepark" description="Learn about the SWB skatepark project in Maputo, Mozambique." />
    <CountryPage data={mozambiqueData} skateparkSection={<MozambiqueSkateparkSection />} />
  </Layout>
)

export default Index

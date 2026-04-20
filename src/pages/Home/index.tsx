import Layout from "../../components/Layout"

import HomePage from '../../components/pages/HomePage'
import SEO from "../../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Skate World Better is a non-profit organization building skateparks across Africa, empowering communities through skateboarding." />
    <HomePage />
  </Layout>
)

export default IndexPage

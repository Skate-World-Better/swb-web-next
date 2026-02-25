import Layout from "../../components/Layout"

import HomePage from '../../components/pages/HomePage'
import SEO from "../../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <HomePage />
  </Layout>
)

export default IndexPage

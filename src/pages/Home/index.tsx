import Layout from "../../components/Layout"

import HomePage from '../../components/pages/HomePage'
import SEO from "../../components/seo.tsx";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <HomePage />
  </Layout>
)

export default IndexPage

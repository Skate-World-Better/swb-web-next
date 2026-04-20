/**
 * Example: Page entry component
 * Location: src/pages/{Country}/index.tsx
 *
 * This is the route entry point. It composes Layout + SEO + CountryPage.
 */

// --- Standard pattern (shared SkateparkSection) ---

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import CountryPage from '../../components/pages/CountryPage'
import { exampleData } from '@/data/countries/example'
import SkateparkSection from '@/components/sections/SkateparkSection'
import { exampleSkateparkData } from '@/data/skateparks/example'

const ExampleCountry = () => (
  <Layout>
    <SEO
      title="Country — City Skatepark"
      description="Learn about the SWB skatepark project in City, Country."
    />
    <CountryPage
      data={exampleData}
      skateparkSection={<SkateparkSection data={exampleSkateparkData} />}
    />
  </Layout>
)

export default ExampleCountry

// --- Custom pattern (dedicated skatepark component) ---
// Use this when the skatepark section has unique layout (multiple parks, video, etc.)
//
// import CustomSkateparkSection from '@/components/pages/CountryPage/skateparks/CustomSkateparkSection'
//
// <CountryPage
//   data={exampleData}
//   skateparkSection={<CustomSkateparkSection />}
// />

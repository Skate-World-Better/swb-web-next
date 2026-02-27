import type { ReactNode } from 'react'
import type { CountryPageData } from '@/data/countries/types'
import CountryHero from '../CountryHero'
import CountryAboutSection from '../sections/CountryAboutSection'
import CountryWhySection from '../sections/CountryWhySection'
import CountryGallerySection from '../sections/CountryGallerySection'

interface CountryPageProps {
  data: CountryPageData
  skateparkSection: ReactNode
}

const CountryPage = ({ data, skateparkSection }: CountryPageProps) => (
  <>
    <CountryHero {...data.hero} />
    <CountryAboutSection data={data.about} />
    <CountryWhySection data={data.why} />
    {skateparkSection}
    <CountryGallerySection data={data.gallery} />
  </>
)

export default CountryPage

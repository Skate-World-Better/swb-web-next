import type { CountryAboutData } from '@/data/countries/types'
import { renderRichText } from '@/lib/renderRichText'
import Section from '../ui/Section'
import Grid from '../ui/Grid'
import Image from '../ui/Image'
import ResultsGrid from '../ui/ResultsGrid'

interface CountryAboutSectionProps {
  data: CountryAboutData
}

const CountryAboutSection = ({ data }: CountryAboutSectionProps) => (
  <Section spacing="md" centered>
    <Grid cols={2} gap="md">
      <div>
        <h3 className="mb-12">{renderRichText(data.heading)}</h3>
        <p className="lg:mt-2 lg:mr-6 mb-12 md:mb-0">{renderRichText(data.description)}</p>
        {data.extraDescription && (
          <p className="lg:mt-2 lg:mr-6 mb-12 md:mb-0">{renderRichText(data.extraDescription)}</p>
        )}
      </div>
      <div>
        <Image src={data.image} />
        {data.imageCaption && (
          <p className="lg:mt-12 lg:mr-6 mb-12 md:mb-0">{data.imageCaption}</p>
        )}
      </div>
    </Grid>
    <ResultsGrid
      items={data.results}
      annotation={data.resultsAnnotation ?? 'Results'}
    />
  </Section>
)

export default CountryAboutSection

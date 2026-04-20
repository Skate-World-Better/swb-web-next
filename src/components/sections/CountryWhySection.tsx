import type { CountryWhyData } from '@/data/countries/types'
import { renderRichText } from '@/lib/renderRichText'
import Section from '../ui/Section'
import Grid from '../ui/Grid'

interface CountryWhySectionProps {
  data: CountryWhyData
}

const CountryWhySection = ({ data }: CountryWhySectionProps) => (
  <Section background="surface-contours" spacing="md">
    <Grid centered gap="md">
      <h3 className="mb-4 lg:mb-12 text-center">{renderRichText(data.heading)}</h3>
      <p className="text-center">{data.description}</p>
    </Grid>
  </Section>
)

export default CountryWhySection

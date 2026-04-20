import type { SkateparkData } from '@/data/skateparks/types'
import { renderRichText } from '@/lib/renderRichText'
import Section from '@/components/ui/Section'
import Grid from '@/components/ui/Grid'
import MediaCarousel from '@/components/Carousel'

interface SkateparkSectionProps {
  data: SkateparkData
}

const SkateparkSection = ({ data }: SkateparkSectionProps) => (
  <Section spacing="md" centered>
    <Grid centered gap="md">
      <h3 className="mb-12">{renderRichText(data.heading)}</h3>
      <MediaCarousel
        items={data.images.map((src) => ({ imageSrc: src }))}
        renderItem={(item) => (
          <div
            className="w-full rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.imageSrc as string})`,
              aspectRatio: '3/2',
            }}
            role="img"
          />
        )}
        config={{
          countLarge: 1,
          countDesktop: 1,
          countTablet: 1,
          countMobile: 1,
          hidePartial: true,
        }}
      />
      <p className="pt-12 item-title">{data.parkName}</p>
      <h6 className="lg:mr-12">{renderRichText(data.description)}</h6>
    </Grid>
  </Section>
)

export default SkateparkSection

import type { CountryGalleryData } from '@/data/countries/types'
import Section from '../ui/Section'
import Grid from '../ui/Grid'
import MediaCarousel from '../Carousel'
import ImageCard from '../Card'

interface CountryGallerySectionProps {
  data: CountryGalleryData
}

const CountryGallerySection = ({ data }: CountryGallerySectionProps) => (
  <Section spacing="md" centered>
    <Grid cols={2} gap="md">
      <div>
        <h6 className="pb-2 sub">{data.annotation ?? 'Photogallery'}</h6>
        <h3 className="mb-12">{data.heading}</h3>
        <p className="py-6 lg:mr-12">{data.description}</p>
      </div>
      <div>
        <MediaCarousel
          items={data.images}
          config={{
            countLarge: 2,
            countDesktop: 2,
          }}
          renderItem={(item) => (
            <ImageCard
              ratio={data.imageRatio ?? '2:3'}
              isExpandable={false}
              imageSrc={item.imageSrc as string}
              loading="eager"
            />
          )}
        />
      </div>
    </Grid>
  </Section>
)

export default CountryGallerySection

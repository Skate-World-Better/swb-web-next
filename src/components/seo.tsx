import { Helmet } from "react-helmet"

interface MetaTag {
  name?: string
  property?: string
  content: string
}

interface SEOProps {
  title: string
  description?: string
  lang?: string
  meta?: MetaTag[]
}

const SEO = ({ description = '', lang = 'en', meta = [], title }: SEOProps) => {
  const metaDescription = description || 'Non profit organization building skateparks in Africa'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Skate World Better`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ] satisfies MetaTag[]}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- SEO is all-caps by convention, not detected as PascalCase
export default SEO

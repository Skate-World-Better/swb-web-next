import { Helmet } from "react-helmet-async"

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

const SITE_URL = 'https://skateworldbetter.org'
const OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`

const SEO = ({ description = '', lang = 'en', meta = [], title }: SEOProps) => {
  const metaDescription = description || 'Non-profit organization building skateparks in Africa'

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
          content: `${title} | Skate World Better`,
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
          property: `og:site_name`,
          content: `Skate World Better`,
        },
        {
          property: `og:image`,
          content: OG_IMAGE,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: `${title} | Skate World Better`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: OG_IMAGE,
        },
        ...meta,
      ] satisfies MetaTag[]}
    />
  )
}

export default SEO

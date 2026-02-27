import styles from './index.module.scss'

import Section from '../../../../ui/Section'
import Highlight from '../../../../ui/Highlight'
import { partnersData } from '../../../../../data/partners'
import type { Partner } from '../../../../../data/partners'

const duplicatedLogos = [...partnersData, ...partnersData]

const LogoItem = ({ logo }: { logo: Partner }) => {
  const content = (
    <img
      src={logo.imageSrc}
      alt={`${logo.name} logo`}
      className={styles.logoImage}
      loading="lazy"
    />
  )

  if (logo.link) {
    return (
      <a
        href={logo.link}
        target="_blank"
        rel="noreferrer noopener"
        className={`flex-shrink-0 flex items-center justify-center ${styles.logoItem} ${styles.clickable}`}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center ${styles.logoItem}`}
    >
      {content}
    </div>
  )
}

const PartnersSection = () => (
  <Section spacing="sm">
    <div className="flex flex-wrap py-12 my-12">
      <div className="w-full">
        <h3 className="mb-2 lg:mb-12 px-2 lg:px-0 text-center">
          And we could not have done it <br /> without our <Highlight>partners</Highlight>
        </h3>
      </div>
      <div className="w-full">
        <div className={`relative ${styles.overflowHidden} mt-12`}>
          {/* Gradient overlays for blur fade effect */}
          <div className={styles.logoGradientLeft}/>
          <div className={styles.logoGradientRight}/>

          {/* Scrolling container */}
          <div className={`flex ${styles.logoScrollContainer}`}>
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={index} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default PartnersSection

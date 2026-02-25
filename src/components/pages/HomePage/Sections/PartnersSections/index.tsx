import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styles from './index.module.scss'

import BaseSection from '../../../../BaseSection'
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
        className={`flex-shrink-0 d-flex align-items-center justify-content-center ${styles.logoItem} ${styles.clickable}`}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className={`flex-shrink-0 d-flex align-items-center justify-content-center ${styles.logoItem}`}
    >
      {content}
    </div>
  )
}

const PartnersSection = () => (
  <BaseSection className="py-2 py-lg-4">
    <Row className="py-5 my-5">
      <Col xs={12}>
        <BaseSection.Header.Text className="mb-2 mb-lg-5 px-2 px-lg-0 text-center">
          And we could not have done it <br /> without our <span className="font-alt font-primary">partners</span>
        </BaseSection.Header.Text>
      </Col>
      <Col xs={12}>
        <div className={`position-relative ${styles.overflowHidden} mt-5`}>
          {/* Gradient overlays for blur fade effect */}
          <div className={styles.logoGradientLeft}/>
          <div className={styles.logoGradientRight}/>

          {/* Scrolling container */}
          <div className={`d-flex ${styles.logoScrollContainer}`}>
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={index} logo={logo} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  </BaseSection>
)

export default PartnersSection

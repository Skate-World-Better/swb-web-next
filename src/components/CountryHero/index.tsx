import type { CSSProperties } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import classNames from 'classnames'

import BaseSection from '../BaseSection'

import styles from './index.module.scss'

interface CountryHeroProps {
  cityName: string
  countryName: string
  backgroundImage: string
  backgroundPosition?: string
  lightText?: boolean
}

const CountryHero = ({
  cityName,
  countryName,
  backgroundImage,
  backgroundPosition = '50% 60%',
  lightText = true,
}: CountryHeroProps) => {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition,
  }

  return (
    <div className={styles.heroSection} style={heroStyle}>
      <BaseSection fluid className="h-100">
        <Row className="h-100 align-items-center">
          <Col className={classNames('text-center text-uppercase', { 'text-white': lightText })}>
            <BaseSection.Header.Annotation as="p">
              {cityName}
            </BaseSection.Header.Annotation>
            <BaseSection.Header.Base as="h1">
              {countryName}
            </BaseSection.Header.Base>
          </Col>
        </Row>
      </BaseSection>
    </div>
  )
}

export default CountryHero

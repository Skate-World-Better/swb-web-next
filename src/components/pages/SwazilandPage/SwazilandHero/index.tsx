import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../BaseSection'

import styles from './index.module.scss'

const SwazilandHero = () => (
  <BaseSection className={styles.heroSection} fluid>
    <Row className="h-100 align-items-center">
      <Col className="text-center text-uppercase">
        <BaseSection.Header.Annotation>
          Mbabane
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Base>
          Swaziland
        </BaseSection.Header.Base>
      </Col>
    </Row>
  </BaseSection>
)

export default SwazilandHero

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../BaseSection'

import styles from './index.module.scss'

const LesothoHero = () => (
  <BaseSection className={styles.heroSection} fluid>
    <Row className="h-100 align-items-center">
      <Col className="text-center text-uppercase text-white">
        <BaseSection.Header.Annotation>
          Maseru
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Base>
          Lesotho
        </BaseSection.Header.Base>
      </Col>
    </Row>
  </BaseSection>
)

export default LesothoHero

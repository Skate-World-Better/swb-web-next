import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../BaseSection'

import styles from './index.module.scss'

const MozambiqueHero = () => (
  <BaseSection className={styles.heroSection} fluid>
    <Row className="h-100 align-items-center">
      <Col className="text-center text-uppercase text-white">
        <BaseSection.Header.Annotation>
          Maputo
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Base>
          Mozambique
        </BaseSection.Header.Base>
      </Col>
    </Row>
  </BaseSection>
)

export default MozambiqueHero

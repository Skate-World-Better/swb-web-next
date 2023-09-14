import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../BaseSection'

import styles from './index.module.scss'

const EthiopiaHero = () => (
  <BaseSection className={styles.heroSection} fluid>
    <Row className="h-100 align-items-center">
      <Col className="text-center text-uppercase text-white">
        <BaseSection.Header.Annotation>
          Addis Abeba
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Base>
          Ethiopia
        </BaseSection.Header.Base>
      </Col>
    </Row>
  </BaseSection>
)

export default EthiopiaHero

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ChevronsDown, Heart, Mail } from 'react-feather'

import Button from '../../../Button'
import BaseSection from '../../../BaseSection'

import { ReactComponent as AfricaMap } from "../../../../images/africa.svg"

import styles from './index.module.scss'

const HomeHero = () => (
  <BaseSection className={styles.hero}>
    <Row className="min-vh-100 align-items-center">
      <Col sm={12} lg={6} className="text-center text-lg-left">
        <BaseSection.Header.Annotation className="mb-4 pt-5 pt-lg-0">
          Skate World Better
        </BaseSection.Header.Annotation>
        <BaseSection.Header.Base className="mb-4 pb-2 pb-md-0">
          We are a non-profit organization building <span className="font-alt font-primary">skateparks</span> around Africa
        </BaseSection.Header.Base>
        <BaseSection.Text className="mb-4 pb-5 pb-md-0">
          On a mission to support kids and young adults in Africa through
          skateboarding.
        </BaseSection.Text>
        <div className="d-flex flex-column flex-md-row justify-content-md-center justify-content-lg-start mt-lg-5">
          <Button
            link
            href="mailto:martin.skateworldbetter@gmail.com"
            complementary
            light
          >
            <Mail size={16} />
            <span className="pl-1 ml-1">Get in touch</span>
          </Button>
          <Button
            className="mt-2 mt-md-0 ml-md-2"
            link
            href="https://donorbox.org/skateparks-in-africa"
            target="_blank"
            primary
          >
            <Heart size={16} />
            <span className="pl-1 ml-1">Donate</span>
          </Button>
        </div>
      </Col>
      <Col sm={12} lg={6} className="d-none d-lg-block">
        <div style={{ position: 'relative' }}>
          {/*<img src={AfricaMap} style={{ width: '100%', height: 'auto', fill: '#f7b70d' }} alt={AfricaMap}/>*/}
          <AfricaMap style={{ width: '100%', height: 'auto', fill: '#f7b70d' }} />
        </div>
      </Col>
      <Col sm={12}>
        <BaseSection.Header.Annotation className="text-center">
          Do you know what 's going on?
        </BaseSection.Header.Annotation>
        <div className="d-flex justify-content-center">
          <ChevronsDown />
        </div>
      </Col>
    </Row>
  </BaseSection>
)

export default HomeHero

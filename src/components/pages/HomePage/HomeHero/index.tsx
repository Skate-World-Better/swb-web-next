import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {ShoppingBag, Mail} from 'react-feather'
import {Link} from "react-router-dom";
import styles from './index.module.scss'
import Button from '../../../Button'
import BaseSection from '../../../BaseSection'

import {ReactComponent as AfricaMap} from "../../../../images/africa.svg"

const HomeHero = () => (
  <section className="contours bg-whitend">
    <BaseSection className={styles.hero}>
      <Row className="vh-100 align-items-center" style={{ maxHeight: '1440px', marginTop: '-10%' }}>
        <Col sm={12} lg={6} className="text-center text-lg-left">
          <BaseSection.Header.Annotation className="mb-4 pt-5 pt-lg-0">
            Skate World Better
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Base className="mb-4 pb-2 pb-md-0">
            We are a non-profit organization building <span className="font-alt font-primary">skateparks</span> around Africa
          </BaseSection.Header.Base>
          <BaseSection.Text className="mb-4 pb-5 pb-md-0">
            On a mission to support kids and young adults in Africa through
            skateboarding.<br/>
            In close partnership with <Link to="https://www.bonidee.cz/?lang=en">Bonidee Skateparks</Link>.
          </BaseSection.Text>
          <div className="d-flex flex-column flex-md-row justify-content-md-center justify-content-lg-start mt-lg-5">
            <Button
              link
              href="mailto:martin@skateworldbetter.com"
              complementary
              light
            >
              <Mail size={16} />
              <span className="pl-1 ml-1">Get in touch</span>
            </Button>
            <Button
              link
              href="https://www.freshlabels.cz/en/skate-world-better/"
              primary
              className="ml-md-3 mt-2 mt-md-0"
            >
              <ShoppingBag size={16} />
              <span className="pl-1 ml-1">Shop here</span>
            </Button>
          </div>
        </Col>
        <Col sm={12} lg={6} className="d-none d-lg-block">
          <div style={{ position: 'relative' }}>
            {/*<img src={AfricaMap} style={{ width: '100%', height: 'auto', fill: '#f7b70d' }} alt={AfricaMap}/>*/}
            <AfricaMap style={{ width: '100%', height: 'auto', fill: '#f7b70d' }} />
          </div>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default HomeHero

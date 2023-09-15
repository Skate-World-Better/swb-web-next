import classNames from 'classnames'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Mail } from 'react-feather'
import { Facebook } from 'react-feather'
import { Instagram } from 'react-feather'
import { Youtube } from 'react-feather'

import Button from '../Button'
import BaseSection from '../BaseSection'

import styles from './index.module.scss'
import {Link} from "react-router-dom";

const Footer = () => (
  <footer className={styles.footer}>
    <BaseSection className="px-4 px-lg-0">
      <Row>
        <Col sm={12} lg={4} className="my-4">
          <BaseSection.Text className="pb-3 menu-title">
            Skate World Better
          </BaseSection.Text>
          <BaseSection.Header.Annotation>
            We are a non-profit organization building skateparks around Africa.
          </BaseSection.Header.Annotation>
          <Button
            className="mt-5"
            link
            href="mailto:martin.skateworldbetter@gmail.com"
            accent
          >
            <Mail size={16} />
            {' '}
            <span className="pl-1 ml-1">Get in touch</span>
          </Button>
        </Col>
        <Col sm={6} lg={4} className="my-4">
          <BaseSection.Text className="pb-3 menu-title">Sitemap</BaseSection.Text>
          <BaseSection.Header.Annotation>
            <Link to="/">Home</Link>
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Annotation>
            <Link to="https://skateworldbetter.shop/">Shop</Link>
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Annotation>
            <Link to="/mozambique">Mozambique</Link>
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Annotation>
            <Link to="/zambia">Zambia</Link>
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Annotation>
            <Link to="/swaziland">Swaziland</Link>
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Annotation>
            <Link to="/ethiopia">Ethiopia</Link>
          </BaseSection.Header.Annotation>
        </Col>
        <Col sm={6} lg={4} className="my-4">
          <BaseSection.Text className="pb-3 menu-title">Follow us</BaseSection.Text>
          <a
            href="https://www.facebook.com/skateworldbetter"
            target="_blank"
            rel="norefferer noopener"
            className="d-flex align-items-center mb-2 social-link"
          >
            <Facebook size={16} />
            <BaseSection.Header.Annotation className="pl-1 mb-0 ml-1">
              Facebook
            </BaseSection.Header.Annotation>
          </a>
          <a
            href="https://www.instagram.com/skateworldbetter/"
            target="_blank"
            rel="norefferer noopener"
            className="d-flex align-items-center mb-2 social-link"
          >
            <Instagram size={16} />
            <BaseSection.Header.Annotation className="pl-1 mb-0 ml-1">
              Instagram
            </BaseSection.Header.Annotation>
          </a>
          <a
            href="https://www.youtube.com/channel/UC3_R6isvwmD0XycwBKTjAfg"
            target="_blank"
            rel="norefferer noopener"
            className="d-flex align-items-center mb-2 social-link"
          >
            <Youtube size={16} />
            <BaseSection.Header.Annotation className="pl-1 mb-0 ml-1">
              Youtube
            </BaseSection.Header.Annotation>
          </a>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={12}>
          <BaseSection.Text className={classNames('text-center', styles.copyright)}>© {new Date().getFullYear()} Skate World Better</BaseSection.Text>
          {/* Uncomment when applicable */}

          {/*<BaseSection.Text className={classNames('text-center', styles.textSmall)}>*/}
          {/*  When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.*/}
          {/*</BaseSection.Text>*/}
        </Col>
      </Row>
    </BaseSection>
  </footer>
)

export default Footer

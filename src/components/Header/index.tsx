import classNames from 'classnames'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from "react-bootstrap/Image"
import { Heart, ShoppingCart, Menu } from 'react-feather'

import Button from '../Button'
import Logo from '../../images/swb_logo_new_white.svg'

import styles from './index.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Navbar expand="lg">
      <Navbar.Brand href="/" className="d-lg-none">
        <Image className={styles.logoImage} src={Logo} fluid />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <Menu className={styles.burger} size={32} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 align-items-center">
          <div className="d-flex flex-column flex-lg-row mx-lg-5 align-items-center">
            <Nav.Link href="/" className="d-none d-lg-block pl-3 pr-5">
              <Image className={styles.logoImage} src={Logo} fluid />
            </Nav.Link>
            <Nav.Link href="/" className={classNames('px-lg-4', styles.navLink)}>
              Home
            </Nav.Link>
            <Nav.Link href="/mozambique" className={classNames('px-lg-4', styles.navLink)}>
              Mozambique
            </Nav.Link>
            <Nav.Link href="/zambia" className={classNames('px-lg-4', styles.navLink)}>
              Zambia
            </Nav.Link>
            <Nav.Link href="/swaziland" className={classNames('px-lg-4', styles.navLink)}>
              Swaziland
            </Nav.Link>
            <Nav.Link href="/ethiopia" className={classNames('px-lg-4', styles.navLink)}>
              Ethiopia
            </Nav.Link>
          </div>
          <div className="d-flex pt-3 pb-4 p-lg-0 flex-column d-lg-block ml-lg-auto">
            <Button
              className="mb-2 mb-lg-0 mx-3"
              link
              href="https://skateworldbetter.shop"
              complementary
              light
            >
              <ShoppingCart size={16} />
              {' '}
              <span className="pl-1">Shop</span>
            </Button>
            <Button
              className="mx-3"
              link
              href="https://donorbox.org/skateparks-in-africa"
              target="_blank"
              primary
            >
              <Heart size={16} />
              {' '}
              <span className="pl-1">Donate</span>
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header

import classNames from 'classnames'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from "react-bootstrap/Image"
import {Menu} from 'react-feather'
import Logo from '../../images/swb_logos/Kolo_SWB-03.svg'

import styles from './index.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Navbar expand="lg">
      <Navbar.Brand href="/" className="d-lg-none">
        <Image className={styles.logoImage} src={Logo} fluid alt="Skate World Better logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <Menu className={styles.burger} size={32} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 align-items-center">
          <div className="d-flex flex-column flex-lg-row mx-lg-5 align-items-center">
            <Nav.Link href="/" className="d-none d-lg-block pl-3 pr-5">
              <Image className={styles.logoImage} src={Logo} fluid alt="Skate World Better logo" />
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
            <Nav.Link href="/lesotho" className={classNames('px-lg-4', styles.navLink)}>
              Lesotho
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header

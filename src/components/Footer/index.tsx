import { Mail } from 'react-feather'
import { Facebook } from 'react-feather'
import { Instagram } from 'react-feather'
import { Youtube } from 'react-feather'

import Button from '../Button'

import {Link} from "react-router-dom";
import Logo from '../../images/swb_logos/Kolo_SWB-02.svg'

const Footer = () => (
  <footer className="pt-[90px] pb-[25px] bg-surface-alt contours footer [&_h6]:text-sm [&_h6]:leading-7 [&_a]:text-sm">
    <div className="mx-auto w-full max-w-[1140px] px-4 lg:px-0">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 my-6">
          <p className="pb-4 menu-title">
            <img className="w-[60px] max-w-full h-auto" src={Logo} alt="Skate World Better logo" />
          </p>
          <h6>We are a non-profit organization building skateparks around Africa.</h6>
          <Button
            className="mt-12"
            link
            href="mailto:martin.skateworldbetter@gmail.com"
            accent
          >
            <Mail size={16} />
            {' '}
            <span className="pl-1 ml-1">Get in touch</span>
          </Button>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 my-6">
          <p className="pb-4 menu-title">Sitemap</p>
          <h6><Link to="/">Home</Link></h6>
          <h6><a href="https://skateworldbetter.shop/" target="_blank" rel="noreferrer noopener">Shop</a></h6>
          <h6><Link to="/mozambique">Mozambique</Link></h6>
          <h6><Link to="/zambia">Zambia</Link></h6>
          <h6><Link to="/swaziland">Swaziland</Link></h6>
          <h6><Link to="/ethiopia">Ethiopia</Link></h6>
          <h6><Link to="/lesotho">Lesotho</Link></h6>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 my-6">
          <p className="pb-4 menu-title">Follow us</p>
          <a
            href="https://www.facebook.com/skateworldbetter"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center mb-2 social-link"
          >
            <Facebook size={16} />
            <h6 className="pl-1 mb-0 ml-1">Facebook</h6>
          </a>
          <a
            href="https://www.instagram.com/skateworldbetter/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center mb-2 social-link"
          >
            <Instagram size={16} />
            <h6 className="pl-1 mb-0 ml-1">Instagram</h6>
          </a>
          <a
            href="https://www.youtube.com/channel/UC3_R6isvwmD0XycwBKTjAfg"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center mb-2 social-link"
          >
            <Youtube size={16} />
            <h6 className="pl-1 mb-0 ml-1">Youtube</h6>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap mt-12">
        <div className="w-full">
          <p className="text-center text-xs">&copy; {new Date().getFullYear()} Skate World Better</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

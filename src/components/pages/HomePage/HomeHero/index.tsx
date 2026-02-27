import {ShoppingBag, Mail} from 'react-feather'
import Button from '../../../Button'
import Highlight from '../../../ui/Highlight'

import AfricaMap from "../../../../images/africa.svg?react"

const HomeHero = () => (
  <section className="contours bg-whitend">
    <div className="mx-auto w-full max-w-[1140px] px-4 [&_h6]:text-lg [&_h6]:font-normal [&_p]:text-base">
      <div className="flex flex-wrap h-screen items-center" style={{ maxHeight: '1440px', marginTop: '-5%' }}>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h6 className="mb-6 pt-12 lg:pt-0">Skate World Better</h6>
          <h2 className="mb-6 pb-2 md:pb-0">
            We are a non-profit organization building <Highlight>skateparks</Highlight> around Africa
          </h2>
          <p className="mb-6 pb-12 md:pb-0">
            On a mission to support kids and young adults in Africa through
            skateboarding.<br/>
            In close partnership with <a href="https://www.bonidee.cz/?lang=en" target="_blank" rel="noreferrer noopener">Bonidee Skateparks</a>.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start lg:mt-12">
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
              className="md:ml-4 mt-2 md:mt-0"
            >
              <ShoppingBag size={16} />
              <span className="pl-1 ml-1">Shop here</span>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:block">
          <div style={{ position: 'relative' }}>
            <AfricaMap style={{ width: '100%', height: 'auto', fill: '#f7b70d' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero

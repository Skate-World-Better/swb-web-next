import Button from '../../../../Button'
import Section from '../../../../ui/Section'
import Highlight from '../../../../ui/Highlight'
import { Brushed } from '../../../../Texts'

import AfricaMap from '../../../../../images/africa-green.svg?react'

const FactsSection = () => (
  <Section background="surface" spacing="md">
    <div className="flex flex-wrap my-6 py-6 lg:my-12 lg:py-12">
      <div className="w-full lg:w-5/12 mb-6 lg:mb-0 lg:pr-12">
        <Brushed isBlock brushStyle="oneFadedPlus" position={{ left: '-15%', width: '90%', top: '-15%', height: '130%' }}>
          <h2 className="font-alt">960,000,000</h2>
          <p>People in Africa are under 25 years</p>
        </Brushed>
        <AfricaMap className="pr-12 mt-4" style={{ width: '100%', height: 'auto', fill: '#7FB432' }} />
      </div>
      <div className="w-full lg:w-1/2 lg:ml-[8.33%] mb-6 lg:mb-0 lg:pl-12">
        <h6 className="mb-6 sub">What we do</h6>
        <h3 className="mb-12">
          As <Highlight>skateboarders</Highlight> we do what we know best
        </h3>
        <p className="py-2">
          We build skateparks, we bring boards, we come up with educative
          activities and we share good times!
        </p>
        <h6 className="pb-2">
          As a bunch of skaters we know how this sport is powerful in creating a
          community. We believe that this aspect can be the key to sustainable
          help. Especially regarding younger generations.
        </h6>
        <Button className="mt-6" link accent href="https://www.ceskatelevize.cz/porady/15126029820-skejty-a-lopaty/">
          See what we did
        </Button>
      </div>
    </div>
  </Section>
)

export default FactsSection

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from '../../../../Button'
import BaseSection from '../../../../BaseSection'
import { Brushed } from '../../../../Texts'

import { ReactComponent as AfricaMap } from '../../../../../images/africa-green.svg'

const FactsSection = () => (
  <section className="bg-darkened">
    <BaseSection className="py-2 py-lg-4">
      <Row className="my-5 py-5">
        <Col xs={12} lg={5} className="mt-5 mt-lg-0 pt-5 p-lg-0">
          <Brushed isBlock brushStyle="oneFadedPlus" position={{ left: '-15%', width: '90%', top: '-15%', height: '130%' }}>
            <BaseSection.Header.Base className="font-alt">960,000,000</BaseSection.Header.Base>
            <BaseSection.Text>People in Africa are under 25 years</BaseSection.Text>
          </Brushed>
          <AfricaMap className="pr-5 mt-3" style={{ width: '100%', height: 'auto', fill: '#7FB432' }} />
        </Col>
        <Col xs={12} lg={5} className="text-center text-lg-left offset-lg-2 ">
          <BaseSection.Header.Annotation className="mb-4 sub">
            What we do
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Text className="mb-5">
            As <span className="font-alt font-primary">skateboarders</span> we do what we know best
          </BaseSection.Header.Text>
          <BaseSection.Text className="py-2">
            We build skateparks, we bring boards, we come up with educative
            activities and we share good times!
          </BaseSection.Text>
          <BaseSection.Header.Annotation className="pb-2">
            As a bunch of skaters we know how this sport is powerful in creating a
            community. We believe that this aspect can be the key to sustainable
            help. Especially regarding younger generations.
          </BaseSection.Header.Annotation>
          <Button className="mt-4" link accent href="https://www.ceskatelevize.cz/porady/15126029820-skejty-a-lopaty/">
            See what we did
          </Button>
        </Col>
      </Row>
    </BaseSection>
  </section>
)

export default FactsSection

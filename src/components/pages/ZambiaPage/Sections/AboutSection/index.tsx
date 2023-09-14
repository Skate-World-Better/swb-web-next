import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import BaseSection from '../../../../BaseSection'

import KidsZambia from '../../../../../images/kids_zambia.jpg'

import { ReactComponent as SkateparkIcon } from "../../../../../images/icons/skatepark-icon.svg"
import { ReactComponent as BbqIcon } from "../../../../../images/icons/bbq-icon.svg"
import { ReactComponent as HealthIcon } from "../../../../../images/icons/hiv-icon.svg"

const AboutSection = () => (
  <BaseSection className="pt-4 mb-lg-5 py-lg-5">
    <Row className="mb-4 text-center text-lg-left">
      <Col xs={12} lg={6}>
        <BaseSection.Header.Text className="mb-5">
          What did we do in <span className="font-alt font-primary">Mongu?</span>
        </BaseSection.Header.Text>
        <BaseSection.Text className="mt-lg-2 mr-lg-4 mb-5 mb-md-0">
          For some Mongu may be a small city in the western province of Zambia but for
          skateboarding, Mongu is a great opportunity. With a great historical importance for
          the region, Mongu lies right on the edge of the Liuwa plains famous for its
          seasonal animal migration. The city may be far less populous and glamorous
          than the capital Lusaka but it still entertains an incredibly strong and united
          community of young people. As soon as we got in touch with the guys from We
          Skate Mongu, we just knew this is the place where we want to go next.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={6}>
        <Image src={KidsZambia} fluid rounded />
      </Col>
    </Row>
    <Row className="my-2 py-2 my-lg-5 py-lg-5 text-center text-lg-left">
      <Col xs={12}>
        <BaseSection.Header.Annotation className="d-none d-md-block sub">
          Results
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <SkateparkIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          Public skatepark
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          We bought a 1200m2 land plot in the south of
          Mongu. We built a public skatepark and an adjacent cabin right next to it,
          connected to water and electricity. The kids have a place to hang out, relax,
          skate, dance and attend lectures in the prepared program.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <BbqIcon />
        <BaseSection.Header.Underlined className="py-3 pt-lg-5">
          Public hub
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          Is the skatepark for skaters only? Of course not! While
          skateboarding is an important tool for us and our projects, we make sure that the
          space can be used for multiple purposes. After all, We Skate Mongu is a
          community of skaters, dancers, artists and people of all interests. The place is
          open to screenings, exhibitions, talks and other events.
        </BaseSection.Header.Annotation>
      </Col>
      <Col xs={12} lg={4} className="my-4">
        <HealthIcon />
        <BaseSection.Header.Underlined className="pb-2 pt-3 py-lg-3 pt-lg-5">
          CSO's
        </BaseSection.Header.Underlined>
        <BaseSection.Header.Annotation className="mr-lg-5 px-4 p-lg-0">
          We connected with a bunch of local CSOs for a greater impact.
          Any CSO can use the entire space as a platform for seminars, workshops and
          other activities.
        </BaseSection.Header.Annotation>
      </Col>
    </Row>
  </BaseSection>
)

export default AboutSection

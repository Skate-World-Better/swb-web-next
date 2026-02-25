import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Tv } from 'react-feather'

import BaseSection from '../../../../BaseSection'
import MediaCarousel from '../../../../Carousel'
import ImageCard from '../../../../Card'
import Button from '../../../../Button'
import { momentsData } from '../../../../../data/moments'

import styles from './index.module.scss'

const MomentsSection = () => (
  <>
    <BaseSection className="py-4 py-lg-5">
      <Row className="my-4 py-4 my-lg-5 py-lg-5 align-items-center text-center text-lg-left">
        <Col xs={12} lg={6} className="mb-4 mb-lg-0 pr-lg-5">
          <BaseSection.Header.Annotation className="mb-4 sub">
            Stories
          </BaseSection.Header.Annotation>
          <BaseSection.Header.Text className="mb-5">
            Some cool <span className="font-alt font-primary">moments</span>
          </BaseSection.Header.Text>
          <BaseSection.Text className="py-4 mr-lg-5">
            Doing this, it is not just great times spent in Africa, but also hours
            and hours of planning and meetings. These are some great moments and
            stories that we experience on the way to all of this.
          </BaseSection.Text>
        </Col>
        <Col xs={12} lg={6} className="mb-4 mb-lg-0 pl-lg-5">
          <MediaCarousel
            items={momentsData}
            config={{
              countLarge: 2,
              countDesktop: 2,
            }}
            renderItem={(data) => (
              <ImageCard
                ratio="1:2"
                isExpandable={false}
                imageSrc={data.imageSrc as string}
                loading="eager"
              />
            )}
          />
        </Col>
      </Row>
      <Row className="pt-4 py-lg-4 mt-lg-5">
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="mb-4 mb-lg-0 pr-lg-5">
          <div className={styles.videoWrapper}>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/504058820"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="mb-4 mb-lg-0 pl-lg-5">
          <BaseSection.Header.Text className="mb-5">
            When we go on <span className="font-alt font-primary">projects</span>
          </BaseSection.Header.Text>
          <BaseSection.Text className="py-4">
            Building skateparks across Africa is more than construction—it's about creating spaces where communities thrive. Each project brings together local youth, volunteers, and partners to build something lasting. These are the stories of transformation, one skatepark at a time.
          </BaseSection.Text>
        </Col>
      </Row>
    </BaseSection>
    <section className="bg-darkened contours">
      <BaseSection className="py-4 py-lg-5">
        <Row className="my-4 py-4 my-lg-5 py-lg-5">
          <Col sm={12} lg={{span: 8, offset: 2}}>
            <BaseSection.Header.Text className="text-center"><span className="font-alt font-primary">SKEJTY A LOPATY</span></BaseSection.Header.Text>
            <BaseSection.Text className="mt-2 text-center">
              Česká Televize got excited about our work and supported us in developing a five episode documentary from the project that took place in Zambia.
            </BaseSection.Text>
            <BaseSection.Text className="text-center mb-0">
              <Button
                className="mt-2"
                link
                complementary
                href="https://www.ceskatelevize.cz/porady/15126029820-skejty-a-lopaty/"
              >
                <Tv size={16} />
                {' '}
                <span className="pl-1 ml-1">Have a look!</span>
              </Button>
            </BaseSection.Text>
          </Col>
        </Row>
      </BaseSection>
    </section>
  </>
)

export default MomentsSection

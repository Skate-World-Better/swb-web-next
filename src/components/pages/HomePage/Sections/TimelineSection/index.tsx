import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImgIcon from "../../../../ImgIcon";
import BaseSection from '../../../../BaseSection'
import { BrushedCorners } from '../../../../Texts'

import EstablishmentIcon from '../../../../../images/icons/icon_swb_establishment.png'
import InPrague from '../../../../../images/icons/icon_in_prague.png'
import BonideeCoop from '../../../../../images/icons/icon_swb_bonidee_coop.png'
import NewPlans from '../../../../../images/icons/icon_new_plans.png'

const TimelineSection = () => (
  <BaseSection className="py-2 py-lg-4">
    <Row className="py-5 my-5">
      <Col xs={12} lg={10} className="offset-lg-1 text-center">
        <BaseSection.Header.Text className="font-alt">
          <BrushedCorners>
            Founded in 2018, our first build took place in 2019. We relocated from
            Copenhagen to Prague pushing towards new and exciting projects.
          </BrushedCorners>
        </BaseSection.Header.Text>
      </Col>
    </Row>
    <Row className="pt-2 pb-5 py-lg-5 text-center text-lg-left">
      <Col xs={12} lg={3} className="my-3">
        <ImgIcon src={EstablishmentIcon} size='large' alt="establishment of SWB" />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          Establishment of SWB
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We founded SWB in Copenhagen as a university project in 2019. After the successful completion of the first two projects in Mozambique, we relocated to Prague.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={3} className="my-3">
        <ImgIcon src={InPrague} size='large' alt="establishment of SWB" />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          In Prague
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We decided to continue with another mission. We linked-up with Johny Kalenga in Zambia where we delivered a project in 2021.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={3} className="my-3">
        <ImgIcon src={BonideeCoop} size='large' alt="establishment of SWB" />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          Bonidee Skateparks
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We received a major support on our project through the commercial activity of Bonidee Skateparks. In 2023 we delivered a project in Swaziland and Ethiopia.
        </BaseSection.Text>
      </Col>
      <Col xs={12} lg={3} className="my-3">
        <ImgIcon src={NewPlans} size='large' alt="establishment of SWB" />
        <BaseSection.Header.Underlined className="mt-3 mt-lg-5">
          New plans
        </BaseSection.Header.Underlined>
        <BaseSection.Text className="my-3 mr-lg-3 pb-5 px-4 p-lg-0">
          We have a new project in Lesotho and a couple more that are coming.
        </BaseSection.Text>
      </Col>
    </Row>
  </BaseSection>
)

export default TimelineSection

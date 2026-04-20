import ImgIcon from "../../../../ImgIcon";
import Section from '../../../../ui/Section'
import { BrushedCorners } from '../../../../Texts'

import EstablishmentIcon from '../../../../../images/icons/icon_swb_establishment.png'
import InPrague from '../../../../../images/icons/icon_in_prague.png'
import BonideeCoop from '../../../../../images/icons/icon_swb_bonidee_coop.png'
import NewPlans from '../../../../../images/icons/icon_new_plans.png'

const TimelineSection = () => (
  <Section spacing="sm">
    <div className="flex flex-wrap py-12 my-12">
      <div className="w-full lg:w-10/12 lg:ml-[8.33%] text-center">
        <h3 className="font-alt">
          <BrushedCorners>
            Founded in 2018, our first build took place in 2019. We relocated from
            Copenhagen to Prague pushing towards new and exciting projects.
          </BrushedCorners>
        </h3>
      </div>
    </div>
    <div className="flex flex-wrap pt-2 pb-12 lg:py-12 text-center lg:text-left">
      <div className="w-full lg:w-1/4 my-4">
        <ImgIcon src={EstablishmentIcon} size='large' alt="establishment of SWB" />
        <h5 className="mt-4 lg:mt-12">Establishment of SWB</h5>
        <p className="my-4 lg:mr-3 pb-12 px-4 lg:p-0">
          We founded SWB in Copenhagen as a university project in 2019. After the successful completion of the first two projects in Mozambique, we relocated to Prague.
        </p>
      </div>
      <div className="w-full lg:w-1/4 my-4">
        <ImgIcon src={InPrague} size='large' alt="establishment of SWB" />
        <h5 className="mt-4 lg:mt-12">In Prague</h5>
        <p className="my-4 lg:mr-3 pb-12 px-4 lg:p-0">
          We decided to continue with another mission. We linked-up with Johny Kalenga in Zambia where we delivered a project in 2021.
        </p>
      </div>
      <div className="w-full lg:w-1/4 my-4">
        <ImgIcon src={BonideeCoop} size='large' alt="establishment of SWB" />
        <h5 className="mt-4 lg:mt-12">Bonidee Skateparks</h5>
        <p className="my-4 lg:mr-3 pb-12 px-4 lg:p-0">
          We received a major support on our project through the commercial activity of Bonidee Skateparks. In 2023 we delivered a project in Swaziland and Ethiopia.
        </p>
      </div>
      <div className="w-full lg:w-1/4 my-4">
        <ImgIcon src={NewPlans} size='large' alt="establishment of SWB" />
        <h5 className="mt-4 lg:mt-12">New plans</h5>
        <p className="my-4 lg:mr-3 pb-12 px-4 lg:p-0">
          We have a new project in Lesotho and a couple more that are coming.
        </p>
      </div>
    </div>
  </Section>
)

export default TimelineSection

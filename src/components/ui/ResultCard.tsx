import type { ReactNode } from 'react'
import ImgIcon from '../ImgIcon'

export interface ResultCardProps {
  icon: string
  title: string
  description: ReactNode
}

const ResultCard = ({ icon, title, description }: ResultCardProps) => (
  <div className="my-4">
    <ImgIcon src={icon} size="large" />
    <h5 className="pb-2 pt-4 lg:py-4 lg:pt-12">{title}</h5>
    <p className="lg:mr-12 px-4 lg:p-0">{description}</p>
  </div>
)

export default ResultCard

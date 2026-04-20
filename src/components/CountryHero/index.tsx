import type { CSSProperties } from 'react'
import { cn } from '@/lib/cn'

interface CountryHeroProps {
  cityName: string
  countryName: string
  backgroundImage: string
  backgroundPosition?: string
  lightText?: boolean
}

const CountryHero = ({
  cityName,
  countryName,
  backgroundImage,
  backgroundPosition = '50% 60%',
  lightText = true,
}: CountryHeroProps) => {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition,
  }

  return (
    <div className="relative bg-no-repeat bg-cover h-[30vh] min-[425px]:h-[50vh]" style={heroStyle}>
      <div className="w-full px-4 h-full">
        <div className="flex h-full items-center">
          <div className={cn('w-full text-center uppercase', lightText && 'text-white')}>
            <p>{cityName}</p>
            <h1>{countryName}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryHero

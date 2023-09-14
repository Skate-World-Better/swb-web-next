import { useEffect } from 'react'

import HomeHero from './HomeHero'
import Sections from './Sections'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return <>
    <HomeHero/>
    <Sections/>
  </>
}

export default HomePage

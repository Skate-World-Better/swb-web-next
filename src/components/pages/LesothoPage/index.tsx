import { useEffect } from 'react'

import LesothoHero from './LesothoHero'
import Sections from './Sections'

const LesothoPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return <>
    <LesothoHero/>
    <Sections/>
  </>
}

export default LesothoPage

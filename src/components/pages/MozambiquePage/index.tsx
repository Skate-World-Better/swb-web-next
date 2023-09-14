import { useEffect } from 'react'

import MozambiqueHero from './MozambiqueHero/index.js'
import Sections from './Sections/index.js'

const MozambiquePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return <>
    <MozambiqueHero/>
    <Sections/>
  </>
}

export default MozambiquePage

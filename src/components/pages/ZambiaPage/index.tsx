import React, { useEffect } from 'react'

import ZambiaHero from './ZambiaHero'
import Sections from './Sections'

const ZambiaPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return <>
    <ZambiaHero/>
    <Sections/>
  </>
}

export default ZambiaPage

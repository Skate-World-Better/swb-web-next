import {useEffect} from 'react'

import SwazilandHero from './SwazilandHero'
import Sections from './Sections'

const SwazilandPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return <>
    <SwazilandHero/>
    <Sections/>
  </>
}

export default SwazilandPage

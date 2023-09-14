import { useEffect } from 'react'

import EthiopiaHero from './EthiopiaHero'
import Sections from './Sections'

const EthiopiaPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return <>
    <EthiopiaHero/>
    <Sections/>
  </>
}

export default EthiopiaPage

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top of the page on every route change.
 * Replaces per-page `useEffect(() => window.scrollTo({ top: 0 }), [])` hacks.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return null
}

export default ScrollToTop

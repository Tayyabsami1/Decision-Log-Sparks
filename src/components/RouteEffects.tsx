import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title =
      pathname === '/demo'
        ? 'Demo workspace — Decision Log'
        : 'Decision Log — Keep the why. Move forward.'
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

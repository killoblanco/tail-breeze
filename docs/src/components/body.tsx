import { createElement, useEffect, type FC, type PropsWithChildren } from 'react'
import { useDarkModeStore } from '../layouts/scaffold/store/dark-mode'

export const Body: FC<PropsWithChildren> = ({ children }) => {
  const { mode, setMode } = useDarkModeStore()

  useEffect(() => {
    const preffersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (preffersDarkMode) setMode('dark')
  }, [])

  return createElement('body', { 'data-theme': mode }, children)
}

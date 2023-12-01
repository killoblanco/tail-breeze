import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface DarkModeStoreI {
  mode: 'dark' | 'light'
  setMode: (mode: 'dark' | 'light') => void
}

export const useDarkModeStore = create(
  persist<DarkModeStoreI>(
    (set) => ({
      mode: 'light',
      setMode: (mode) => set({ mode }),
    }),
    {
      name: 'dark-mode',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

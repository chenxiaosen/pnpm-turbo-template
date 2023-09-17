import { useDarkModeStore } from '../stores/DarkModeStore'

export function useDarkMode() {
  return useDarkModeStore().darkMode
}

export function useToggleDarkMode() {
  useDarkModeStore().toggleDarkMode()
}

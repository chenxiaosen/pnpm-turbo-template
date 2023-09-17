import { defineStore } from 'pinia'

const darkModeKey = '__dark_mode__'
const isDarkMode = () => {
  const darkMode = window.localStorage.getItem(darkModeKey)
  if (darkMode) {
    return darkMode === 'true'
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

export const useDarkModeStore = defineStore('DarkModeStore', {
  state: () => ({
    darkMode: isDarkMode(),
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
        window.localStorage.setItem(darkModeKey, 'true')
      } else {
        document.documentElement.classList.remove('dark')
        window.localStorage.setItem(darkModeKey, 'false')
      }
    },
  },
})

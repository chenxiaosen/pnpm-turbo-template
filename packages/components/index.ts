import * as components from './ui/index'
export * from './ui/index'
import { App } from 'vue'
import 'tailwindcss/tailwind.css'
export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c])
    }
  },
}

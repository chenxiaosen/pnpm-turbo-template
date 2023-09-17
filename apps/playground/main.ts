import { createApp } from 'vue'
//@ts-ignore
import App from '@/App.vue'
import 'tailwindcss/tailwind.css'
// 组件库 需要放在 tailwindcss 下，以免样式冲突
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'
import { createPinia } from 'pinia'
import { PiniaLogger } from 'pinia-logger'
const pinia = createPinia()
pinia.use(
  PiniaLogger({
    expanded: false,
    //@ts-ignore
    // disabled: import.meta.env.MODE === 'production',
    disabled: true,
  }),
)
const app = createApp(App)
app.use(pinia)
app.mount('#app')

import './assets/main.css'
import { createApp } from 'vue'
import { pinia } from './store'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

const toastOptions = {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true
}

app.use(Toast, toastOptions)

app.mount('#app')

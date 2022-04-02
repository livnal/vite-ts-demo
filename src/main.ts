import { createApp } from 'vue'
import App from './App.vue'
import { createVueWait } from 'vue-wait'

const VueWait = createVueWait()

createApp(App)
  .use(VueWait)
  .mount('#app')

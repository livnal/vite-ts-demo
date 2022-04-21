import { createApp } from 'vue'
import App from './App.vue'
import { createVueWait } from 'vue-wait'

const VueWait = createVueWait()

createApp(App).use(VueWait).provide('appProvide', '123456').mount('#app')

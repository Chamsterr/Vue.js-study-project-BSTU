import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Form from './components/Form.vue'
import App from './App.vue'
import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/form', component: Form }
  ]
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')


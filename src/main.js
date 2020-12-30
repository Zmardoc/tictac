import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { config } from './config'

//TODO uklidit axios do souboru
const customAxios = axios.create({
  baseURL: config.backend.apiBaseUrl,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
})
customAxios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    if (401 === error.response.status) {
      router.push('/')
    } else {
      return Promise.reject(error)
    }
  },
)

Vue.use(VueAxios, customAxios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')

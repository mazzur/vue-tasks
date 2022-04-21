import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './axios-mock'
import './assets/tailwind.css'
import './directives/click-outside'
import './filters/truncate'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

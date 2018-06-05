import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'

//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
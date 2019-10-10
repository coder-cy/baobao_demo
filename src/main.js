// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
import VueAxios from 'vue-axios'

// 直接引bootstrap会引里面的js文件
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  VueAxios,
  components: { App },
  template: '<App/>'
})

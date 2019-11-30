// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'

// 直接引bootstrap会引里面的js文件
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store.js'
import axios from 'axios'
import './elementUI.js'
//配置请求的根路径(接口基准根地址)
// axios.defaults.baseURL = 'http://192.168.0.104:8080'
// axios.interceptor.request.use(config => {
//   console.log(config)
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   //最后必须return config
//   return config
// })
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Axios,
  VueAxios,
  components: { App },
  template: '<App/>'
})

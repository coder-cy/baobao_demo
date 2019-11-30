import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import infoTable from '@/components/InfoTable'
import elementIndex from '@/components/element/ElementIndex'
import weibo from '@/components/Weibo'
import weiboTest from '@/components/WeiboTest'
import login from '@/components/Login'
import transferString from '@/components/TransferString'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/infoTable',
      name: 'infoTable',
      component: infoTable
    },
    {
      path: '/elementIndex',
      name: 'elementIndex',
      component: elementIndex
    },
    {
      path: '/transferString',
      name: 'transferString',
      component: transferString
    },
    {
      path: '/weibo',
      name: 'weibo',
      component: weibo
    },
    {
      path: '/weiboTest',
      name: 'weiboTest',
      component: weiboTest
    },
    {
      path: '/weibo/login',
      name: 'login',
      component: login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import infoTable from '@/components/InfoTable'
import elementIndex from '@/components/element/ElementIndex'

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
    }
  ]
})

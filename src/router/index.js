import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/defaultPage'
import bodyIndex from '@/components/body_index/bodyIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children: [{
        path: '/index',
        name: 'index',
        component: bodyIndex
      }]
    }
  ]
})

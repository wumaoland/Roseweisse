import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/defaultPage'
import bodyIndex from '@/components/body_index/bodyIndex'
import changeCity from '@/pages/changeCity'
import login from '@/layout/login'
import blank from '@/layout/blank'

import store from '@/store/store';
// store.commit()

Vue.use(Router)

const export_router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      redirect: '/index',
      component: defaultPage,
      children: [{
        path: '/index',
        name: 'index',
        component: bodyIndex
      },{
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank
    }
  ]
})

export_router.beforeEach((to, from, next) => {
  if(store.state.userName === null && to.name === 'blank') {
    next('/login')
  } else {
    next()
  }
  // if(store.state.userName === null) {
  //   next('/login')
  // } else {
  //   next()
  // }
})

export default export_router

import Vue from 'vue'
import Router from 'vue-router'
import homeBody from '@/components/homeBody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeBody',
      component: homeBody
    }
  ]
})

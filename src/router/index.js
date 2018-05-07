import Vue from 'vue'
import Router from 'vue-router'
import homeBody from '@/components/homeBody'
import videoPlay from '@/components/video/videoPlay'
import me from '@/components/my/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeBody',
      component: homeBody
    },
    {
      path: '/play',
      name: 'videoPlay',
      component: videoPlay
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import homeHead from '@/components/homeHead'
import homeBody from '@/components/homeBody'
import homeFoot from '@/components/homefoot'
import videoPlay from '@/components/video/videoPlay'
import me from '@/components/my/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeBody',
      components: {
        default: homeBody,
        homeHead: homeHead,
        homeFoot: homeFoot
      }
    },
    {
      path: '/play',
      name: 'videoPlay',
      components: {
        default: videoPlay,
        homeFoot: homeFoot
      }
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})

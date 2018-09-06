import Vue from 'vue'
import Router from 'vue-router'
import homeHead from '@/components/homeHead'
import homeBody from '@/components/homeBody'
import homeFoot from '@/components/homefoot'
import videoPlay from '@/components/video/videoPlay'
import ogcIndex from '@/components/ogc/index'
import me from '@/components/my/index'
import modlue from '@/page/modlue'

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
      components: {
        default: me,
        homeHead: homeHead,
        homeFoot: homeFoot
      }
    },
    {
      path: '/ogc',
      name: 'ogcIndex',
      components: {
        default: ogcIndex,
        homeHead: homeHead,
        homeFoot: homeFoot
      }
    },
    {
      path: '/modlue',
      name: 'modlue',
      components: {
        default: modlue
      }
    }
  ]
})

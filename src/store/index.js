import Vue from 'vue'
import Vuex from 'vuex'
import homeLays from './modules/homeLays'
import request from './modules/request'
import progress from './modules/progress'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    homeLays,
    request,
    progress
  }
})

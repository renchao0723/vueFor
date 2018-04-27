<template>
  <div id="app">
    <!--公用头部，当normalHead为true时显示-->
    <home-head v-if ='getHead'>
      <router-link :to="{name:'VideoPlay',params:{activeIndex :0} }" slot='headLeft' class="head_Left"><i></i></router-link>
      <div slot='centerTitle' class="center_Title">名醫在線</div>
      <router-link :to="{name:'message'}" slot='headRight' class="head_Right"><i></i></router-link>
    </home-head>
    <!--路由-->
    <router-view/>
    <!--公用底部，当normalFoot为true时显示-->
    <home-foot></home-foot>
  </div>
</template>

<script>
import homeHead from './components/homeHead'
import homeFoot from './components/homefoot'
import store from './store'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  store,
  components: {
    homeHead,
    homeFoot
  },
  computed: {
    getHead () {
      return store.getters.getHead
    },
    getHeadJson () {
      return store.getters.getHeadJson
    }
  }
}
</script>

<style scoped>
  @import './style/publicSty.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

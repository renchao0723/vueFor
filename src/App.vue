<template>
  <div id="app">
    <!--公用头部，当normalHead为true时显示-->
    <home-head v-if ='getHead'>
      <router-link to='/play' slot='headLeft' class="head_Left"><i></i></router-link>
      <div slot='centerTitle' class="center_Title">名醫在線</div>
      <router-link to="#" slot='headRight' class="head_Right"><i></i></router-link>
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
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    homeHead,
    homeFoot
  },
  computed: {
    getHead () {
      return this.$store.getters.getHead
    },
    getHeadJson () {
      return this.$store.getters.getHeadJson
    }
  }
}
</script>

<style>
  @font-face {font-family: "iconfont";
  src: url('./style/iconfont.ttf') format('truetype');
  }
.iconfont {
  font-family:"iconfont" !important;
  font-size:0.48rem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-stop:before { content: "\e76a"; }

.icon-play:before { content: "\e653"; }

.icon-zanting:before { content: "\e60a"; }

.icon-voic:before { content: "\e651"; }

.icon-icon-:before { content: "\e647"; }

.icon-fullScreen:before { content: "\e70e"; }

.icon-icon--1:before { content: "\e70f"; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

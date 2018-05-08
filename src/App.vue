<template>
  <!--https://blog.csdn.net/sjn0503/article/details/76074569-->
  <div id="app">
    <!--公用头部，当normalHead为true时显示-->
    <vue-progress-bar></vue-progress-bar>
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
    },
    progStart () {
      return this.$store.getters.getProgStart
    },
    progValue () {
      return this.$store.getters.getProgValue
    },
    progDirect () {
      return this.$store.getters.getProgDirect
    },
    progFinish () {
      return this.$store.getters.getProgFinish
    },
    progFail () {
      return this.$store.getters.getProgFail
    }
  //  计算 设置progress的开始 进度值 前进/后退 结束 失败值 通过$store控制progress的显示，然后watch动态监听，执行相应的函数
  },
  watch: {
    progStart: function (oldVaue, newValue) {
      this.start()
    },
    progValue: function (oldVaue, newValue) {
      this.start()
    },
    progDirect: function (oldVaue, newValue) {
      this.set(newValue)
    },
    progFinish: function (oldVaue, newValue) {
      this.finish()
    },
    progFail: function (oldVaue, newValue) {
      this.fail()
    }
  },
  methods: {
    //  progress
    start () {
      this.$Progress.start()
    },
    set (num) {
      this.$Progress.set(num)
    },
    increase (num) {
      this.$Progress.increase(num)
    },
    decrease (num) {
      this.$Progress.decrease(num)
    },
    finish () {
      this.$Progress.finish()
    },
    fail () {
      this.$Progress.fail()
    },
    test () {
      this.$Progress.start()
      this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
        .then((response) => {
          this.$Progress.finish()
        }, (response) => {
          this.$Progress.fail()
        })
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

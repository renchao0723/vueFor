<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <keep-alive><router-view name="homeHead"></router-view></keep-alive>
    <keep-alive><router-view></router-view></keep-alive>
    <keep-alive><router-view name="homeFoot" :nums="activeNum"></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    activeNum () {
      return this.$store.getters.getActiveNum
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

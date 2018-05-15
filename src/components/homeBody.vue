<template>
  <div class="hello">
    <homeBodySwiper></homeBodySwiper>
    <div class="imgCover"><img class="imgCoverImg" src="../assets/more.png"/></div>
    <ul class="hotks">
      <div class="hotksTit">
        <h2>热门科室视频</h2>
      </div>
      <li  v-for="(item, index) in ksList" :key="index">
        <div class="">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import homeBodySwiper from './homeBodySwiper'
import { getHttp } from '../config/httpApi'
export default {
  name: 'HelloWorld',
  data () {
    return {
      ksList: []
    }
  },
  mounted () {
    this.$store.dispatch('changeProgStart')
    // this.httpHotList()
  },
  created () {
    this.$store.dispatch('changeActiveNum', 0)
    this.changeHomeHead()
  },
  components: {
    homeBodySwiper
  },
  activated () {
    if (!this.ksList.length) this.httpHotList()
  },
  methods: {
    changeHomeHead: function () {
    },
    httpHotList: function () {
      getHttp('/apps/v1/Keshi/hotList').then(response => {
        this.ksList = response.data.data
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgCoverImg{
    width: 100%;
    box-shadow: 0 1px 1px rgba(240,240,240,0.5);
  }
  .hotksTit{
    text-align: left;
    padding: 0.15rem 0 0.15rem 0.3rem;
  }
  .hotks{
    background-color: #ffffff;
    font-size: 0.24rem;
    color: #000000;
    box-shadow: 0 1px 1px rgba(240,240,240,0.5);
    padding-bottom: 0.3rem ;
  }
  .hotks li{
    background-color: #f1f1f1;
    padding: 0.15rem 0.3rem;
    border-radius: 0.3rem;
    display: inline-block;
    margin: 0.15rem 0.15rem 0.15rem 0;;;
  }
</style>

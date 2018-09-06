<template>
  <div>
    <!--轮播banner-->
    <homeHomeSwiper :swiper-gro='swierGro'></homeHomeSwiper>
    <!--视频热搜-->
    <div class="hotKeyWord">
      <router-link :to="{ name: 'me', params: { keyWord: item.disease_name }}" class="hotKeyWordItem" v-for="(item, index) in hotKeyWord" :key="index" >{{item.disease_name}}</router-link>
    </div>
    <!--找医生入口-->
    <router-link :to="{ name: 'me'}" class="docEnter">
      <img src="/static/banner.png" />
    </router-link>
    <!--视频分类入口-->
    <div class="channel">
      <div class="channel_Gro">
        <div v-for="(item, index) in channel_list" :key="index" @click="getChanelList(index)" v-bind:class="{active:(activeChannel===index)}">{{item.name}}</div>
      </div>
      <div class="channel_Tag" v-if="channel_list[activeChannel]">
        <div v-for="(item, index) in channel_list[activeChannel].tags" :key="index" @click="getChanelTag(index)">{{item.name}}</div>
      </div>
      <div></div>
    </div>
    <videoBanner :videodata='videoData'></videoBanner>
  </div>
</template>

<script>
import homeHomeSwiper from './homeHomeSwiper'
import videoBanner from './videoBanner'
import { getHttp } from '../config/httpApi'
export default {
  name: 'HelloWorld',
  data () {
    return {
      swierGro: {},
      hotKeyWord: {},
      channel_list: {},
      activeChannel: 0,
      activeTags: -1,
      videoData: {}
    }
  },
  mounted () {
    this.$store.dispatch('changeProgStart')
    // this.httpHotList()
  },
  created () {
    this.$store.dispatch('changeActiveNum', 0)
  },
  components: {
    homeHomeSwiper,
    videoBanner
  },
  activated () {
    if (!this.swierGro.length) this.httpHotList()
  },
  methods: {
    getChanelList: function (mes, e) {
      this.activeChannel = mes
      this.videoData = {
        page: 1,
        channel_id: this.channel_list[mes].id,
        tag_id: ''
      }
    },
    getChanelTag: function (mes, e) {
      this.activeTags = mes
      this.videoData.page = 1
      this.videoData = {
        page: 1,
        channel_id: this.videoData.channel_id,
        tag_id: this.channel_list[this.activeChannel].tags[mes].id
      }
    },
    httpHotList: function () {
      getHttp('/apps/mpv1/public/home').then(response => {
        let finnalData = response.data.data
        this.swierGro = finnalData.banner_list
        this.hotKeyWord = finnalData.tags
        this.channel_list = finnalData.channel_list
        this.videoData = {
          page: 1,
          channel_id: finnalData.channel_list[0].id,
          tag_id: this.videoData.tag_id ? this.videoData.tag_id : ''
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .imgCoverImg{
    width: 100%;
    box-shadow: 0 1px 1px rgba(240,240,240,0.5);
  }
  /*视频热搜*/
  .hotKeyWord{
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    margin-top: 1.04rem;
    width: 100%;
    padding: 0 0.3rem;
    box-sizing: border-box;
    background-color: #ffffff;
  }
  .hotKeyWordItem{
    display: block;
    word-wrap: break-word;
    font-size: 0.28rem;
    color: #0091FF;
    padding: 0 0.2rem;
    height: 0.72rem;
    line-height: 0.72rem;
  }
  /*医生列表入口*/
  .docEnter{
    padding: 0.2rem 0.3rem;
    width: 100%;
    box-sizing: border-box;
    display: block;
    img{
      width: 100%;
    }
  }
  /*频道*/
  .channel{
    width: 100%;
    background-color: #ffffff;
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
  }
  .channel_Gro{
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    font-size: 0.26rem;
    div{
      width: 1.64rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 0.1rem;
      background-color: #F6F7FA;
      color: #2B2D36;
      margin-right: 0.14rem;
    }
    div.active{
      color: #ffffff;
      background-color: #0094ff;
    }
  }
  .channel_Tag{
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    font-size: 0.26rem;
    div{
      color: #676E7C;
      padding: 0.3rem 0.22rem;
    }
    div.active{
      color: #0091FF;
    }
  }
</style>

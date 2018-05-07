<template>
  <div class="videoPlay">
    <video-tag :video-src='videoDetail.url' :video-image='videoDetail.origin'></video-tag>
    <div class="videodetail">
      <h2>{{videoDetail.title}}</h2>
      <div class="shortIntro shortIntroHide" @click="shortIntro">简介 ></div>
    </div>
  </div>
</template>

<script>
import videoTag from './children/videoTag'
import { postHttp } from '../../config/httpApi'
export default {
  name: 'videoPlay',
  data () {
    return {
      videoDetail: {}
    }
  },
  components: {
    videoTag
  },
  mounted () {
    postHttp({url: 'https://192.168.1.107/apps/v1/video/details', data: {vid: 7010}}).then(response => {
      this.videoDetail = response.data.data
      this.videoDetail.url = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      this.videoDetail.origin = this.videoDetail.pic.origin
    })
    this.$store.dispatch('homeHeadActH')
  },
  methods: {
    shortIntro: function () {
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../style/publicDeclar';
  .videoPlay{
    font-size: 0.26rem;
    text-align: left;
    .videodetail{
      padding: 0.25rem 0.3rem;
      width: 100%;
      box-sizing: border-box;
      h2{
        display: inline-block;
        width: 80%;
      }
      .shortIntro{
        width: 19%;
        display: inline-block;
        text-align: right;
      }
    }
  }
</style>

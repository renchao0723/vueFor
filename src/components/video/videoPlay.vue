<template>
  <div class="videoPlay" >
    <video-tag :video-src= 'url' :video-image= 'image'></video-tag>
    <div class="videodetail">
      <h2>{{videoDetail.title}}</h2>
      <div class="shortIntro shortIntroHide" @click="shortIntro">简介 ></div>
    </div>
    <upload-file></upload-file>
  </div>
</template>

<script>
import videoTag from './children/videoTag'
import { postHttp } from '../../config/httpApi'
import uploadFile from '../uploadFile'
export default {
  name: 'videoPlay',
  data () {
    return {
      videoDetail: {},
      url: 'http://v.myzx.cn/default/20171221/5a3b16a4f397f.mp4',
      image: 'http://img1.myzx.cn/video/admin/20171221/5a3b17e3d86fc.jpg'
    }
  },
  created () {
    this.$store.dispatch('changeActiveNum', 2)
  },
  components: {
    videoTag,
    uploadFile
  },
  mounted () {
    // this.httpDetail()
  },
  activated () {
    this.httpDetail()
  },
  methods: {
    shortIntro: function () {
    },
    httpDetail: function () {
      postHttp({url: '/apps/v1/video/details', data: {vid: 7010}}).then(response => {
        this.videoDetail = response.data.data
        this.url = response.data.data.url
        this.image = this.videoDetail.pic.origin
      })
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

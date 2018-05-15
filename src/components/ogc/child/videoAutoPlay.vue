<template>
  <div>
    <div class="videoBanner" v-if="!autoVideo" @click='autoPlay'>
      <div class="videoBannerTit">
        <div>这就是我的标题，好看吧，哈哈哈哈或还是白色的</div>
        <div>2.6万次播放</div>
      </div>
      <div class="playVideoIcon">
        <img src="https://m.myzx.cn/public/v5.6/image/video_icon.png"/>
      </div>
      <img src="http://img1.myzx.cn/video/mysource/admin/20180209/5a7d0093d93b6.jpg"/>
    </div>
    <div v-else>
      <video-tag :video-src='url' :video-image='image'></video-tag>
    </div>
    <div class="ogcInfo">
      <div class="ogcInfoUser">
        <img src="http://img1.myzx.cn/video/mysource/admin/20180509/5af2c9829d77d_200_200.png"/>
        <span>药师兜</span>
      </div>
      <ul>
        <li>150</li>
        <li>222</li>
      </ul>
    </div>
  </div>
</template>

<script>
import videoTag from '../../video/children/videoTag'
export default {
  name: 'VideoAutoPlay',
  data () {
    return {
      autoVideo: false,
      url: 'http://v.myzx.cn/default/20171221/5a3b16a4f397f.mp4',
      image: 'http://img1.myzx.cn/video/admin/20171221/5a3b17e3d86fc.jpg'
    }
  },
  components: {
    videoTag
  },
  methods: {
    autoPlay: function () {
      this.autoVideo = !this.autoVideo
    }
  },
  activated () {
    console.log(window)
    window.addEventListener('online', function () {
      alert('onLine')
    })
    window.addEventListener('offline', function () {
      alert('offLine')
    })
  }
}
</script>

<style lang="scss" scoped>
.videoBanner{
  position: relative;
  &:after{
    content:'';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;
    left: 0;
    background-color: rgba(0,0,0,0.5);
  }
  .videoBannerTit{
    position: absolute;
    top: 0.28rem;
    left: 0.28rem;
    color: #efefef;
    font-size: 0.28rem;
    text-align: left;
    line-height: 1.5;
    z-index: 10;
  }
  .playVideoIcon{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 30;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    img{
      height: 0.88rem;
      width: 0.88rem;
    }
  }
  img{
    width: 100%;
    vertical-align: top;
  }
}
  .ogcInfo{
    padding: 0.14rem 0.28rem;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    .ogcInfoUser{
      display: inline-flex;
      align-items: center;
      img{
        height: 0.75rem;
        width: 0.75rem;
        border-radius:100%;
      }
      span{
        padding-left: 0.14rem;
        font-size: 0.24rem;
        vertical-align: middle;
      }
    }
  }
</style>

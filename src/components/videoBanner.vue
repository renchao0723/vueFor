<template>
  <div>
    <!--<div v-if="videoBannerList.length" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">>-->
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div v-for="(item, index) in videoBannerList" :key="index"  >
        <div class="videoBannerPic">
          <img :src='item.pic' />
          <i></i>
          <div></div>
        </div>
        <div class="videoBannerMenu" v-if="videoBannerList.length>0">
          <div class="videoBanMenuPro" v-if='item.type === "22" || item.type === "21"'>
            <img :src='item.guid_img' />
            <div>
              <p><span>{{item.guid_name}}</span></p>
              <p></p>
            </div>
          </div>
          <div class="videoBanMenuPro" v-else>
            <img :src='item.doctor.avatar' />
            <div>
              <p><span>{{item.doctor.name}}</span><span>{{item.doctor.kid2name}}</span></p>
              <p>{{item.doctor.hname}}</p>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
    <div v-if="ajaxStatus===1" class="weui-loadmore">
      <i class="weui-loading"></i>
      <span class="weui-loadmore__tips">正在加载</span>
    </div>
    <div v-else-if="ajaxStatus===2" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">加载失败</span>
    </div>
    <div v-else-if="ajaxStatus===3" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">已加载完</span>
    </div>
  </div>
</template>

<script>
import { postHttp } from '../config/httpApi'
// import { InfiniteScroll} from 'mint-ui'
export default {
  name: 'videoBanner',
  props: ['videodata'],
  data () {
    // 0 正常 1 加载中 2加载失败 3加载完成
    return {
      ajaxStatus: 0,
      videoBannerList: {}
    }
  },
  watch: {
    videodata: function (newVal, oldVal) {
      this.requestBanner()
    }
  },
  methods: {
    requestBanner: function () {
      this.ajaxStatus = 1
      postHttp({url: '/apps/mpv1/video/channel', data: this.videodata}).then(response => {
        if (response.data.code === 200) {
          let finnalData = response.data.data
          if (this.videodata.page === 1) {
            this.videoBannerList = finnalData
          } else {
            this.videoBannerList = this.videoBannerList.concat(finnalData)
          }
          this.ajaxStatus = 0
          this.videodata.page++
        } else {
          this.ajaxStatus = 2
        }
      })
    },
    loadMore () {
      setTimeout(() => {
        this.requestBanner()
      }, 2500)
    }
  }
}
</script>

<style lang="scss" scoped>
  /*load  */
  .weui-loading {
    width: 0.3rem;
    height: 0.3rem;
    display: inline-block;
    vertical-align: middle;
    animation: weuiLoading 1s steps(12, end) infinite;
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
    background-size: 100%;
  }
  .weui-loadmore {
    width: 65%;
    margin: 0.4rem auto;
    height: 0.4rem;
    line-height: 0;
    font-size: 0.28rem;
    text-align: center;
  }
  .weui-loadmore__tips {
    display: inline-block;
    vertical-align: middle;
  }
  .weui-loadmore_line {
    border-top: 1px solid #e5e5e5;
    margin-top: 0.2rem;
  }
  /* videoBanner */
  .videoBannerPic{
    position: relative;
    width: 100%;
    height: 4.24rem;
    background-color:#0094ff;
    img{
      width: 100%;
      height: 100%;
      background-image: url(/static/logo-lang.png);
      background-size: 50% auto;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 15;
    }
    i{
      width: 30%;
      left: 35%;
      height: 100%;
      position: absolute;
      top: 0;
      background-image: url(/static/bodanPlay.png);
      background-size: 50% auto;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 20;
    }
    div{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0,0,0,0.2);
    }
  }
  .videoBannerMenu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.3rem;
    box-sizing: border-box;
    .videoBanMenuPro{
      display: flex;
      align-items: center;
      img{
        height: 0.82rem;
        width: 0.82rem;
        border-radius: 100%;
        margin-right: 0.2rem;
        flex-shrink: 0;
      }
      div{
        font-size: 0.24rem;
        color: #0F142B;
        text-align: left;
        p{
        }
        span:first-child{
          font-size: 0.3rem;
          font-weight: bold;
        }
        span:last-child{
          color: #676E7C;
          padding-left: 0.1rem;
        }
      }
    }
  }
</style>

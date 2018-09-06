<template>
    <div style="background-color: #191343;">
      <div class="topHead">
        <img src="/static/modle/topHead.png"/>
        <img src="/static/modle/share.png"/>
      </div>
      <img src="/static/modle/bannerF.png"/>
      <img class="tit" src="/static/modle/titF.png"/>
      <modle3 style="background-color: #191343;"></modle3>
      <img class="expandBanner" src="/static/modle/expandBanner.png"/>
      <img class="tit" src="/static/modle/titS.png"/>
      <modle3 style="background-color: #191343;"></modle3>
      <img style="padding: 0.56rem 0 0.3rem;" src="/static/modle/tite.png"/>
      <div class="bannerS">
        <img src="/static/modle/bannerS.png"/>
        <ul>
          <li>在线咨询</li>
          <li>预约挂号</li>
        </ul>
      </div>
      <img class="tit" src="/static/modle/titt.png"/>
      <modle3 style="background-color: #191343;"></modle3>
      <img class="shareT" src="/static/modle/shareT.png"/>
      <img class="more" src="/static/modle/moreF.png"/>
      <img class="more" src="/static/modle/moreS.png"/>
    </div>
</template>

<script>
import modleSwiper from './child/modleSwiper'
export default {
  name: 'modlue',
  components: {
    modle3: modleSwiper
  }
}
</script>

<style lang="scss" scoped>
  img{
    width: 100%;
    height: auto;
    display: block;
  }
  .topHead{
    position: relative;
    img:last-child{
      position: absolute;
      right: 0.22rem;
      height: 0.45rem;
      width: 0.45rem;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .tit{
    padding: 0.3rem 0;
  }
  .expandBanner{
    padding: 0.4rem 0;
  }
  .bannerS{
    position: relative;
    padding: 0.1rem 0.2rem;
    width: 100%;
    box-sizing: border-box;
    ul{
      position: absolute;
      bottom: 0.35rem;
      left: 0.1rem;
      display: flex;
      li{
        background:rgba(255,255,255,1);
        border-radius:0.22rem;
        font-size: 0.26rem;
        color: #191343;
        padding: 0.1rem 0.28rem;
        margin-left: 0.2rem;
      }
    }
  }
  .shareT{
    text-align: center;
    width: 3rem;
    margin: auto;
    padding: 0.56rem 0;
  }
  .more{
    padding: 0 0.2rem 0.2rem;
    width: 100%;
    box-sizing: border-box;
  }
</style>

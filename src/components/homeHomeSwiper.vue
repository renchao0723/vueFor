<template>
    <div class="swiper" :style="{backgroundImage:'url('+bgimg+')'}">
      <swiper :options="swiperOption" class="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in swiperGro" :key="index">
          <router-link :to="{ name: 'me', params: { cid: item.cid }}" class="swiperItem">
            <div class="swiperItemCover"><img :src="item.pic" /><i></i></div>
            <div class="swiperItemCont">
              <p>{{item.title}}</p>
              <p>已更新{{item.video_num}}集</p>
              <p>{{item.play_num}}</p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'homeBodySwiper',
  props: ['swiperGro'],
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        debugger: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        on: {
          transitionEnd: (e) => {
            let swip = this.$refs.mySwiper.swiper
            this.bgimg = this.swiperGro[swip.activeIndex].thumb
          }
        },
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 10,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      },
      bgimg: ''
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  watch: {
    swiperGro: function (newVal, oldVal) {
      this.bgimg = this.swiperGro[0].thumb
    }
  },
  computed: {
    swipers () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.swiper{
  background-size: 100% 100%;
  width: 100%;
  height: 7.13rem;
  position: relative;
  transition: all 0.25s;
}
.swiperOption{
  padding: 0 0.3rem;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 5.1rem;
  left: 0;
}
.swiperItem{
  background-color: #ffffff;
  border-radius: 0.05rem;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  width: 100%;
  box-sizing: border-box;
}
.swiperItemCover{
  position: relative;
  flex-shrink: 0;
  img{
    width: 1.5rem;
    height: 2.02rem;
  }
  i{
    display: inline-block;
    background-image: url(/static/bodanPlay.png);
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 0.49rem;
    width: 0.49rem;
    opacity: 0.4;
  }
}
.swiperItemCont{
  margin-left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 2.02rem;
  text-align: left;
  p:first-child{
    color: #0F142B;
    font-size: 0.36rem;
    font-weight: bold;
  }
  p:nth-child(2){
    background-color: rgba(0, 142, 255, 0.12);
    display: inline-block;
    color: #829ccc;
    border-radius: 0.1rem;
    padding: 0.06rem 0.1rem;
    font-size: 0.24rem;
  }
}
</style>

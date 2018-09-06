<!--  -->
<template>
    <swiper :options="swiperOption" class="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperGro" :key="index">
        <router-link :to="{ name: 'me'}" class="swiperItem">
          <img :src="item.pic" />
          <i></i>
        </router-link>
      </swiper-slide>
    </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'modleSwiper',
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        debugger: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        on: {
          transitionEnd: (e) => {
            // let swip = this.$refs.mySwiper.swiper
            // this.bgimg = this.swiperGro[swip.activeIndex].thumb
          }
        },
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 20,
          stretch: 20,
          depth: 20,
          slideShadows: false
        }
      },
      swiperGro: [{
        url: '',
        pic: 'https://img.myzx.cn/video/mysource/image/20180821/5b7b6fae349ce_300_300.jpg',
        vid: '123'
      }, {
        url: '',
        pic: 'https://img.myzx.cn/video/mysource/image/20180809/5b6bb8d3e4acd_300_300.jpg',
        vid: '123'
      }, {
        url: '',
        pic: 'https://img.myzx.cn/video/mysource/image/20180808/5b6b0843dae5e_300_300.jpg',
        vid: '123'
      }]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swipers () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    canvasDragPic: function () {
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper{
    background-size: 100% 100%;
    width: 100%;
    position: relative;
    transition: all 0.25s;
  }
  .swiperOption{
    padding: 0 0.54rem;
    width: 100%;
    box-sizing: border-box;
    /*position: absolute;*/
    /*left: 0;*/
  }
  .swiperItem{
    background-color: #ffffff;
    border-radius: 0.05rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: block;
    img{
      width: 100%;
      border-radius: 0.1rem;
      display: block;
    }
    i{
      position: absolute;
      bottom: 0.2rem;
      right: 0.2rem;
      height: 0.88rem;
      width: 0.88rem;
      background-image: url(/static/bodanPlay.png);
      background-size: 100% 100%;
    }
  }
</style>

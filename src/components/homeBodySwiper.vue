<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperGro" :key="index"><img class="swiperImg" :src="item.thumb"></swiper-slide>
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
        debugger: true,
        slidesPerView: 'auto',
        centeredSlides: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  activated () {},
  methods: {},
  mounted () {
    // this.httpBannerList()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiperImg{
  width: 100%;
}
</style>

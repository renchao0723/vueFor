<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in slides" :key="index"><img class="swiperImg" :src="item.slide_pic.origin"></swiper-slide>
      </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getHttp } from '../config/httpApi'
export default {
  name: 'homeBodySwiper',
  data () {
    return {
      slides: [],
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
  activated () {
    if (!this.slides.length) this.httpBannerList()
  },
  methods: {
    httpBannerList: function () {
      getHttp('/apps/v1/public/bannerList').then(response => {
        this.slides = response.data.data
      })
    }
  },
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

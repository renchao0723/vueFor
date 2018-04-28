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
  methods: {
    changeHomeHead: function () {
      this.store.dispatch('homeHeadAct')
    }
  },
  mounted () {
    this.axios.get('https://192.168.1.107/apps/v1/public/bannerList')
      .then(response => { this.slides = response.data.data })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiperImg{
  width: 100%;
}
</style>

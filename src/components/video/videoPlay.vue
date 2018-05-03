<template>
  <video-tag videoSrc="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video-tag>
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
      console.log(response.headers)
      this.videoDetail = response.data.data
    })
  }
}
</script>

<style scoped>

</style>

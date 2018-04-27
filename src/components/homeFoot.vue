<template>
  <div class="foot">
    <ul class="footer">
      <li v-for="(item, index) in footArr" v-bind:key="index" v-bind:class="{ active: item.active }" @click="selectpage(index)">
        <i v-bind:class ="item.class"></i>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeFoot',
  data () {
    return {
      isActive: true,
      footArr: [{
        name: '首頁',
        class: 'icon_index',
        active: true
      }, {
        name: '首頁',
        class: 'icon_weishi',
        active: false
      }, {
        name: '首頁',
        class: 'icon_video',
        active: false
      }, {
        name: '首頁',
        class: 'icon_my',
        active: false
      }]
    }
  },
  methods: {
    selectpage (num) {
      this.footArr.map(function (item, index) {
        item.active = (index === num ? true : false)
      })
    }
  }
}
</script>

<style scoped>
.foot{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  background: rgba(244,244,244,0.8)
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.1rem;
  color: #888;
  font-size: 0.24rem;
}
.footer .active{
  color:#009cff;
}
.footer li{
  list-style:none;
  flex: 1;
  height: 1.1rem;
  margin-top: 0.32rem;
}
.footer li i{
  height: 0.38rem;
  width: 0.5rem;
  display: inline-block;
  background-size: 100% 100%;
  vertical-align: middle;
}
  /*icon*/
  .icon_index{
    background:url("../assets/icon/index.png");
    background-size:100% 100%;
  }
  .active .icon_index{
    background:url("../assets/icon/index_blue.png");
    background-size:100% 100%;
  }
.icon_weishi{
  background:url("../assets/icon/weishi.png");
  background-size:100% 100%;
}
.active .icon_weishi{
  background:url("../assets/icon/weishi_blue.png");
  background-size:100% 100%;
}
.icon_video{
  background:url("../assets/icon/video.png");
  background-size:100% 100%;
}
.active .icon_video{
  background:url("../assets/icon/video_blue.png");
  background-size:100% 100%;
}
.icon_my{
  background:url("../assets/icon/my.png");
  background-size:100% 100%;
}
.active .icon_my{
  background:url("../assets/icon/my_blue.png");
  background-size:100% 100%;
}
</style>

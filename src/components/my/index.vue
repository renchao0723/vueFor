<template>
  <div @click="test">
    <div v-for= '(items, indexs) in arrayList' :key="indexs" >
      <div class="province">{{items.province}}</div>
      <ul>
        <li class="district" v-for="(item,index) in items.district" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      arrayList: [{
        province: '重庆',
        district: [{
          name: '渝中'
        }, {
          name: '渝北'
        }, {
          name: '江北'
        }, {
          name: '北碚'
        }, {
          name: '大渡口'
        }, {
          name: '九龙坡'
        }, {
          name: '南岸'
        }, {
          name: '沙坪坝'
        }]
      }, {
        province: '成都',
        district: [{
          name: '车市'
        }, {
          name: '武侯'
        }, {
          name: '双流'
        }, {
          name: '兴建'
        }, {
          name: '经济'
        }, {
          name: '渝中'
        }, {
          name: '渝中'
        }, {
          name: '渝中'
        }, {
          name: '渝中'
        }]
      }, {
        province: '成都',
        district: [{
          name: '车市'
        }, {
          name: '武侯'
        }, {
          name: '双流'
        }, {
          name: '兴建'
        }, {
          name: '经济'
        }, {
          name: '渝中'
        }, {
          name: '渝中'
        }]
      }],
      scrollHeight: 0,
      heightGroup: []
    }
  },
  methods: {
    test: function (e) {
      this.scrollHeight = e.path[1].scrollY
    }
  },
  created () {
    this.$store.dispatch('changeActiveNum', 3)
  },
  mounted () {
    this.$nextTick(function () {
      this.offsetheight = this.$el.scrollHeight
    })
    let that = this
    this.arrayList.map(function (item, index) {
      that.heightGroup.push((item.district.length + 0.7) * 46.88)
    })
    window.addEventListener('scroll', this.test)
  },
  computed: {
  },
  watch: {
    scrollHeight: function (val, oldVal) {
    }
  }
}
</script>

<style scoped>
.province{
  position: relative;
  font-size: 0.28rem;
  color: #787878;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: left;
  background-color: rgba(222,222,222,0.5);
  padding: 0 0.28rem;
}
  .district{
    color: #383838;
    font-size: 0.24rem;
    line-height: 1rem;
    height: 1rem;
  }
</style>

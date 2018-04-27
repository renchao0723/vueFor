<template>
  <div class="hello">
    <div v-on:click="changeHomeHead">{{ msg }}</div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是body'
    }
  },
  methods: {
    changeHomeHead: function () {
      store.dispatch('homeHeadAct')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

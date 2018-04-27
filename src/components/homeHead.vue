<template>
  <div>
    <div class='head'>
      <slot name='headLeft'></slot>
      <slot name='centerTitle' class="centerTitle"></slot>
      <slot name='headRight' class="headRight"></slot>
    </div>
    <div style="height: 0.9rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'homeHead',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .head{
    position: fixed;
    top: 0;
    height: 0.9rem;
    width: 100%;
    font-size:0.4rem;
    text-align: center;
    color: #ffffff;
    background-color:#5594ff;
    margin-bottom:1px;
    background-attachment:fixed;
    -webkit-background-size:100% 100%;
    background-size:contain;
    background-repeat:no-repeat;
    box-shadow: 0 1px 1px rgba(123,123,123,0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

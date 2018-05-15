<template>
  <transition name='fade'>
    <div>
      <div class='head'>
        <router-link to='/play' slot='headLeft' class="head_Left"><i></i></router-link>
        <div slot='centerTitle' class="center_Title">名医在线</div>
        <router-link to="#" slot='headRight' class="head_Right"><i></i></router-link>
      </div>
      <div style="height: 0.9rem;"></div>
    </div>
  </transition>
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
    z-index: 999;
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
  .fade-enter-active, .fade-leave-active {
    transition: all ease-in-out 0.5s;
  }
  .fade-enter, .fade-leave-to{
    height: 0;opacity: 0;
  }
  .fade-enter-to, .fade-leave{
    height: 0.9rem;
    opacity: 0.5;
  }
</style>

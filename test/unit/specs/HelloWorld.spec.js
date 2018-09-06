import Vue from 'vue'
import homeBody from '@/components/homeBody'
// import {mount} from 'vue-test-utils'

describe('homeBody.vue', () => {
  it('测试首页加载数据是否正确', () => {
    const Constructor = Vue.extend(homeBody)
    const vm = new Constructor().$mount()
    // const wrapper = mount(homeBody)
    console.log(vm)
  })
})

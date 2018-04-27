
const state = {
  homeHeadShow: true,
  homeFootShow: true,
  headJson: {
    title: '名醫在線',
    left: 'back',
    leftUrl: '',
    right: 'message',
    rightUrl: 'message'
  }
}
// getters
const getters = {
  // 調用方法 store.getters.getHead
  getHead: state => {
    return state.homeHeadShow
  },
  getFoot: state => {
    return state.homeFootShow
  },
  getHeadJson: state => {
    return state.headJson
  }
}
// actions 可以包含任意异步操作
const actions = {
  homeHeadAct (context) {
    context.commit('showHomeHead')
  },
  editHomeJsonAct (context, value) {
    context.commit('editHomeJson', value)
  }
}
// mutations 更改 store 的状态
const mutations = {
  // 调用 store.commit('showHomeHead', 10)
  showHomeHead: state => {
    state.homeHeadShow = true
  },
  hideHomeHead: state => {
    state.homeHeadShow = false
  },
  showHomeFoot: state => {
    state.homeHeadShow = true
  },
  hideHomeFoot: state => {
    state.homeHeadShow = false
  },
  editHomeJson: (state, value) => {
    state.headJson = value
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

const state = {
  progStart: true,
  progValue: true,
  progDirect: 'front', // front/behind
  progFinish: true,
  progFail: true,
  activeNum: 1
}
// getters
const getters = {
  getActiveNum: state => {
    return state.activeNum
  },
  // 調用方法 store.getters.getHead
  getProgStart: state => {
    return state.progStart
  },
  getProgValue: state => {
    return state.progValue
  },
  getProgDirect: state => {
    return state.progDirect
  },
  getProgFinish: state => {
    return state.progFinish
  },
  getProgFail: state => {
    return state.progFail
  }
}

const actions = {
  changeActiveNum (context, num) {
    console.log(num)
    context.commit('changeActiveNum', num)
  },
  changeProgStart (context) {
    context.commit('changeProgStart')
  },
  changeProgValue (context) {
    context.commit('changeProgValue')
  },
  changeProgDirect (context) {
    context.commit('changeProgDirect')
  },
  changeProgFinish (context) {
    context.commit('changeProgFinish')
  },
  changeProgFail (context) {
    context.commit('changeProgFail')
  }
}
// mutations 更改 store 的状态
const mutations = {
  changeActiveNum: (state, num) => {
    state.activeNum = num
  },
  changeProgStart: state => {
    state.progStart = !state.progStart
  },
  changeProgValue: state => {
    state.progValue = !state.progValue
  },
  changeProgDirect: state => {
    state.progDirect = state.progDirect === 'behind' ? 'front' : 'behind'
  },
  changeProgFinish: state => {
    state.progFinish = !state.progFinish
  },
  changeProgFail: state => {
    state.progFail = !state.progFail
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

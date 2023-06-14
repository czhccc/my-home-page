import { createStore } from 'vuex'

import {
  WORK_STATUS,
} from './mutation-types'

const store = createStore({
  state() {
    return {
      isFancifulMode: false,
      isPoorMode: false,
      isShowWave: false,
      isShowWaveAndFish: false,
    }
  },
  mutations: { // mutations用于改变state中保存的值
    changeFancifulMode(state) {
      state.isFancifulMode = !state.isFancifulMode
      if (state.isFancifulMode) {
        state.isPoorMode = false
      }
    },
    changePoorMode(state) {
      state.isPoorMode = !state.isPoorMode
      if (state.isPoorMode) {
        state.isFancifulMode = false
      }
    },
    showWave(state) {
      state.isShowWave = !state.isShowWave
    },
    showWaveAndFish(state) {
      state.isShowWaveAndFish = !state.isShowWaveAndFish
    },
  },
  getters: { // getters用于对state中保存的值进行操作
    // aaa(state, getters) { // 本身无法接收传递的参数
    //   return function(bbb) { // 可以接收参数返回一个函数以作出某些限制
    //     // if (bbb...) {
    //     // 	console.log(bbb)
    //     // }
    //   }
    // }
  },
  actions: {
    // incrementAction(context, payload) {
    //   // 异步操作
    //   console.log(payload.messagee) // 传递的参数
    //   return new Promise((resolve, reject) => { // 可以返回promise
    //     axios.get("...").then(res => {
    //     	context.commit("increment", res.data)
    //       resolve({name: "why", age: 18})
    //   	}).catch(err => {
    //       reject(err)
    //     })
    //   })
    // }
  }
})

export default store
import { createStore } from 'vuex'

import {
  WORK_STATUS,
  INCREMENT_N 
} from './mutation-types'

const store = createStore({
  state() {
    return {
      counter: 100,
      age: 18,
      books: [
        {name: "Vuejs", price: 200, count: 3},
        {name: "Node", price: 100, count: 2}
      ],
      discount: 0.6,


      isConciseMode: true,
      isShowWave: false,
      isShowWaveAndFish: false,
    }
  },
  mutations: { // mutations用于改变state中保存的值
    [INCREMENT_N](state, n) {
      state.counter + n
    },

    changeConciseMode(state) {
      state.isConciseMode = !state.isConciseMode
    },
    showWave(state) {
      state.isShowWave = !state.isShowWave
    },
    showWaveAndFish(state) {
      state.isShowWaveAndFish = !state.isShowWaveAndFish
    },
  },
  getters: { // getters用于对state中保存的值进行操作
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    aaa(state, getters) { // 本身无法接收传递的参数
      return function(bbb) { // 可以接收参数返回一个函数以作出某些限制
        // if (bbb...) {
        // 	console.log(bbb)
        // }
      }
    }
  },
  actions: {
    incrementAction(context, payload) {
      // 异步操作
      console.log(payload.messagee) // 传递的参数
      return new Promise((resolve, reject) => { // 可以返回promise
        axios.get("...").then(res => {
        	context.commit("increment", res.data)
          resolve({name: "why", age: 18})
      	}).catch(err => {
          reject(err)
        })
      })
      
    }
  }
})

export default store
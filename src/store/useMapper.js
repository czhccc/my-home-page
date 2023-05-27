import { useStore, mapState, mapGetters } from 'vuex'
import { computed } from 'vue'

function useMapper(mapper, mapFn) {
  // 拿到stote
  const store = useStore()
  
  // 获取到对应的对象的functions: {name: function, age: function}
  const stateFns = mapFn(mapper)
  
  // 对数据进行转换
  const state = {}
  Object.keys(stateFns).forEach(fnKey => {
  	state[fnKey] = computed(stateFns[fnKey].bind({$store: store}))
  })
  return state
}

export function useState(mapper) {
  return useMapper(mapper, mapState)
}

export function useGetters(mapper) {
  return useMapper(mapper, mapGetters)
}
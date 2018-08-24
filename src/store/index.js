import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  // 简化
  State,
  Mutations
  // state: State,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // mutations: Mutations
})

import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN_IN } from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: null
  },
  mutations: {
    [LOGIN_IN](state, payload) {
      state.userName = payload.userName
    }
  }
})
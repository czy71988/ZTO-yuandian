import user from './modules/user'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  env: localStorage.getItem('ym_env')
}

const mutations = {
  UPDATE_ENV (state, data) {
    state.env = data
    localStorage.setItem('ym_env', data)
  }
}

const getters = {
  envName (state) {
    return state.env === 'pre' ? '测试' : '正式'
  }
}
export default new Vuex.Store({
  modules: {
    user
  },
  state,
  getters,
  mutations
})

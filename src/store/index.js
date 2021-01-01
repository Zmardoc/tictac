import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import game from './modules/game'
import { STORE } from './types'
import { callApi, resetModules } from './utils'

Vue.use(Vuex)

export const createStore = () => {
  return new Vuex.Store({
    actions: {
      [STORE.ACTIONS.RESET]: ({ commit, state }) => {
        resetModules(commit, state)
      },
      [STORE.ACTIONS.CALL_API]: (store, payload) => {
        return callApi({ ...payload, store })
      },
    },
    modules: {
      user,
      game,
    },
  })
}

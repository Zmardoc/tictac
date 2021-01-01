import { send } from '../../../services/fetch'
import { GAME } from './types'

export default {
  [GAME.ACTIONS.CONNECT_REQUEST]: ({ commit }, payload) => {
    send('connect', payload).then(response => {
      console.log(response.data)
      commit(GAME.MUTATIONS.CONNECT_RESPONSE, response.data)
    })
  },
  [GAME.ACTIONS.PLAY_REQUEST]: ({ commit }, payload) => {
    send('play', payload).then(response => {
      console.log(response.data)
      commit(GAME.MUTATIONS.PLAY_RESPONSE, response.data)
    })
  },
  [GAME.ACTIONS.CHECK_STATUS_REQUEST]: ({ commit }, payload) => {
    send('checkStatus', payload).then(response => {
      console.log(response.data)
      commit(GAME.MUTATIONS.CHECK_STATUS_RESPONSE, response.data)
    })
  },
  [GAME.ACTIONS.CHECK_LAST_STATUS_REQUEST]: ({ commit }, payload) => {
    send('checkLastStatus', payload).then(response => {
      console.log(response.data)
      commit(GAME.MUTATIONS.CHECK_LAST_STATUS_RESPONSE, response.data)
    })
  },
}

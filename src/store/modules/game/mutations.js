import { GAME } from './types'
import createState from './state'
import { resetState } from '../../utils'

export default {
  [GAME.MUTATIONS.CONNECT_RESPONSE]: (state, payload) => {
    state.gameMeta = payload
  },
  [GAME.MUTATIONS.PLAY_RESPONSE]: (state, payload) => {
    state.game = payload
  },
  [GAME.MUTATIONS.CHECK_STATUS_RESPONSE]: (state, payload) => {
    state.game = payload
  },
  [GAME.MUTATIONS.CHECK_LAST_STATUS_RESPONSE]: (state, payload) => {
    state.game = payload
  },
  [GAME.MUTATIONS.RESET]: state => {
    resetState(state, createState())
  },
}

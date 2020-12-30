import { USER } from './types'
import createState from './state'
import { resetState } from '../../utils'

export default {
  [USER.MUTATIONS.CREATE_USER_RESPONSE]: (state, payload) => {
    state.user = payload
  },
  [USER.MUTATIONS.RESET]: state => {
    resetState(state, createState())
  },
}

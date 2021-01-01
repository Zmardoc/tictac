import { send } from '../../../services/fetch'
import { USER } from './types'

export default {
  [USER.ACTIONS.CREATE_USER_REQUEST]: ({ commit }, payload) => {
    console.log('deje se neco?')
    send('user', payload).then(response => {
      console.log(response.data)
      commit(USER.MUTATIONS.CREATE_USER_RESPONSE, response.data)
    })
  },
}

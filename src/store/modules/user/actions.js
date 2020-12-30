import { USER } from './types'

export default {
  [USER.ACTIONS.CREATE_USER_REQUEST]: ({ commit }, payload) => {
    this.axios.post('user', payload).then(response => {
      console.log(response.data)
      commit(USER.MUTATIONS.CREATE_USER_RESPONSE, response.data)
    })
  },
}

import axios from 'axios'
import { config } from '../config'

const apiClient = axios.create({
  baseURL: config.backend.apiBaseUrl,
  timeout: 10000,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Referer': location.href,
  },
})
apiClient.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    if (401 === error.response.status) {
      //router.push('/')
      console.log(error)
    } else {
      return Promise.reject(error)
    }
  },
)
export const send = (path, payload) => {
  return apiClient.post(path, payload)
}

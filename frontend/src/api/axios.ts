import bareAxios from 'axios'
import { Platform } from 'react-native'
import useSettingsPersistentStore from '../stores/settingsPersistentStore'
import getApiUrl from '../utils/getApiUrl'

const axios = bareAxios.create({
  baseURL: getApiUrl(),
})

axios.interceptors.request.use(
  (config) => {
    const { token, user } = useSettingsPersistentStore.getState()
    if (!token) {
      return config
    }
    config.headers.Authorization = `Bearer ${token.token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axios }

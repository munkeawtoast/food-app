import bareAxios from 'axios'
import useSettingsPersistentStore from '../stores/settingsPersistentStore'
import getApiUrl from '../utils/getApiUrl'

const axiosInstance = bareAxios.create({
  baseURL: getApiUrl(),
})

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useSettingsPersistentStore.getState()
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

export { axiosInstance as axiosInstance }

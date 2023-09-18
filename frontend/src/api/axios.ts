import bareAxios from 'axios'
import useSettingsPersistentStore from '../stores/settingsPersistentStore'

const axios = bareAxios.create({
  baseURL: 'http://localhost:3500/web',
})

axios.interceptors.request.use(
  (config) => {
    const { user } = useSettingsPersistentStore()
    if (user) {
      config.headers.Authorization = ``
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axios }

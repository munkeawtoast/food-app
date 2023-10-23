import bareAxios from 'axios'
import { Platform } from 'react-native'
import useSettingsPersistentStore from '../stores/settingsPersistentStore'
import getApiUrl from '../utils/getApiUrl'

const axios = bareAxios.create({
  baseURL: getApiUrl(),
})

// axios.interceptors.request.use(
//   (config) => {
//     const { user } = useSettingsPersistentStore()
//     if (!user) {
//       return config
//     }
//     // config.headers.Authorization = `Bearer ${}`

//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

export { axios }

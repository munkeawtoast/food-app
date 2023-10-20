import bareAxios from 'axios'
import { Platform } from 'react-native'
import useSettingsPersistentStore from '../stores/settingsPersistentStore'

const axios = bareAxios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3333'
      : 'http://midBook.local:3333',
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

import { Platform } from 'react-native'
import { isDevice } from 'expo-device'

export default function () {
  if (isDevice) {
    return Platform.OS === 'android'
      ? 'http://192.168.1.110:3333'
      : 'http://midBook.local:3333'
  } else {
    return Platform.OS === 'android'
      ? 'http://10.0.2.2:3333'
      : 'http://midBook.local:3333'
  }
}

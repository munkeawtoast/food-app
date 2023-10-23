import { Platform } from 'react-native'

export default function () {
  return Platform.OS === 'android'
    ? 'http://10.0.2.2:3333'
    : 'http://midBook.local:3333'
}

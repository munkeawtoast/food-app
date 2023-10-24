import { View, Text, Image } from 'react-native'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'
import { LinearGradient } from 'expo-linear-gradient'
import { verticalScale } from '../../config/scale'
import { Fragment } from 'react'

const HomeScreen = () => {
  const { merchant, user } = useSettingsPersistentStore()
  const height = verticalScale(225)
  return (
    <Fragment>
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          position: 'absolute',
          height,
        }}
        source={require('../../../assets/home-background.png')}
      />
      <LinearGradient
        colors={['rgba(249, 250, 251, 0.3)', 'rgba(249, 250, 251, 1)']}
        style={{
          width: '100%',
          position: 'absolute',
          height,
        }}
      >
        <Text className="font-prompt7 text-4xl pt-20 absolute bottom-4 left-4">
          สวัสดี ${user!.username} !
        </Text>
      </LinearGradient>
    </Fragment>
  )
}
export default HomeScreen

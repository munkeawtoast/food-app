import type { FC } from 'react'
import img from 'frontend/assets/home-background.png'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

const HomeScreen: FC = () => {
  return (
    <View className="flex-1 flex-col">
      <StatusBar style="light" />
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          position: 'absolute',
          height: '35%',
        }}
        source={img}
      />
      <LinearGradient
        colors={['rgba(249, 250, 251, 0.3)', 'rgba(249, 250, 251, 1)']}
        style={{
          width: '100%',
          position: 'absolute',
          height: '35%',
        }}
      >
        <Text className="font-prompt7 text-4xl pt-20 absolute bottom-4 left-4">
          สวัสดี ${'username'} !
        </Text>
      </LinearGradient>
      <View className="flex-1">
        {/* top-padding  */}
        <View className="h-[35%]" />
      </View>
    </View>
  )
}

export default HomeScreen

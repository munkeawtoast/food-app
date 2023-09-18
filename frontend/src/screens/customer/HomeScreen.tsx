import type { FC } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import colors from 'tailwindcss/colors'
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../config/scale'
import { CaretUp } from 'phosphor-react-native'

const height = verticalScale(225)

const Padding: FC = () => <View style={{ height }} />

const FloatingInProgress = ({
  navigation,
}: {
  navigation: NavigationProp<any>
}) => {
  return (
    <View className="absolute bottom-0 w-full p-4">
      <Pressable
        onPress={() => {
          navigation.navigate('customer-in_progress')
        }}
      >
        <View className="bg-sky-100 h-16 items-center rounded-lg flex-row overflow-hidden shadow-black shadow-md">
          <Image
            source={require('../../../assets/home-background.png')}
            style={{
              width: horizontalScale(80),
              height: '100%',
              resizeMode: 'cover',
            }}
          />
          <View className="bg-current flex-1 h-full justify-center px-2 py-1">
            <Text
              className="font-prompt5 text-gray-700"
              style={{ fontSize: moderateScale(16) }}
            >
              จะทำเสร็จใน
            </Text>
          </View>
          <View className="p-0.5 flex-row items-center gap-2">
            <Text
              style={{
                color: colors.orange['500'],
                fontSize: moderateScale(24),
              }}
              className="font-prompt7"
            >
              1
            </Text>
            <Text className="font-prompt3">นาที</Text>
          </View>
          <View className=" rounded-full p-4">
            <CaretUp weight="bold" color={colors.gray['600']} />
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const Top: FC = () => {
  return (
    <>
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
          สวัสดี ${'username'} !
        </Text>
      </LinearGradient>
    </>
  )
}

const HomeScreen: FC = (props) => {
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView className="flex-1 flex-col" bounces={false}>
        <Top />
        <Padding />
        <View className="flex-1"></View>
      </ScrollView>
      <FloatingInProgress navigation={props.navigation} />
    </>
  )
}

export default HomeScreen

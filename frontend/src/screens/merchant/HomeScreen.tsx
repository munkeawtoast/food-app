import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'
import { LinearGradient } from 'expo-linear-gradient'
import { moderateScale, verticalScale } from '../../config/scale'
import { Fragment, useEffect } from 'react'
import useHistoryListingStore from '../../stores/merchant/historyStore'
import { AxiosError } from 'axios'

const Histories = () => {
  const { histories, fetch } = useHistoryListingStore()

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        await fetch()
      } catch (e) {
        const a = e as AxiosError
        console.log(a.toJSON())
      }
    }, 4000)
    fetch()
    return () => clearInterval(intervalId)
  }, [])
  return (
    <ScrollView>
      {histories.map((history, index) => {
        return (
          <Pressable key={history.id}>
            <View
              className={`flex-col py-1 px-2 ${
                index && 'border-t border-gray-300'
              }`}
            >
              <Text
                className="font-prompt4"
                style={{ fontSize: moderateScale(16) }}
              >
                {history.food_data.food_name} {history.food_data.price + ' บาท'}
              </Text>
              <View className="flex-row">
                {history.food_data.choices.map((choice) => (
                  <View key={choice.name} className="flex-col">
                    <Text className="font-prompt3 text-gray-600">
                      {choice.value as string}
                      {choice.price ? ' ' + choice.price + ' บาท ' : ''}
                    </Text>
                  </View>
                ))}
                <Text className="font-prompt3 text-gray-600">
                  {' '}
                  สั่งเมื่อ:{history.created_at.slice(11, 16)}
                </Text>
              </View>
            </View>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}
const HomeScreen = () => {
  const { user } = useSettingsPersistentStore()
  const height = verticalScale(225)
  return (
    <Fragment>
      <View className="h-56">
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
            สวัสดี {user?.username}!
          </Text>
        </LinearGradient>
      </View>
      <Text className="text-xl font-prompt5">ประวัติการขายในวันนี้</Text>
      <Histories />
    </Fragment>
  )
}
export default HomeScreen

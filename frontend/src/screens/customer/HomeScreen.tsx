import { useEffect, type FC } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import colors from 'tailwindcss/colors'
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../config/scale'
import { Button } from 'react-native-ui-lib'
import { CaretUp, QrCode } from 'phosphor-react-native'
import { CustomerBottomTabProps } from '../../navigator/types'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'
import useCustomerOrderStore from '../../stores/customer/customerOrdersStore'

const height = verticalScale(225)

const Padding: FC = () => <View style={{ height }} />

const FloatingInProgress: FC<
  CustomerBottomTabProps<'customer-bottom-home'>
> = ({ navigation, route }) => {
  const { myOrders, fetch } = useCustomerOrderStore()
  useEffect(() => {
    const intervalId = setInterval(async () => {
      await fetch()
      // console.log(myOrders)
    }, 3000)
    fetch()
    return () => clearInterval(intervalId)
  }, [myOrders])
  return (
    <>
      <Text>{myOrders.length}</Text>
      {myOrders.length > 0 && (
        <View className="absolute bottom-0 w-full p-4">
          <Pressable
            onPress={() => {
              navigation.navigate('customer-listing')
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
                  กำลังทำ
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
                  {myOrders.length}
                </Text>
                <Text className="font-prompt3">เมนู</Text>
              </View>
              <View className=" rounded-full p-4">
                <CaretUp weight="bold" color={colors.gray['600']} />
              </View>
            </View>
          </Pressable>
        </View>
      )}
    </>
  )
}

const Top: FC = () => {
  const { user, token } = useSettingsPersistentStore()
  useEffect(() => {
    console.log(token)
  }, [token])
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
        {user && (
          <Text className="font-prompt7 text-4xl pt-20 absolute bottom-4 left-4">
            สวัสดี {user.username} !
          </Text>
        )}
      </LinearGradient>
    </>
  )
}

const HomeScreen = ({
  navigation,
  route,
}: CustomerBottomTabProps<'customer-bottom-home'>) => {
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView className="flex-1 flex-col" bounces={false}>
        <Top />
        <Padding />
        <View className="items-center">
          <View className="w-11/12">
            <Button
              label="แสกน QR"
              onPress={() => navigation.navigate('customer-scan')}
              labelStyle={buttonStyles.labelStyle}
              style={{
                ...buttonStyles.style,
                backgroundColor: colors.orange['400'],
              }}
              iconSource={() => <QrCode weight="regular" color="white" />}
            />
          </View>
        </View>
      </ScrollView>
      <FloatingInProgress navigation={navigation} route={route} />
    </>
  )
}

export default HomeScreen

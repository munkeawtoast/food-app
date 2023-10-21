import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import { CookingPot } from 'phosphor-react-native'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import { AuthStackProps, RootStackParamList } from '../../navigator/types'
import { StatusBar } from 'expo-status-bar'
import { verticalScale } from '../../config/scale'
import { Button } from 'react-native-ui-lib'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'
import { useEffect } from 'react'
import bypass from '../../dev/bypass'

const LandingScreen = ({
  navigation,
  route,
}: AuthStackProps<'auth-landing'>) => {
  function bypassLogin() {
    if (!bypass.login) {
      return
    }
    const { target } = bypass.login
    navigation.navigate('auth-auth', {
      as: target,
    })
  }

  useEffect(() => {
    bypassLogin()
  }, [])
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="items-center font-mitr4">
          <View className="justify-start pt-4 items-end flex-row gap-2">
            <CookingPot size={40} weight="fill" />
            <Text className="text-black text-4xl translate-y-1 font-mitr5">
              Food App
            </Text>
          </View>
          <Image
            source={require('../../../assets/noodles.png')}
            style={{
              resizeMode: 'contain',
              height: 150,
              marginVertical: verticalScale(100),
            }}
          />
          <Text className="text-black font-mitr5 pt-4 text-4xl font-medium">
            motto ซักอย่าง
          </Text>
          <Text className="text-black text-xl font-prompt3 font-light">
            เพียงสแกนคิวอาร์ก็สั่งข้าวได้แล้ว
          </Text>
        </View>
        <View className="flex-1 items-center justify-end pb-20">
          <View className="w-80">
            {Object.entries({ merchant: 'แม่ค้า', customer: 'ลูกค้า' }).map(
              ([route, label]) => (
                <Button
                  key={route}
                  style={buttonStyles.style}
                  labelStyle={buttonStyles.labelStyle}
                  label={`เข้าในฐานะ${label}`}
                  backgroundColor={colors.sky[600]}
                  onPress={() => {
                    navigation.navigate('auth-auth', {
                      as: route as 'merchant' | 'customer',
                    })
                  }}
                />
              )
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default LandingScreen

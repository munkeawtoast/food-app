import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import { CookingPot } from 'phosphor-react-native'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import { RootStackParamList } from '../../navigator/types'
import { StatusBar } from 'expo-status-bar'

const LandingScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="items-center flex-1 font-mitr4">
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
              marginVertical: 120,
            }}
          />
          <Text className="text-black font-mitr5 pt-4 text-4xl font-medium">
            motto ซักอย่าง
          </Text>
          <Text className="text-black text-xl font-prompt3 font-light">
            เพียงสแกนคิวอาร์ก็สั่งข้าวได้แล้ว
          </Text>
        </View>

        <View className="items-center gap-y-2 pb-24">
          <Pressable
            android_ripple={{
              foreground: true,
              color: colors.sky['200'],
            }}
            onPress={() => {
              navigation.replace('customer')
            }}
            className="py-3 w-[80%] items-center rounded-xl bg-sky-600"
          >
            <Text className="font-prompt3 text-xl text-white">เข้าสู่แอพ</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  )
}

export default LandingScreen

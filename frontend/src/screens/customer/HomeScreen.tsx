import type { FC } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>customer home</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

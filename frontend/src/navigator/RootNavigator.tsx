import {
  Mitr_300Light,
  Mitr_400Regular,
  Mitr_500Medium,
  Mitr_600SemiBold,
  Mitr_700Bold,
} from '@expo-google-fonts/mitr'
import {
  Prompt_300Light,
  Prompt_400Regular,
  Prompt_500Medium,
  Prompt_600SemiBold,
  Prompt_700Bold,
} from '@expo-google-fonts/prompt'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { FC, useCallback } from 'react'
import { lightTheme } from '../config/theme'
import AuthNavigator from './AuthNavigator/AuthNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import CustomerBottomNavigator from './CustomerNavigator/CustomerBottomNavigator'

const RootStack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator: FC = () => {
  const [fontsLoaded] = useFonts({
    Mitr_300Light,
    Mitr_400Regular,
    Mitr_500Medium,
    Mitr_600SemiBold,
    Mitr_700Bold,
    Prompt_300Light,
    Prompt_400Regular,
    Prompt_500Medium,
    Prompt_600SemiBold,
    Prompt_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer theme={lightTheme} onReady={onLayoutRootView}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="auth"
      >
        <RootStack.Screen name="auth" component={AuthNavigator} />
        <RootStack.Screen name="customer" component={CustomerBottomNavigator} />
        <RootStack.Screen name="merchant" component={CustomerBottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator

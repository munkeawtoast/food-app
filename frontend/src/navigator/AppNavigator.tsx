import {
  Mitr_400Regular,
  Mitr_500Medium,
  Mitr_600SemiBold,
  Mitr_700Bold,
} from '@expo-google-fonts/mitr'
import {
  Prompt_400Regular,
  Prompt_400Regular_Italic,
  Prompt_500Medium,
  Prompt_500Medium_Italic,
  Prompt_600SemiBold,
  Prompt_600SemiBold_Italic,
  Prompt_700Bold,
  Prompt_700Bold_Italic,
} from '@expo-google-fonts/prompt'
import { useFonts } from 'expo-font'
import { FC, useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import CustomerNavigator from './CustomerNavigator'
import { lightTheme } from '../config/theme'

const AppNavigator: FC = () => {
  const [fontsLoaded] = useFonts({
    // Mitr_200ExtraLight,
    // Mitr_300Light,
    Mitr_400Regular,
    Mitr_500Medium,
    Mitr_600SemiBold,
    Mitr_700Bold,
    // Prompt_100Thin,
    // Prompt_100Thin_Italic,
    // Prompt_200ExtraLight,
    // Prompt_200ExtraLight_Italic,
    // Prompt_300Light,
    // Prompt_300Light_Italic,
    Prompt_400Regular,
    Prompt_400Regular_Italic,
    Prompt_500Medium,
    Prompt_500Medium_Italic,
    Prompt_600SemiBold,
    Prompt_600SemiBold_Italic,
    Prompt_700Bold,
    Prompt_700Bold_Italic,
    // Prompt_800ExtraBold,
    // Prompt_800ExtraBold_Italic,
    // Prompt_900Black,
    // Prompt_900Black_Italic,
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
      <CustomerNavigator />
    </NavigationContainer>
  )
}
export default AppNavigator

import type { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ShopScreen from './screens/user/ShopScreen';
import OrderStatusScreen from './screens/user/OrderStatusScreen';
import { Horse } from 'phosphor-react-native';
import { Text } from 'react-native';
import { useFonts } from 'expo-font'
import {
  Prompt_100Thin,
  Prompt_100Thin_Italic,
  Prompt_200ExtraLight,
  Prompt_200ExtraLight_Italic,
  Prompt_300Light,
  Prompt_300Light_Italic,
  Prompt_400Regular,
  Prompt_400Regular_Italic,
  Prompt_500Medium,
  Prompt_500Medium_Italic,
  Prompt_600SemiBold,
  Prompt_600SemiBold_Italic,
  Prompt_700Bold,
  Prompt_700Bold_Italic,
  Prompt_800ExtraBold,
  Prompt_800ExtraBold_Italic,
  Prompt_900Black,
  Prompt_900Black_Italic,
} from '@expo-google-fonts/prompt';
import {
  Mitr_200ExtraLight,
  Mitr_300Light,
  Mitr_400Regular,
  Mitr_500Medium,
  Mitr_600SemiBold,
  Mitr_700Bold,
} from '@expo-google-fonts/mitr';



import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'
import AppLoading from 'expo-app-loading';

const fullConfig = resolveConfig(tailwindConfig)

const Tab = createBottomTabNavigator()
const UserTab = createBottomTabNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    Mitr_200ExtraLight,
    Mitr_300Light,
    Mitr_400Regular,
    Mitr_500Medium,
    Mitr_600SemiBold,
    Mitr_700Bold,
    Prompt_100Thin,
    Prompt_100Thin_Italic,
    Prompt_200ExtraLight,
    Prompt_200ExtraLight_Italic,
    Prompt_300Light,
    Prompt_300Light_Italic,
    Prompt_400Regular,
    Prompt_400Regular_Italic,
    Prompt_500Medium,
    Prompt_500Medium_Italic,
    Prompt_600SemiBold,
    Prompt_600SemiBold_Italic,
    Prompt_700Bold,
    Prompt_700Bold_Italic,
    Prompt_800ExtraBold,
    Prompt_800ExtraBold_Italic,
    Prompt_900Black,
    Prompt_900Black_Italic,
  });
  return (
    fontsLoaded
      ? (
        <NavigationContainer>
          <UserNavigator />
        </NavigationContainer>
      )
      : <AppLoading />

  )
}

const UserNavigator: FC = () => {
  return (
    <UserTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#aaa',
        headerTitleStyle: {
          fontFamily: 'Prompt_400Regular',

        }
      }}
    >
      <UserTab.Screen
        name="shop"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Horse color={color} size={size} weight={focused ? 'duotone' : 'regular'} />
          )
        }}
        component={ShopScreen} />
      <UserTab.Screen
        name="orderStatus"

        component={OrderStatusScreen} />
    </UserTab.Navigator>
  )
}


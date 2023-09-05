import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Horse } from 'phosphor-react-native'
import type { FC } from 'react'
import colors from 'tailwindcss/colors'
import MaskedTest from '../screens/customer/MaskedTest'
import OrderStatusScreen from '../screens/customer/OrderStatusScreen'
import QrScanScreen from '../screens/customer/QrScanScreen'
import ShopScreen from '../screens/customer/ShopScreen'

const UserTab = createBottomTabNavigator()

const CustomerNavigator: FC = () => {
  return (
    <UserTab.Navigator
      initialRouteName="home"
      
      screenOptions={{
        // tabBarActiveTintColor: colors.red['500'],
        // tabBarInactiveTintColor: colors.gray['400'],
        headerTitleStyle: {
          fontFamily: 'Prompt_400Regular',
        },
      }}
    >
      <UserTab.Screen
        name="shop"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Horse
              color={color}
              size={size}
              weight={focused ? 'duotone' : 'regular'}
            />
          ),
        }}
        component={ShopScreen}
      />
      <UserTab.Screen name="orderStatus" component={OrderStatusScreen} />
      <UserTab.Screen name="qr" component={QrScanScreen} />
      <UserTab.Screen name="masked" component={MaskedTest} />
    </UserTab.Navigator>
  )
}

export default CustomerNavigator

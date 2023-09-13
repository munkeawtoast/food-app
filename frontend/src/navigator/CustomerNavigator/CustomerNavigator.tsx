import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Horse,
  Fish,
  IconProps as PhosphorIconProps,
  House,
  QrCode,
} from 'phosphor-react-native'
import { memo, type FC } from 'react'
import MaskedTest from '../../screens/customer/MaskedTest'
import OrderStatusScreen from '../../screens/customer/OrderStatusScreen'
import QrScanScreen from '../../screens/customer/QrScanScreen'
import ShopScreen from '../../screens/customer/ShopScreen'
import colors from 'tailwindcss/colors'
import { View } from 'react-native'
import ShopNavigator from './ShopNavigator'
import { IconProps } from 'react-native-elements'
import HomeScreen from '../../screens/customer/HomeScreen'

const UserTab = createBottomTabNavigator()

const getIcon = (Icon: FC<PhosphorIconProps> | null) => {
  // eslint-disable-next-line react/display-name
  return (props: { focused: boolean; color: string; size: number }) =>
    Icon ? (
      <Icon
        color={props.color}
        size={props.size}
        weight={props.focused ? 'duotone' : 'regular'}
      />
    ) : undefined
}

const CustomerNavigator: FC = () => {
  return (
    <UserTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Mitr_400Regular',
        },
      }}
      initialRouteName="home"
    >
      <UserTab.Screen
        name="customer-home"
        component={HomeScreen}
        options={{
          tabBarIcon: getIcon(House),
          title: 'หน้าหลัก',
        }}
      />
      <UserTab.Screen
        name="customer-qr"
        component={QrScanScreen}
        options={{
          tabBarIcon: getIcon(QrCode),
          tabBarShowLabel: false,
          headerShown: false,
          title: 'สแกน QR',
        }}
      />
      <UserTab.Screen
        name="customer-shop"
        options={{
          tabBarIcon: getIcon(Fish),
          title: 'ร้านค้า',
        }}
        component={ShopNavigator}
      />
      <UserTab.Screen
        name="orderStatus"
        options={{
          tabBarIcon: getIcon(Fish),
        }}
        component={OrderStatusScreen}
      />
      <UserTab.Screen name="masked" component={MaskedTest} />
    </UserTab.Navigator>
  )
}

export default CustomerNavigator

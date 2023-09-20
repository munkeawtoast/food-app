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
import QueueNavigator from '../CustomerNavigator/QueueNavigator'
import { CustomerStackProps } from '../types'

const CustomerTab = createBottomTabNavigator()

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

const CustomerBottomNavigator: FC = ({
  navigation,
  route,
}: CustomerStackProps<'customer-bottom'>) => {
  return (
    <CustomerTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <CustomerTab.Screen
        name="customer-bottom-home"
        component={HomeScreen}
        options={{
          tabBarIcon: getIcon(House),
          title: 'หน้าหลัก',
        }}
      />
      <CustomerTab.Screen
        name="customer-bottom-shop"
        options={{
          tabBarIcon: getIcon(Fish),
          title: 'ร้านค้า',
        }}
        component={ShopNavigator}
      />
      <CustomerTab.Screen
        name="สั่งอาหาร"
        options={{
          tabBarIcon: getIcon(Fish),
        }}
        component={QueueNavigator}
      />
    </CustomerTab.Navigator>
  )
}

export default CustomerBottomNavigator

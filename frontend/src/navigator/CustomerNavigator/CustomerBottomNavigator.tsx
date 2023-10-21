import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Horse,
  Fish,
  IconProps as PhosphorIconProps,
  House,
  QrCode,
} from 'phosphor-react-native'
import { type FC } from 'react'
import DontKnowYet from './DontKnowNavigator'
import HomeScreen from '../../screens/customer/HomeScreen'
import ShopNavigator from './ShopNavigator'
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

const CustomerBottomNavigator = ({
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
        component={DontKnowYet}
      />
    </CustomerTab.Navigator>
  )
}

export default CustomerBottomNavigator

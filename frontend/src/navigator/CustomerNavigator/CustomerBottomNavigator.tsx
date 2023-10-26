import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Horse,
  Fish,
  IconProps as PhosphorIconProps,
  House,
  QrCode,
  Gear,
} from 'phosphor-react-native'
import { type FC } from 'react'
import DontKnowYet from './DontKnowNavigator'
import HomeScreen from '../../screens/customer/HomeScreen'
import ShopNavigator from './ShopNavigator'
import {
  CustomerBottomTabParamList,
  CustomerStackParamList,
  CustomerStackProps,
} from '../types'
import SettingsScreen from '../../screens/shared/SettingsScreen'
import { defaultScreenOptions } from '../../config/theme'
import HistoryScreen from '../../screens/customer/HistoryScreen'

const CustomerTab = createBottomTabNavigator<CustomerBottomTabParamList>()

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
const CustomerBottomNavigator = () => {
  return (
    <CustomerTab.Navigator
      screenOptions={{
        headerShown: false,
        ...defaultScreenOptions,
      }}
      initialRouteName="customer-bottom-home"
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
        name="customer-bottom-history"
        options={{
          headerShown: true,
          title: 'ประวัติการซื้อ',
          tabBarIcon: getIcon(Fish),
        }}
        component={HistoryScreen}
      />
      <CustomerTab.Screen
        name="customer-bottom-settings"
        options={{
          title: 'ตั้งค่า',
          tabBarIcon: getIcon(Gear),
          ...defaultScreenOptions,
          headerShown: true,
        }}
        initialParams={{
          for: 'customer',
        }}
        component={SettingsScreen}
      />
    </CustomerTab.Navigator>
  )
}

export default CustomerBottomNavigator

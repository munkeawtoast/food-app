import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/merchant/HomeScreen'
import QueueList, {
  useTimedQueueGetter,
} from '../../screens/merchant/QueueList'
import colors from 'tailwindcss/colors'
import MerchantLogin from '../../screens/merchant/MerchantLogin'
import MerchantFoodNavigator from './MerchantFoodNavigator'
import SettingsScreen from '../../screens/shared/SettingsScreen'
import {
  Gear,
  House,
  List,
  ListChecks,
  ListDashes,
  IconProps as PhosphorIconProps,
} from 'phosphor-react-native'
import { FC } from 'react'
import { ListItem } from 'react-native-ui-lib'

const BottomBar = createBottomTabNavigator()

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

const MerchantNavigator = () => {
  const [queue, caller] = useTimedQueueGetter()
  return (
    <BottomBar.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.sky[900] },
        headerTitleStyle: {
          fontFamily: 'Prompt_400Regular',
          color: colors.white,
        },
      }}
    >
      <BottomBar.Screen
        name="merchant-home"
        component={HomeScreen}
        options={{ title: 'หน้าหลัก', tabBarIcon: getIcon(House) }}
      />
      <BottomBar.Screen
        name="merchant-food"
        component={MerchantFoodNavigator}
        options={{
          headerShown: false,
          title: 'เมนู',
          tabBarIcon: getIcon(ListDashes),
        }}
      />
      <BottomBar.Screen
        name="merchant-queue_screen"
        component={QueueList}
        options={{
          title: 'ดูคิว',
          tabBarBadge: queue.length || undefined,
          tabBarBadgeStyle: {
            backgroundColor: colors.orange['500'],
            color: colors.white,
          },
          tabBarIcon: getIcon(ListChecks),
        }}
      />
      <BottomBar.Screen
        name="merchant-settings"
        component={SettingsScreen}
        options={{
          title: 'ตั้งค่า',
          tabBarIcon: getIcon(Gear),
        }}
        initialParams={{
          for: 'merchant',
        }}
      />
    </BottomBar.Navigator>
  )
}

export default MerchantNavigator

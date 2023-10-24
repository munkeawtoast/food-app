import CustomerBottomNavigator from './CustomerBottomNavigator'
import QrScanScreen from '../../screens/customer/QrScanScreen'
import InProgressScreen from '../../screens/customer/InProgressScreen'
import { createStackNavigator } from '@react-navigation/stack'
import {
  animationFromBottom,
  defaultScreenOptions,
  lightTheme,
} from '../../config/theme'
import HistoryScreen from '../../screens/customer/HistoryScreen'
import { CustomerStackParamList, RootNavigationProps } from '../types'
import ShopNavigator from './ShopNavigator'

const Stack = createStackNavigator<CustomerStackParamList>()

const CustomerNavigator = ({
  route,
  navigation,
}: RootNavigationProps<'customer'>) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...animationFromBottom,
        ...defaultScreenOptions,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="customer-bottom"
        component={CustomerBottomNavigator}
      />
      {/* !  */}
      <Stack.Screen name="customer-in_progress" component={HistoryScreen} />
      {/* <Stack.Screen name="customer-in_progress" component={InProgressScreen} /> */}

      <Stack.Screen
        name="customer-scan"
        options={{
          headerShown: true,
          title: 'QR Code Scanner',
        }}
        component={QrScanScreen}
      />
      <Stack.Screen
        name="customer-shop"
        options={{
          title: 'ร้านค้า',
          headerShown: false,
        }}
        component={ShopNavigator}
      />
    </Stack.Navigator>
  )
}

export default CustomerNavigator

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
import { RootNavigationProps } from '../types'

const Stack = createStackNavigator()

const CustomerNavigator = ({
  navigation,
  route,
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

      <Stack.Screen name="customer-qr" component={QrScanScreen} />
    </Stack.Navigator>
  )
}

export default CustomerNavigator

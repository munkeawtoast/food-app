import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import CustomerBottomNavigator from './CustomerBottomNavigator'
import QrScanScreen from '../../screens/customer/QrScanScreen'

const Stack = createNativeStackNavigator()

const CustomerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="customer-bottom"
        component={CustomerBottomNavigator}
      />
      <Stack.Screen name="customer-qr" component={QrScanScreen} />
    </Stack.Navigator>
  )
}
export default CustomerNavigator

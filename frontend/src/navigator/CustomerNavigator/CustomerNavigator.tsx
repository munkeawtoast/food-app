import CustomerBottomNavigator from './CustomerBottomNavigator'
import QrScanScreen from '../../screens/customer/QrScanScreen'
import FoodInfoScreen from '../../screens/customer/FoodInfoScreen'

import { createStackNavigator } from '@react-navigation/stack'
import { animationFromBottom, defaultScreenOptions } from '../../config/theme'
import ListingScreen from '../../screens/customer/ListingScreen'
import { CustomerStackParamList } from '../types'
import ShopNavigator from './ShopNavigator'
import useCustomerOrderStore from '../../stores/customer/customerOrdersStore'

const Stack = createStackNavigator<CustomerStackParamList>()

const CustomerNavigator = () => {
  const { orders } = useCustomerOrderStore()
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
      <Stack.Screen
        name="customer-info"
        options={({ route }) => ({
          title: orders.find((order) => order.id === route.params.id)?.food_data
            .food_name,
        })}
        component={FoodInfoScreen}
      />
      <Stack.Screen
        name="customer-listing"
        options={{
          title: 'รายการที่กำลังทำ',
        }}
        component={ListingScreen}
      />

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

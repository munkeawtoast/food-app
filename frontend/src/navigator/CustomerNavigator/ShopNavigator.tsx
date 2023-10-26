import OrderQueueView from '../../screens/customer/Queue'
import ShopScreen from '../../screens/customer/ShopScreen'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { CustomerShopStackParamList } from '../types'
import { defaultScreenOptions } from '../../config/theme'
import useCurrentShopStore from '../../stores/customer/currentShopStore'
import PaymentView from '../../screens/customer/PaymentView'
const Stack = createStackNavigator<CustomerShopStackParamList>()

const ShopNavigator = () => {
  const { shop } = useCurrentShopStore()
  return (
    <Stack.Navigator
      initialRouteName="customer-shop-home"
      screenOptions={{
        ...defaultScreenOptions,
      }}
    >
      <Stack.Screen
        name="customer-shop-home"
        options={{
          title: shop ? 'ร้าน' + shop?.name : 'กำลังโหลด',
        }}
        component={ShopScreen}
      />
      <Stack.Screen name="customer-shop-queue" component={OrderQueueView} />
      <Stack.Screen
        name="customer-shop-payment"
        options={{
          title: 'ชำระเงินสำเร็จ',
          headerLeft: () => null,
        }}
        component={PaymentView}
      />
    </Stack.Navigator>
  )
}

export default ShopNavigator

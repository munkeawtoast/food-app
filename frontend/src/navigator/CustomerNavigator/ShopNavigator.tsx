import OrderQueueView from '../../screens/customer/Queue'
import ShopScreen from '../../screens/customer/ShopScreen'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { CustomerShopStackParamList } from '../types'
import { defaultScreenOptions } from '../../config/theme'
const Stack = createStackNavigator<CustomerShopStackParamList>()

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="customer-shop-home"
      screenOptions={{
        ...defaultScreenOptions,
      }}
    >
      <Stack.Screen name="customer-shop-home" component={ShopScreen} />
      <Stack.Screen name="customer-shop-queue" component={OrderQueueView} />
    </Stack.Navigator>
  )
}

export default ShopNavigator

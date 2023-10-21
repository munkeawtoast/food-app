import OrderQueueView from '../../screens/customer/Queue'
import ShopScreen from '../../screens/customer/ShopScreen'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { CustomerBottomTabProps } from '../types'
import { defaultScreenOptions } from '../../config/theme'
const Stack = createStackNavigator()

const ShopNavigator = ({
  navigation,
  queue,
}: CustomerBottomTabProps<'customer-bottom-shop'>) => {
  return (
    <Stack.Navigator
      initialRouteName="Order"
      screenOptions={{
        ...defaultScreenOptions,
      }}
    >
      <Stack.Screen
        options={({ route }) => ({ headerShown: true, title: 'a' })}
        name="Order"
        component={ShopScreen}
      />
      <Stack.Screen name="Queue" component={OrderQueueView} />
    </Stack.Navigator>
  )
}

export default ShopNavigator

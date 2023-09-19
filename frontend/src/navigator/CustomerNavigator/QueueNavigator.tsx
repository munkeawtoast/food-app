import OrderQueueView from './../../screens/customer/Queue'
import OrderStatusScreen from './../../screens/customer/OrderStatusScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator()

const QueueNavigator = (navigation) => {
  return (
      <Stack.Navigator
        initialRouteName="Order"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Order"
          component={OrderStatusScreen}
        />
        <Stack.Screen name="Queue" component={OrderQueueView} />
      </Stack.Navigator>
  )
}

export default QueueNavigator

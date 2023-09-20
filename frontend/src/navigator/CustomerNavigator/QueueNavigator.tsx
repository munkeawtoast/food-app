import OrderQueueView from './../../screens/customer/Queue'
import OrderStatusScreen from './../../screens/customer/OrderStatusScreen'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator()

const QueueNavigator = ({ navigation, queue }) => {
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

import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Foods from '../../screens/merchant/Foods'
import FoodsDetail from '../../screens/merchant/FoodsDetail'
import AddFood from '../../screens/merchant/AddFood'

const Nav = createStackNavigator()
export default function MerchantFoodNavigator() {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="merchant-food_page" component={Foods} />
      <Nav.Screen name="merchant-food_detail" component={FoodsDetail} />
      <Nav.Screen name="merchant-add_food" component={AddFood} />
    </Nav.Navigator>
  )
}

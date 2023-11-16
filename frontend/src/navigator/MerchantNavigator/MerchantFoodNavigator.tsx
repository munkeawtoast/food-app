import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Foods from '../../screens/merchant/Foods'
import FoodsDetail from '../../screens/merchant/FoodsDetail'
import AddFood from '../../screens/merchant/AddFood'
import { defaultScreenOptions } from '../../config/theme'

const Nav = createStackNavigator()
export default function MerchantFoodNavigator() {
  return (
    <Nav.Navigator
      screenOptions={{
        ...defaultScreenOptions,
      }}
    >
      <Nav.Screen
        name="merchant-food_page"
        component={Foods}
        options={{
          title: 'เมนู',
        }}
      />
      <Nav.Screen
        name="merchant-food_detail"
        component={FoodsDetail}
        options={{
          title: 'รายละเอียดเมนู',
        }}
      />
      <Nav.Screen
        name="merchant-add_food"
        options={{
          title: 'เพิ่มเมนู',
        }}
        component={AddFood}
      />
    </Nav.Navigator>
  )
}

import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { CustomerShopStackProps } from '../../navigator/types'

const PaymentView: FC<CustomerShopStackProps<'customer-shop-payment'>> = ({
  route,
}) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  )
}

export default PaymentView

import type { FC } from 'react'
import { View, Text } from 'react-native'
import useTestStore from '../../stores/testStore'

const OrderStatusScreen: FC = () => {
  const { addABear, bears } = useTestStore()
  return (
    <View>
      <Text>{bears} </Text>
    </View>
  )
}

export default OrderStatusScreen

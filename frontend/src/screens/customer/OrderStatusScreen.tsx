import type { FC } from 'react'
import { View, Text } from 'react-native'
import useTestPersistentStore from '../../stores/testPersistentStore'

const OrderStatusScreen: FC = () => {
  const { addABear, bears } = useTestPersistentStore()
  return (
    <View>
      <Text>{bears} test</Text>
    </View>
  )
}

export default OrderStatusScreen

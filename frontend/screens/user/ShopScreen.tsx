import Slider from '@react-native-community/slider'
import type { FC } from 'react'
import { View, Text, Button } from 'react-native'
import useTestStore from '../../stores/testStore'

const ShopScreen: FC = () => {
  const { addABear, bears } = useTestStore()
  return (
    <View>
      <Slider step={1} tapToSeek minimumValue={0} maximumValue={4} />
      <Text>{bears} </Text>
      <Button title='add bear' onPress={addABear} />
    </View>
  )
}

export default ShopScreen

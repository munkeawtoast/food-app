import Slider from '@react-native-community/slider'
import type { FC } from 'react'
import { View, Text, Button } from 'react-native'
import useTestPersistentStore from '../../stores/testPersistentStore'

const IDontKnow: FC = () => {
  const { addABear, bears } = useTestPersistentStore()
  return (
    <View>
      <Slider step={1} tapToSeek minimumValue={0} maximumValue={4} />
      <Text>{bears} </Text>
      <Button title="add bear" onPress={addABear} />
    </View>
  )
}

export default IDontKnow

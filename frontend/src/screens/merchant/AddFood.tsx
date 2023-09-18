import { View, Text, TextInput } from 'react-native'
import defaultScreenOptions from '../../config/theme'
import { useState } from 'react'
const AddFood = () => {
  const [foodName, setFoodName] = useState<string>()
  return (
    <View className="flex-1 justify-center items-center">
      <Text>ชื่อเมนู</Text>
      <TextInput
        className="border w-48"
        onChangeText={setFoodName}
        value={foodName}
      ></TextInput>
      <Text>ชื่ออาหาร</Text>
      <TextInput
        className="border w-48"
        onChangeText={setFoodName}
        value={foodName}
      ></TextInput>
    </View>
  )
}
export default AddFood

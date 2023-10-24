import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
// import { TextField } from 'react-native-ui-lib'

const AddFood = () => {
  const [foodName, setFoodName] = useState('')

  return (
    <View>
      <Text>เพิ่มเมนู</Text>
      <TextInput
        className="border"
        value="foodName"
        onChangeText={setFoodName}
      />
    </View>
  )
}

export default AddFood

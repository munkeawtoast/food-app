// import { View, Text, TextInput } from 'react-native'

import { useState } from 'react'
import { Text, TextField, View } from 'react-native-ui-lib'
import textInputStyles from '../../components/ui/styles/textInputStyles'
import { Keyboard, TouchableNativeFeedback } from 'react-native'

const AddFood = () => {
  const [foodName, setFoodName] = useState<string>()
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View center>
        <View width={'90%'}>
          <TextField
            onChangeText={setFoodName}
            value={foodName}
            label="ชื่อเมนู"
            placeholder="ชื่อเมนู"
            fieldStyle={textInputStyles.fieldStyle}
            labelStyle={textInputStyles.labelStyle}
            style={{ fontFamily: 'Prompt_400Regular' }}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
    // <View className="flex-1 justify-center items-center">
    //   <Text>ชื่อเมนู</Text>
    //   <TextInput
    //     className="border w-48"
    //     onChangeText={setFoodName}
    //     value={foodName}
    //   />
    //   <Text>ชื่ออาหาร</Text>
    //   <TextInput
    //     className="border w-48"
    //     onChangeText={setFoodName}
    //     value={foodName}
    //   />
    // </View>
  )
}
export default AddFood

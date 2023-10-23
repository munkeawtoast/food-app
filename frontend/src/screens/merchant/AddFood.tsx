// import { View, Text, TextInput } from 'react-native'

import { useState } from 'react'
import { Text, TextField, View, Card } from 'react-native-ui-lib'
import { Image } from 'react-native'
import textInputStyles from '../../components/ui/styles/textInputStyles'
import { Keyboard, TouchableNativeFeedback } from 'react-native'
import { Food } from '../../models/food'
// import getFood from '../../api/merchant/getFood'
import useFoodStore from '../../stores/foodStore'

const FoodLoop = ({ foods }: { foods: Food[] }) => {
  if (!foods) {
    return (
      <View className="w-32 h-28 flex m-4">
        <View className="flex-grow bg-slate-400 rounded-3xl"></View>
        <View className="absolute bg-gray-300 w-32 h-8 bottom-0 rounded-b-3xl flex-row justify-center items-center">
          <Text>Foodname</Text>
          <Text className="text-4xl bottom-1">&#187;</Text>
        </View>
      </View>
    )
  } else {
    return foods.map((food) => (
      <View className="w-32 h-28 flex-col m-4" key={food.id}>
        <Image
          className="flex-grow rounded-3x"
          source={{ uri: food['image-url'] }}
        />
        {/* <View className="flex-grow bg-slate-400 rounded-3xl"></View> */}
        <View className="absolute bg-gray-300 w-32 h-8 bottom-0 rounded-b-3xl flex-row justify-center items-center">
          <Text>{food.food_name}</Text>
          <Text className="text-4xl bottom-1">&#187;</Text>
        </View>
      </View>
    ))
  }
}

export default function AddFood() {
  const { foods } = useFoodStore()

  const [foodName, setFoodName] = useState<string>()
  return (
    // <TouchableNativeFeedback onPress={Keyboard.dismiss}>
    <View className="m-4">
      {/* <View width={'90%'}>
        <TextField
          onChangeText={setFoodName}
          value={foodName}
          label="ชื่อเมนู"
          placeholder="ชื่อเมนู"
          fieldStyle={textInputStyles.fieldStyle}
          labelStyle={textInputStyles.labelStyle}
          style={{ fontFamily: 'Prompt_400Regular' }}
        />
      </View> */}
      <FoodLoop foods={foods}></FoodLoop>
    </View>
    // </TouchableNativeFeedback>
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

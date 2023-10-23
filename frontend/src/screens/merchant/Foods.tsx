// import { View, Text, TextInput } from 'react-native'

import { FC, useEffect, useState } from 'react'
import { Text, TextField, View, Card } from 'react-native-ui-lib'
import { Image, Pressable } from 'react-native'
import textInputStyles from '../../components/ui/styles/textInputStyles'
import { Keyboard, TouchableNativeFeedback } from 'react-native'
import { Food } from '../../models/food'
// import getFood from '../../api/merchant/getFood'
import useFoodStore from '../../stores/foodStore'
import getApiUrl from '../../utils/getApiUrl'

const FoodLoop: FC<{ foods: Food[]; navigation: any }> = ({
  foods,
  navigation,
}) => {
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
      <Pressable
        key={food.id}
        onPress={() => navigation.navigate('merchant-food_detail', food)}
      >
        <View className="w-32 h-28 flex-col m-4 rounded-3x">
          <Image
            className="flex-grow"
            source={{ uri: getApiUrl() + '/uploads/menu/' + food.id + '.jpg' }}
          />
          {/* <View className="flex-grow bg-slate-400 rounded-3xl"></View> */}
          <View className="absolute bg-gray-300 w-32 h-8 bottom-0 rounded-b-3xl flex-row justify-center items-center">
            <Text>{food.food_name}</Text>
            <Text className="text-4xl bottom-1">&#187;</Text>
          </View>
        </View>
      </Pressable>
    ))
  }
}

export default function AddFood({ navigation }) {
  const { foods, fetch } = useFoodStore()
  useEffect(() => {
    fetch()
  }, [])
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
      <FoodLoop foods={foods} navigation={navigation}></FoodLoop>
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

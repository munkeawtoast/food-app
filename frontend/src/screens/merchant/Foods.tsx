// import { View, Text, TextInput } from 'react-native'

import { FC, useEffect, useState } from 'react'
import { Text, TextField, View, Card, Button } from 'react-native-ui-lib'
import { Image, Pressable, StyleSheet } from 'react-native'
import textInputStyles from '../../components/ui/styles/textInputStyles'
import { Keyboard, TouchableNativeFeedback } from 'react-native'
import { Food } from '../../models/food'
// import getFood from '../../api/merchant/getFood'
import useFoodStore from '../../stores/foodStore'
import getApiUrl from '../../utils/getApiUrl'
import colors from 'tailwindcss/colors'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'

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
        className="m-2"
      >
        <View className="w-28 h-24 flex-col rounded-3xl overflow-hidden">
          <Image
            source={{ uri: getApiUrl() + '/uploads/menu/' + food.id + '.jpg' }}
            style={{
              width: '100%',
              height: 60,
            }}
          />
          {/* <View className="flex-grow bg-slate-400 rounded-3xl"></View> */}
          <View className=" bg-gray-300 w-auto h-9 bottom-0 flex-row justify-center items-center">
            <Text>{food.food_name}</Text>
            <Text className="text-4xl bottom-1">&#187;</Text>
          </View>
        </View>
      </Pressable>
    ))
  }
}

export default function MerchantFood({ navigation }) {
  const { foods, fetch } = useFoodStore()
  useEffect(() => {
    fetch()
    const intervalId = setInterval(async () => {
      await fetch()
    }, 10000)
    return () => clearInterval(intervalId)
  }, [])
  // useEffect(() => {
  //   fetch()
  // }, [])
  const [foodName, setFoodName] = useState<string>()
  return (
    // <TouchableNativeFeedback onPress={Keyboard.dismiss}>
    <View className="gap-4 flex-1">
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
      <View className="w-auto h-auto flex-row flex-wrap justify-center">
        <FoodLoop foods={foods} navigation={navigation} />
      </View>
      <View className="px-4 pt-4">
        <Button
          label="เพิ่มเมนู"
          style={{
            paddingVertical: 16,
          }}
          labelStyle={{
            ...buttonStyles.labelStyle,
          }}
          onPress={() => {
            navigation.navigate('merchant-add_food')
          }}
          backgroundColor={colors.sky['600']}
        />
      </View>
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

const styles = StyleSheet.create({
  foodLoopContainer: {
    gap: 4,
  },
})

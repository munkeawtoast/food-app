import { View, Text, TextInput, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
// import { TextField } from 'react-native-ui-lib'
import createFood from '../../api/merchant/createFood'
const FoodOptions = () => {
  const [optionName, setOptionName] = useState<string>()
  const [isSingle, setIsSingle] = useState<boolean>(false)
  const [isRequired, setIsRequired] = useState<boolean>(false)
  return (
    <View className="w-full h-fit border rounded-md p-2 my-2 g-2 flex-wrap">
      <Text>ชื่อตัวเลือก</Text>
      <View className="flex-row">
        <TextInput
          className="border w-4/12 mr-2"
          value={optionName}
          onChangeText={setOptionName}
        />
        <View className="flex-row w-2/6 gap-2 ">
          <Pressable>
            <Text>เลือกอันเดียว</Text>
          </Pressable>
          <Pressable>
            <Text>เลือกหลายอัน</Text>
          </Pressable>
          <Pressable>
            <Text>ต้องเลือก</Text>
          </Pressable>
        </View>
      </View>
      <FoodOptionsChild />
      <Pressable
        className="w-1/6 h-10 bg-sky-600 justify-center items-center rounded-md"
        onPress={() => {}}
      >
        <Text>+</Text>
      </Pressable>
    </View>
  )
}

const FoodOptionsChild = () => {
  const [optionChild, setOptionChild] = useState<string>()
  const [price, setPrice] = useState<number>()
  return (
    <View className="flex-row items-center my-2">
      <Text>ตัวเลือกที่x:</Text>
      <TextInput
        className="border w-3/6 mr-2"
        value={optionChild}
        onChangeText={setOptionChild}
      />
      <Text>ราคา:</Text>
      <TextInput
        className="border w-1/6 mr-2"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
    </View>
  )
}
const AddFood = () => {
  const [foodName, setFoodName] = useState('')
  const [price, setPrice] = useState<number>()
  const [estimatedTime, setestimatedTime] = useState<number>()

  return (
    <View className="flex-1 p-2 gap-1">
      <Text className="font-bold text-3xl py-2 flex-wrap">เพิ่มเมนู</Text>
      <View className="flex-row gap-2 items-center flex-wrap">
        <Text>ชื่อเมนู:</Text>
        <TextInput
          className="border w-3/6"
          value={foodName}
          onChangeText={setFoodName}
        />
      </View>
      <View className="flex-row gap-2 items-center">
        <Text>ราคา:</Text>
        <TextInput
          className="border w-1/6"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <Text>บาท</Text>
      </View>
      <View className="flex-row gap-2 items-center">
        <Text>เวลาที่คาดว่าจะเสร็จ:</Text>
        <TextInput
          className="border w-1/6"
          value={estimatedTime}
          onChangeText={setestimatedTime}
          keyboardType="numeric"
        />
        <Text>นาที</Text>
      </View>
      <FoodOptions />
      <Pressable
        className="w-1/6 h-10 bg-sky-600 justify-center items-center rounded-md"
        onPress={() => {}}
      >
        <Text>+</Text>
      </Pressable>

      <Pressable
        className="w-1/6 h-10 bg-green-600 justify-center items-center rounded-md"
        onPress={() => {}}
      >
        <Text>บันทึก</Text>
      </Pressable>
    </View>
  )
}

export default AddFood

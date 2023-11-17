import { View, Text, Pressable, Button, StyleSheet } from 'react-native'
import { Button as UIButton } from 'react-native-ui-lib'
import React, { FC, Fragment, useState } from 'react'
import colors from 'tailwindcss/colors'
import { BooleanInput, TextInput } from '../../components/Shop/Inputs'
import { ScrollView } from 'react-native-gesture-handler'
import mockData from './mockData'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'
import { Plus } from 'phosphor-react-native'
// import { Option } from '../../models/option'

export type MiniOption = {
  name: string
  // value?: string[] | string
  price: number
}

export type Option = {
  required: boolean
  name: string
  isSingle: boolean
  options: MiniOption[]
}

function getDefaultOption(): Option {
  return JSON.parse(
    JSON.stringify({
      isSingle: true,
      required: false,
      name: 'ตัวเลือกใหม่',
      options: [getDefaultMiniOption()],
    })
  )
}

function getDefaultMiniOption(): MiniOption {
  return JSON.parse(
    JSON.stringify({
      name: 'ตัวเลือกย่อยใหม่',
      price: 0,
    } satisfies MiniOption)
  )
}

type FoodOptionPickerProps = {
  optionNames: string[]
  currentIndex?: number
  onIndexChange: (index: number) => void
  onAddOption: () => void
}

const FoodOptionPicker: FC<FoodOptionPickerProps> = ({
  optionNames,
  onIndexChange,
  currentIndex,
  onAddOption,
}) => {
  function handlePress(index: number) {
    if (index !== currentIndex) {
      onIndexChange(index)
    }
  }
  function handleAddOption() {
    onAddOption()
  }
  return (
    <View className="flex py-2 justify-stretch flex-row gap-x-3 gap-y-1 flex-wrap">
      {optionNames.map((optionName, index) => (
        <Pressable key={index} onPress={() => handlePress(index)}>
          <View
            className={`font-prompt6 px-4 py-3 rounded ${
              currentIndex === index
                ? 'bg-orange-400 text-white'
                : 'bg-white border-orange-300 border'
            }`}
          >
            <Text
              className={`${
                currentIndex === index ? 'font-prompt6' : 'font-prompt4'
              }`}
            >
              {optionName}
            </Text>
          </View>
        </Pressable>
      ))}
      <Pressable onPress={handleAddOption}>
        <View className={`px-4 py-3 rounded border-2 border-sky-600`}>
          <Plus size={16} weight="bold" />
        </View>
      </Pressable>
    </View>
  )
}

type FoodOptionProps = {
  option: Option
  setOption: (option: Option) => void
}

const FoodOption: FC<FoodOptionProps> = ({ option, setOption }) => {
  function handleNameChange(name: string) {
    setOption({ ...option, name })
  }
  function handleIsSingleChange(isSingle: boolean) {
    setOption({ ...option, isSingle })
  }
  function handleIsRequiredChange(required: boolean) {
    setOption({ ...option, required })
  }
  function handleChildOptionChange(childOption: MiniOption, index: number) {
    setOption({
      ...option,
      options: option.options.map((option, i) =>
        i === index ? childOption : option
      ),
    })
  }
  function handleAddOption() {
    setOption({
      ...option,
      options: [...option.options, getDefaultMiniOption()],
    })
  }

  return (
    <>
      <View className="flex-row">
        <TextInput
          label="ชื่อตัวเลือก"
          value={option.name}
          widthFull
          onValueChange={handleNameChange}
        />
      </View>
      <View className="py-4 gap-y-2">
        <BooleanInput
          titleShown={false}
          label="เลือกอันเดียว"
          value={option.isSingle}
          onValueChange={handleIsSingleChange}
        />
        <BooleanInput
          titleShown={false}
          label="เลือกหลายอัน"
          value={!option.isSingle}
          onValueChange={(newVal) => handleIsSingleChange(!newVal)}
        />
        <BooleanInput
          titleShown={false}
          label="ต้องเลือก"
          value={option.required}
          onValueChange={handleIsRequiredChange}
        />
      </View>
      <View className="w-full h-fit border border-gray-300 bg-gray-200 rounded-md p-2 my-2 g-2 flex-wrap">
        {option.options.map((option, index) => (
          <Fragment key={index}>
            {index !== 0 && (
              <View className="border-b-2 border-gray-300 py-2" />
            )}
            <FoodOptionsChild
              optionChild={option}
              setOptionChild={(optionChild) =>
                handleChildOptionChange(optionChild, index)
              }
            />
          </Fragment>
        ))}
      </View>
      <View className="px-4 pt-4">
        <UIButton
          label="เพิ่มตัวเลือกย่อย"
          style={{
            paddingVertical: 16,
          }}
          labelStyle={{
            ...buttonStyles.labelStyle,
          }}
          backgroundColor={colors.orange['400']}
          onPress={handleAddOption}
        />
      </View>
    </>
  )
}

type FoodOptionsChildProps = {
  optionChild: MiniOption
  setOptionChild: (optionChild: MiniOption) => void
}

const FoodOptionsChild: FC<FoodOptionsChildProps> = ({
  optionChild,
  setOptionChild,
}) => {
  // const [options, setOptions] = useState<Option[]>(mockData)
  const [price, setPrice] = useState<number>()
  function handleNameChange(name: string) {
    setOptionChild({ ...optionChild, name })
  }
  function handlePriceChange(price: string) {
    setOptionChild({ ...optionChild, price: Number(price) })
  }
  return (
    <>
      <View className="flex-wrap flex-row space-x-3">
        {/* {options.map((option, index) => (
          <View key={index}>
            <Text>{option.name}</Text>
          </View>
        ))} */}
      </View>
      <View className="flex-row">
        <TextInput
          widthFull
          label="ชื่อตัวเลือก"
          value={optionChild.name}
          onValueChange={handleNameChange}
        />
        <TextInput
          widthFull
          label="ราคา"
          value={String(optionChild.price)}
          onValueChange={handlePriceChange}
        />
      </View>
    </>
  )
}

const AddFood = () => {
  const [foodName, setFoodName] = useState('')
  const [price, setPrice] = useState<number>()
  const [estimatedTime, setEstimatedTime] = useState<number>()
  const [options, setOptions] = useState<Option[]>([getDefaultOption()])
  const [optionIndex, setOptionIndex] = useState<number>(0)

  function handleOptionChange(option: Option) {
    const newOptions = [...options]
    newOptions[optionIndex] = option
    setOptions(newOptions)
  }
  function handleAddOption() {
    setOptions([...options, getDefaultOption()])
    setOptionIndex(options.length)
  }
  return (
    <ScrollView className="flex-1 p-2 gap-1">
      <Text className="font-prompt5 font-bold text-3xl py-2 flex-wrap">
        เพิ่มเมนู
      </Text>
      <View className="flex-row gap-2 items-center justify-center">
        <TextInput widthFull label="ชื่อเมนู" onValueChange={setFoodName} />
      </View>
      <View className="flex-row gap-x-3 items-end">
        <TextInput
          widthFull
          label="ราคา"
          onValueChange={(price) => setPrice(Number(price))}
        />
        <Text className="pb-6">บาท</Text>
      </View>
      <View className="flex-row items-end gap-x-3">
        <TextInput
          widthFull
          label="เวลาที่คาดว่าจะเสร็จ"
          onValueChange={(newTime) => setEstimatedTime(Number(newTime))}
        />
        <Text className="pb-6">นาที</Text>
      </View>
      <View className="w-full h-fit border border-gray-300 bg-gray-100 rounded-md p-2 my-2 g-2 flex-wrap">
        <FoodOptionPicker
          currentIndex={optionIndex}
          onIndexChange={setOptionIndex}
          optionNames={options.map((option) => option.name)}
          onAddOption={handleAddOption}
        />
        <FoodOption
          setOption={handleOptionChange}
          option={options[optionIndex]}
        />
      </View>
      <Pressable
        className="w-1/6 h-10 bg-sky-600 justify-center items-center rounded-md"
        onPress={() => {}}
      >
        <Text>+</Text>
      </Pressable>

      <View className="px-4 pt-4">
        <UIButton
          label="บันทึก"
          style={{
            paddingVertical: 16,
          }}
          labelStyle={{
            ...buttonStyles.labelStyle,
          }}
          backgroundColor={colors.green['600']}
        />
      </View>
    </ScrollView>
  )
}

export default AddFood

const style = StyleSheet.create({
  floaterStyle: {
    fontSize: 16,
  },
  fieldStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
  },
})

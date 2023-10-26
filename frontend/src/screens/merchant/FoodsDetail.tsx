import { View, Text, Pressable, Alert, Image } from 'react-native'
import { Button } from 'react-native-ui-lib'
import React, { FC } from 'react'
import { FoodWithOptions } from '../../models/food'
import colors from 'tailwindcss/colors'
import useFoodStore from '../../stores/foodStore'
import deleteFood from '../../api/merchant/deleteFood'
import getApiUrl from '../../utils/getApiUrl'

const FoodsDetail: FC<{ route: { params: FoodWithOptions } }> = ({
  route,
  navigation,
}) => {
  const foodDetail = route.params
  const options = foodDetail.options.options
  const { removeById } = useFoodStore()
  return (
    <View className="p-4 w-full flex-1">
      <Text className="font-bold text-3xl pt-4">{foodDetail.food_name}</Text>
      <Image
        source={{
          uri: getApiUrl() + '/uploads/menu/' + foodDetail.id + '.jpg',
        }}
        height={200}
      />
      <Text>ราคา: {foodDetail.price} บาท</Text>
      <Text>เวลาที่ทำ: {foodDetail.estimated_time} นาที</Text>
      <Text>ตัวเลือก</Text>
      {options.map((option) => {
        return (
          <View key={option.name}>
            <Text>{option.name}</Text>
            <Text>
              {option.isSingle == true
                ? 'เสือกได้หลายอย่าง'
                : 'เลือกได้อย่างเดียว'}{' '}
              {option.required == true ?? 'ต้องเลือก'}
            </Text>
            <View className="flex-row px-4 flex-wrap">
              {option.options.map((optiondata) => {
                return (
                  <Text key={optiondata.name}>
                    +{optiondata.name}{' '}
                    {optiondata.price ? optiondata.price + ' บาท ' : ''}
                  </Text>
                )
              })}
            </View>
          </View>
        )
      })}
      <Text>สร้างเมื่อ: {foodDetail.created_at.slice(0, 10)}</Text>
      <Text>แก้ไขเมื่อ: {foodDetail.updated_at.slice(0, 10)}</Text>
      <View className="flex-row gap-4 justify-center">
        <Button label="แก้ไข" backgroundColor={colors.yellow[500]} />
        <Button
          label="ลบ"
          backgroundColor={colors.red[500]}
          onPress={() => {
            Alert.alert(
              'ลบเมนู',
              'คุณแม่ใจที่ละลบเมนูนี้หรือไม่', // <- this part is optional, you can pass an empty string
              [
                {
                  text: 'ยกเลิก',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'ตกลง',
                  onPress: async () => {
                    navigation.navigate('merchant-food_page')
                    removeById(foodDetail.id)
                    await deleteFood({
                      id: foodDetail.id,
                    })
                  },
                },
              ],
              { cancelable: false }
            )
          }}
        />
      </View>
    </View>
  )
}

export default FoodsDetail

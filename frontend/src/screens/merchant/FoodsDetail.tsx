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
  const { removeById } = useFoodStore()
  console.log(JSON.stringify(foodDetail, null, 2))
  return (
    <View className="p-4 w-full">
      <Text className="font-bold text-3xl pt-4">{foodDetail.food_name}</Text>
      <Image
        source={{
          uri: getApiUrl() + '/uploads/menu/' + foodDetail.id + '.jpg',
        }}
        height={200}
      />
      <Text>ราคา: {foodDetail.price} บาท</Text>
      <Text>เวลาที่ทำ: {foodDetail.estimated_time} นาที</Text>
      <Text>{JSON.stringify(foodDetail.options.options)}</Text>
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
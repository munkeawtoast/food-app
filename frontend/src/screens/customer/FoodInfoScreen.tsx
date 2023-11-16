import { View, Text, Image } from 'react-native'
import { moderateScale } from '../../config/scale'
import ContentSeparator from '../../components/ui/ContentSeparator'
import useCustomerOrderStore from '../../stores/customer/customerOrdersStore'
import { FC, useEffect, useState } from 'react'
import getApiUrl from '../../utils/getApiUrl'
import { CustomerStackProps } from '../../navigator/types'
import { StatusBar } from 'expo-status-bar'
import { AxiosError } from 'axios'
import useHistoryListingStore from '../../stores/customer/historyStore'

const FloatingTime = () => {
  return (
    <View className="m-1 absolute top-0 left-0 z-10 p-1 bg-white rounded-md h-16 w-20">
      <Text className="font-prompt3 text-xs">เสร็จใน</Text>
      <View className="flex-row items-end gap-1.5 -translate-y-3">
        <Text className="text-4xl text-orange-500 font-prompt6 translate-y-3 pt-2">
          10
        </Text>
        <Text className="font-prompt4 text-sky-700">นาที</Text>
      </View>
    </View>
  )
}

const TwoCol = (props: { label: string; value: string; isTitle?: boolean }) => {
  const { label, value, isTitle } = props
  return (
    <View
      className={`mx-4 flex-row divide-gray-300 ${
        isTitle ? 'justify-between' : 'divide-x-[1px]'
      }`}
    >
      <View className="w-32">
        <Text
          style={{
            fontSize: isTitle ? moderateScale(24) : moderateScale(16),
          }}
          className={
            isTitle
              ? 'text-gray-950 font-prompt6'
              : 'text-gray-700 font-prompt3'
          }
        >
          {label}
        </Text>
      </View>
      <View className="px-2">
        <Text
          style={{
            fontSize: isTitle ? moderateScale(24) : moderateScale(14),
          }}
          className={
            isTitle
              ? 'text-gray-950 font-prompt6'
              : 'text-gray-500 font-prompt3'
          }
        >
          {value}
        </Text>
      </View>
    </View>
  )
}

const FoodInfoScreen: FC<CustomerStackProps<'customer-info'>> = ({ route }) => {
  const { myOrders: orders, fetch: orderFetch } = useCustomerOrderStore()
  const { fetch: historyFetch, histories } = useHistoryListingStore()
  const target = route.params.for === 'history' ? histories : orders
  const order = target.find((or) => route.params.id === or.id)!
  const [sumPrices, setSumPrices] = useState(0)
  useEffect(() => {
    if (!order.food_data.choices || !order) {
      const basePrice = order.food_data.price
      return setSumPrices(basePrice)
    }
    let basePrice = order.food_data.price
    basePrice += order.food_data.choices.reduce(
      (acc, cur) => acc + (cur.price ? cur.price : 0),
      0
    )
    setSumPrices(basePrice)
  }, [])
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        await orderFetch()
        await historyFetch()
      } catch (e) {
        const a = e as AxiosError
        console.log(a.toJSON())
      }
    }, 1000)
    orderFetch()
    historyFetch()
    return () => clearInterval(intervalId)
  }, [])
  return (
    <View className="flex-1 h-full">
      <StatusBar style="light" />
      <FloatingTime />
      <Image
        className="resize-center w-full h-20"
        source={{
          uri: getApiUrl() + '/uploads/menu/' + order.food_data.id + '.jpg',
        }}
      />
      <View className="my-2">
        <TwoCol
          label="วันเวลาที่สั่ง"
          value={new Date(order.created_at).toLocaleDateString('th-TH', {
            weekday: 'narrow',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeStyle: 'medium',
            dateStyle: 'full',
          })}
        />
        <View className="h-2" />
        <TwoCol isTitle label="ราคาสุทธิ" value={sumPrices + ' บาท'} />
      </View>
      <ContentSeparator label="ข้อมูลเพิ่มเติม" width="screen" />
      <View key={order.created_at + order.id} className="my-2 mx-2 flex-row">
        <View className="pl-2">
          <Text
            className="font-prompt4"
            style={{ fontSize: moderateScale(20) }}
          >
            {order.food_data.food_name}
          </Text>
          {order.food_data.choices &&
            order.food_data.choices.map((choice) => (
              <View key={choice.name}>
                <Text
                  className="font-prompt3 text-gray-600"
                  style={{ fontSize: moderateScale(16) }}
                >
                  {choice.name}: {choice.value as string}
                  {/* {choice.value === true && 'ใช่'}
                {choice.value === false && 'ไม่'} */}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  )
}
export default FoodInfoScreen

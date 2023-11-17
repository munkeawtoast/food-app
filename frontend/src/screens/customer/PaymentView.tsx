import { View, Text } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { CustomerShopStackProps } from '../../navigator/types'
import { Money } from 'phosphor-react-native'

function useTimer(inputSeconds: number) {
  const [seconds, setSeconds] = useState(inputSeconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])
  return [seconds]
}

const PaymentView: FC<CustomerShopStackProps<'customer-shop-payment'>> = ({
  route,
  navigation,
}) => {
  const [seconds] = useTimer(5)
  useEffect(() => {
    if (seconds <= 0) {
      navigation.navigate('customer-bottom', {
        screen: 'customer-bottom-home',
      })
    }
  }, [seconds])
  return (
    <>
      <View className="w-full py-3 justify-center flex-row  items-center bg-red-400">
        <View className="flex-row gap-4 items-center">
          <Text className="font-prompt4 text-2xl text-white">
            กลับหน้าหลักภายใน {seconds}
          </Text>
        </View>
      </View>
      <View className="gap-y-3">
        <View className="w-full py-12 justify-center flex-row  items-center bg-orange-300">
          <View className="flex-row gap-4 items-center">
            <Money color="green" size={40} />
            <Text className="font-prompt4 text-2xl text-black">
              ชำระเงินสำเร็จ
            </Text>
          </View>
        </View>
        <View>
          {route.params.food_data.choices.map((choice) => {
            return (
              <View key={choice.name} className="flex-row justify-between px-8">
                <Text className="text-lg text-gray-500  font-prompt4">
                  {choice.name}
                </Text>
                <Text className="text-lg text-gray-500 font-prompt4">
                  {choice.price ? choice.price : '0'}
                </Text>
              </View>
            )
          })}
        </View>
        <View>
          <View className="flex-row justify-between px-8">
            <Text className="text-2xl  font-prompt4">รวม</Text>
            <Text className="text-2xl font-prompt4">
              {route.params.food_data.price +
                route.params.food_data.choices.reduce(
                  (acc, cur) => acc + (cur.price ? cur.price : 0),
                  0
                )}
            </Text>
          </View>
          {/* <View className="flex-row justify-between px-8">
            <Text className="text-lg  font-prompt4">ค่าบริการ</Text>
            <Text className="text-lg text-gray-500 font-prompt4">
              {route.params.food_data.service_charge}
            </Text>
          </View> */}
          {/* <View className="flex-row justify-between px-8">
            <Text className="text-lg  font-prompt4">รวมทั้งหมด</Text>
            <Text className="text-lg text-gray-500 font-prompt4">
              {route.params.food_data.total_price}
            </Text>
          </View> */}
        </View>
        {/* <Text>{JSON.stringify(route.params.food_data.choices, null, 2)}</Text> */}
      </View>
    </>
  )
}

export default PaymentView

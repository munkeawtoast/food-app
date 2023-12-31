import { View, Text, Image, Pressable } from 'react-native'
import { moderateScale } from '../../config/scale'
import useCustomerOrderStore from '../../stores/customer/customerOrdersStore'
import { FC, useEffect } from 'react'
import getApiUrl from '../../utils/getApiUrl'
import { CustomerStackProps } from '../../navigator/types'
import { ScrollView } from 'react-native-gesture-handler'

const InProgressListingScreen: FC<CustomerStackProps<'customer-listing'>> = ({
  navigation,
}) => {
  const { myOrders: orders, fetch } = useCustomerOrderStore()

  useEffect(() => {
    const intervalId = setInterval(async () => {
      console.log('fetching')
      await fetch()
    }, 3000)
    fetch()
    return () => clearInterval(intervalId)
  }, [])
  return (
    <ScrollView>
      {orders.map((order) => {
        const { food_data: food } = order
        return (
          <Pressable
            key={order.created_at + order.id}
            onPress={() => {
              navigation.navigate('customer-info', {
                id: order.id,
                for: 'queue',
              })
            }}
          >
            <View
              key={order.created_at + order.id}
              className="my-2 mx-2 flex-row"
            >
              <Image
                className="resize-center w-16 h-16"
                source={{
                  uri:
                    getApiUrl() +
                    '/uploads/menu/' +
                    order.food_data.id +
                    '.jpg',
                }}
              />
              <View className="pl-2">
                <Text
                  className="font-prompt4"
                  style={{ fontSize: moderateScale(20) }}
                >
                  {food.food_name}
                </Text>
                {food.choices &&
                  food.choices.map((choice) => (
                    <View key={choice.name}>
                      <Text
                        className="font-prompt3 text-gray-600"
                        style={{ fontSize: moderateScale(16) }}
                      >
                        {choice.name}: {choice.value as string}
                      </Text>
                    </View>
                  ))}
              </View>
            </View>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}
export default InProgressListingScreen

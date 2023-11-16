import { View, Text, Image, Pressable } from 'react-native'
import { moderateScale } from '../../config/scale'
import { FC, useEffect } from 'react'
import getApiUrl from '../../utils/getApiUrl'
import { CustomerBottomTabProps } from '../../navigator/types'
import { ScrollView } from 'react-native-gesture-handler'
import useHistoryListingStore from '../../stores/customer/historyStore'

const HistoryScreen: FC<CustomerBottomTabProps<'customer-bottom-history'>> = ({
  navigation,
}) => {
  const { histories, fetch } = useHistoryListingStore()

  useEffect(() => {
    console.log('jfoiadsjfiods')
    const intervalId = setInterval(async () => {
      console.log('fetching history')
      await fetch()
    }, 3000)
    fetch()
    return () => clearInterval(intervalId)
  }, [])
  return (
    <ScrollView>
      {histories &&
        histories.map((order) => {
          const { food_data: food } = order
          return (
            <Pressable
              key={order.created_at + order.id}
              onPress={() => {
                navigation.navigate('customer-info', {
                  id: order.id,
                  for: 'history',
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
                          {/* {choice.value === true && 'ใช่'}
                    {choice.value === false && 'ไม่'} */}
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
export default HistoryScreen

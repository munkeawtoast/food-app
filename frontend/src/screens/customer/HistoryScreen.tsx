import { View, Text, Image } from 'react-native'
import { moderateScale, verticalScale } from '../../config/scale'
import Animated from 'react-native-reanimated'
import useOrdersStore from '../../stores/ordersStore'

const HistoryScreen = () => {
  const { orders } = useOrdersStore()
  return (
    <View className="flex-1 h-full">
      {orders.map((order) => {
        const { item } = order
        return (
          <View key={order.timestamp + order.id} className="my-2 mx-2 flex-row">
            <Image
              className="resize-center w-16 h-16"
              source={{
                uri: item['image-url'],
              }}
            />
            <View className="pl-2">
              <Text
                className="font-prompt4"
                style={{ fontSize: moderateScale(20) }}
              >
                {item.name}
              </Text>
              {item.choices.map((choice) => (
                <View key={choice.name}>
                  <Text
                    className="font-prompt3 text-gray-600"
                    style={{ fontSize: moderateScale(16) }}
                  >
                    {choice.name}: {choice.value as string}
                    {choice.value === true && 'ใช่'}
                    {choice.value === false && 'ไม่'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )
      })}
    </View>
  )
}
export default HistoryScreen
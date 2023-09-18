import { View, Text, Image } from 'react-native'
import { moderateScale } from '../../config/scale'
import useOrdersStore from '../../stores/ordersStore'
import ContentSeparator from '../../components/ui/ContentSeparator'

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

const InProgressScreen = () => {
  const { orders } = useOrdersStore()
  const order = orders[0]
  const { item, count, customer_id, timestamp, id } = order
  return (
    <View className="flex-1 h-full">
      <FloatingTime />
      <Image
        className="resize-center w-full h-20"
        source={{
          uri: item['image-url'],
        }}
      />
      <View className="my-2">
        <TwoCol
          label="วันเวลาที่สั่ง"
          value={new Date(order.timestamp).toLocaleDateString('th-TH', {
            weekday: 'narrow',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeStyle: 'medium',
            dateStyle: 'full',
          })}
        />
        <View className="h-2" />
        <TwoCol isTitle label="ราคาสุทธิ" value={300 + ' บาท'} />
      </View>
      <ContentSeparator label="ข้อมูลเพิ่มเติม" width="screen" />
      <View key={order.timestamp + order.id} className="my-2 mx-2 flex-row">
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
    </View>
  )
}
export default InProgressScreen

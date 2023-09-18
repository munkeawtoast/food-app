import { View, Text, Image, Pressable, Modal, Alert } from 'react-native'
import { moderateScale } from '../../config/scale'
import { CheckBox } from 'react-native-elements'
import { useState } from 'react'

const ListContainer = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View className="bg-red-200 flex-1 items-center justify-center">
          <View className="bg-red-400 h-96 w-96 items-center justify-center">
            <Text>asdfdd</Text>
          </View>
        </View>
      </Modal>

      <View className="my-2 mx-2 flex-row gap-2">
        <Image
          className="resize-center w-16 h-16"
          source={require('../../../assets/ก๋วยเตี๋ยวหมูน้ำใส.webp')}
        />
        <View className="pl-2">
          <Text
            className="font-prompt4"
            style={{ fontSize: moderateScale(16) }}
          >
            คิวที่ 1
          </Text>
          {/* {item.choices.map((choice) => (
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
        ))} */}
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>ดูรายละเอียด</Text>
          </Pressable>
        </View>
        <Text className="font-prompt4" style={{ fontSize: moderateScale(16) }}>
          50 บาท
        </Text>
        <CheckBox checked={true} />
        <CheckBox
          checked={true}
          checkedColor="red"
          checkedIcon="clear"
          iconType="material"
        />
      </View>
    </View>
  )
}

const QueueList = () => {
  return (
    <View className="flex-1 items-center p-4">
      {/* <ShowModal /> */}
      {/* <Text>ชื่อเมนู</Text>
      <Text>ชื่ออาหาร</Text> */}
      <ListContainer />
    </View>
  )
}
export default QueueList

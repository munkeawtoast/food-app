import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Alert,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native'
import { moderateScale } from '../../config/scale'
import { Fragment, useEffect, useState } from 'react'
import { Checkbox } from 'react-native-ui-lib'
import { Order } from '../../models/order'
import getApiUrl from '../../utils/getApiUrl'
import { declareOrderDone, getMerchantSelfOrders } from '../../api/merchant'

function useTimedQueueGetter(): [Order[], () => void] {
  const [queue, setQueue] = useState<Array<Order>>([])
  async function caller() {
    const res = await getMerchantSelfOrders({ shopId: 1 })
    setQueue(res.data)
    console.log(JSON.stringify(queue, null, 2))
  }
  useEffect(() => {
    const intervalId = setInterval(caller, 10000)
    caller()
    return () => clearInterval(intervalId)
  }, [])
  return [queue, caller]
}

const ListContainer = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [queue, getQueueue] = useTimedQueueGetter()
  const [qModalHidden, setQModalHidden] = useState<Array<number>>([])

  function flipModalHiddenOfId(id: number) {
    if (qModalHidden.includes(id)) {
      setQModalHidden(qModalHidden.filter((qHiddenId) => qHiddenId !== id))
    } else {
      setQModalHidden([...qModalHidden, id])
    }
  }

  async function handleClickQueueDone() {
    await declareOrderDone({ id: queue.id })
    getQueueue()
  }

  // console.log(queue)
  return (
    <ScrollView className="flex-1 flex-wrap ">
      {Array.isArray(queue) ? (
        queue.map((queue, index) => {
          return (
            <Fragment key={queue.id}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={qModalHidden.includes(queue.id)}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.')
                  flipModalHiddenOfId(queue.id)
                }}
              >
                <Pressable
                  onPress={() => {
                    flipModalHiddenOfId(queue.id)
                  }}
                  className="flex-1 items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                  }}
                >
                  <TouchableWithoutFeedback>
                    <View className="bg-white h-96 w-96 rounded  p-4">
                      <Text className="font-bold text-2xl">
                        {queue.food_data.food_name}
                      </Text>

                      {/* {JSON.stringify(queue.food_data.choices)} */}
                      {queue.food_data.choices.map((choice) => (
                        <Text key={choice.value}>- {choice.value}</Text>
                      ))}
                    </View>
                  </TouchableWithoutFeedback>
                </Pressable>
              </Modal>

              <View className="my-2 mx-2 flex-row gap-2 justify-center items-center">
                <Image
                  source={{
                    uri:
                      getApiUrl() +
                      '/uploads/menu/' +
                      queue.food_data.id +
                      '.jpg',
                  }}
                  style={{
                    width: 80,
                    height: 60,
                  }}
                />
                <View className="pl-2">
                  <Text
                    className="font-prompt4"
                    style={{ fontSize: moderateScale(16) }}
                  >
                    คิวที่ {index + 1}
                  </Text>
                  <Pressable
                    onPress={() => {
                      flipModalHiddenOfId(queue.id)
                    }}
                  >
                    <Text className="font-bold">ดูรายละเอียด</Text>
                  </Pressable>
                </View>
                <Text
                  className="font-prompt4"
                  style={{ fontSize: moderateScale(16) }}
                >
                  {queue.food_data.price} บาท
                </Text>
                <Pressable
                  onPress={handleClickQueueDone(queue, getQueueue)}
                  className="bg-green-500 w-8 h-8 rounded-md justify-center items-center ml-2"
                >
                  <Text className="text-white">&#10003;</Text>
                </Pressable>
                {/* <Checkbox value={true} iconColor="red" /> */}
              </View>
            </Fragment>
          )
        })
      ) : (
        <Text>ยังไม่มีคิวในขณะนี้</Text>
      )}
    </ScrollView>
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

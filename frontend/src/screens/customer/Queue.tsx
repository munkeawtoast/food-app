import { FC, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import useTestPersistentStore from '../../stores/testPersistentStore'
import { CaretLeft } from 'phosphor-react-native'
import { moderateScale } from '../../config/scale'

const { width, height } = Dimensions.get('window')

const OrderQueueView: FC = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        backgroundColor: '#0C4A6E',
        height: height * 0.05,
        flex: 1,
        flexShrink: 1,
        flexDirection: 'column',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: height * 0.01,
            marginLeft: width * 0.01,
          }}
          onPress={() => {
            navigation.popToTop()
          }}
        >
          <CaretLeft size={40} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: height * 0.03,
              marginLeft: width * 0.01,
            }}
          >
            กลับ
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              fontSize: height * 0.03,
              color: 'white',
              marginTop: height * 0.02,
            }}
          >
            วาสนาก๋วยเตี๋ยว
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>

          <Text>asdasdasdas</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: width * 0.03,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  content: {
    paddingHorizontal: '5%', // Adjust as needed for spacing
    paddingBottom: '5%', // Adjust as needed for spacing
  },
})

export default OrderQueueView

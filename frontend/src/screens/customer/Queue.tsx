import { FC, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import { CaretLeft, CaretRight, ForkKnife } from 'phosphor-react-native'
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
          <ForkKnife size={200} color="#B8B8B8" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                height: height * 0.2,
                width: width * 0.2,
                marginHorizontal: -width * 0.07,
                resizeMode: 'contain',
              }}
              source={require('frontend/assets/Noodle.png')}
            />
            <View
              style={{
                marginHorizontal: width * 0.15,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: moderateScale(20),
                }}
              >
                เตี๋ยวหมูไก่ปลา
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: moderateScale(20),
                }}
              >
                50 บาท
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: width * 0.1 }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: moderateScale(20),
              }}
            >
              เวลาที่คาดว่าจะสำเร็จ
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: moderateScale(20),
              }}
            >
              XXX นาที
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  marginTop: width * 0.2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: moderateScale(20),
                  }}
                >
                  ดูคิวของร้าน
                </Text>
                <CaretRight style={{ marginTop: 5, marginLeft: 5}} size={22}></CaretRight>
              </View>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.1,
  },
})

export default OrderQueueView

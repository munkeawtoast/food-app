import {
  Button,
  ButtonProps,
  Image,
  TextField,
  View,
} from 'react-native-ui-lib'
import {
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  StyleSheet,
  Text,
} from 'react-native'
import React, { MutableRefObject, useRef, useState } from 'react'
import { axios } from '../../api/axios'
import { AxiosError } from 'axios'
import { AuthStackProps } from '../../navigator/types'
import colors from 'tailwindcss/colors'

const AuthScreen = ({ navigation, route }: AuthStackProps<'auth-auth'>) => {
  const passwordRef = useRef() as MutableRefObject<TextInput | null>
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  async function CheckLogin() {
    if (route.params.as === 'merchant') {
      await axios
        .post('/getMerchant', {
          username,
          password,
        })
        .then((res) => {
          console.log(res.data)
          // navigation.navigate('merchant', {
          //   params: {
          //     data: res.data,
          //   },
          // })
          navigation.replace('merchant', { data: res.data })
        })
        .catch((e: AxiosError) => {
          console.log(e)
          setErrorMessage('ไอดีหรือพาสเวิร์ดไม่ถูกต้อง')
        })
    } else if (route.params.as === 'customer') {
      await axios
        .post('/getCustomer', {
          username,
          password,
        })
        .then(() => {
          navigation.replace('customer')
        })
        .catch((e: AxiosError) => {
          console.log(e)
          setErrorMessage('ไอดีหรือพาสเวิคไม่ถูกต้อง')
        })
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center">
        <View flex width={'80%'}>
          <View center className="py-5">
            <Image
              source={require('../../../assets/noodles.png')}
              style={{
                resizeMode: 'contain',
                height: 80,
              }}
            />
          </View>
          <TextField
            maxLength={32}
            placeholder="username"
            style={{ fontSize: 18 }}
            floatingPlaceholder
            floatOnFocus
            fieldStyle={style.fieldStyle}
            floatingPlaceholderStyle={style.floaterStyle}
            floatingPlaceholderColor={{
              default: colors.gray['400'],
              focus: colors.sky['500'],
            }}
            onChangeText={setUsername}
            onSubmitEditing={() =>
              passwordRef.current && passwordRef.current.focus()
            }
            value={username}
            autoFocus
            black
          />
          <TextField
            ref={(input) => (passwordRef.current = input)}
            maxLength={32}
            placeholder="รหัสผ่าน"
            secureTextEntry
            style={{ fontSize: 18 }}
            floatingPlaceholder
            floatOnFocus
            fieldStyle={style.fieldStyle}
            floatingPlaceholderStyle={style.floaterStyle}
            floatingPlaceholderColor={{
              default: colors.gray['400'],
              focus: colors.sky['500'],
            }}
            onChangeText={setPassword}
            onSubmitEditing={Keyboard.dismiss}
            value={password}
          />
          <Text className="text-red-600">{errorMessage}</Text>
          <Button label="Submit" borderRadius={0} onPress={CheckLogin} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const style = StyleSheet.create({
  floaterStyle: {
    marginLeft: -10,
    paddingBottom: 38,
    fontSize: 16,
  },
  fieldStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
  },
})

export default AuthScreen

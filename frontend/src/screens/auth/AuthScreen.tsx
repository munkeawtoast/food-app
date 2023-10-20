import React, { MutableRefObject, useRef, useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import { Button, Image, TextField, View } from 'react-native-ui-lib'
import colors from 'tailwindcss/colors'
import { axios } from '../../api/axios'
import { AuthStackProps } from '../../navigator/types'
import merchantLogin from '../../api/auth/merchantLogin'
import customerLogin from '../../api/auth/customerLogin'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'

function getLoginHandler(type: 'merchant' | 'customer') {
  switch (type) {
    case 'merchant':
      return merchantLogin
    case 'customer':
      return customerLogin
  }
}

const AuthScreen = ({ navigation, route }: AuthStackProps<'auth-auth'>) => {
  const { setUserWithResponseData } = useSettingsPersistentStore()
  const passwordRef = useRef() as MutableRefObject<TextInput | null>
  const [username, setUsername] = useState<string>('Someone')
  const [password, setPassword] = useState<string>('password')
  const [errorMessage, setErrorMessage] = useState<string>('')
  async function doLogin() {
    try {
      const loginFunc = getLoginHandler(route.params.as)
      const res = await loginFunc({ username, password })
      console.log(res.data)
      setUserWithResponseData(res.data)
      navigation.replace(route.params.as)
    } catch (er) {
      console.log(er)
      setErrorMessage('ไอดีหรือพาสเวิร์ดไม่ถูกต้อง')
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
          <Button label="Submit" borderRadius={0} onPress={doLogin} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const style = StyleSheet.create({
  floaterStyle: {
    fontSize: 16,
  },
  fieldStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
  },
})

export default AuthScreen

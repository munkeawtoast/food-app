import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import { Button, Image, TextField, View } from 'react-native-ui-lib'
import colors from 'tailwindcss/colors'
import { AuthStackProps } from '../../navigator/types'
import merchantLogin from '../../api/auth/merchantLogin'
import customerLogin from '../../api/auth/customerLogin'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'
import bypass from '../../dev/bypass'

function getLoginHandler(type: 'merchant' | 'customer') {
  switch (type) {
    case 'merchant':
      return merchantLogin
    case 'customer':
      return customerLogin
  }
}

const AuthScreen = ({ navigation, route }: AuthStackProps<'auth-auth'>) => {
  // console.log(route.params.as === 'customer')
  const { setUserWithResponseData, reset } = useSettingsPersistentStore()
  const passwordRef = useRef() as MutableRefObject<TextInput | null>
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  function bypassLogin() {
    if (!bypass.login) {
      return
    }
    const { cred } = bypass.login
    setUsername(cred.username)
    setPassword(cred.password)
    doLogin(cred)
  }
  useEffect(() => {
    bypassLogin()
  }, [])
  async function doLogin({
    username,
    password,
  }: {
    username?: string
    password?: string
  }) {
    reset()
    if (!username || !password) {
      setErrorMessage('กรุณากรอกข้อมูลให้ครบถ้วน')
      return
    }
    try {
      const loginFunc = getLoginHandler(route.params.as)

      console.log({ username, password })
      const res = await loginFunc({ username, password })
      setUserWithResponseData(res.data)
      navigation.replace(route.params.as)
    } catch (er) {
      console.log(er)
      console.log('bad login')
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
            placeholder="ชื่อผู้ใช้"
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
          <Button
            label="เข้าสู่ระบบ"
            style={buttonStyles.style}
            labelStyle={buttonStyles.labelStyle}
            backgroundColor={colors.sky[600]}
            onPress={() => doLogin({ password, username })}
          />
          {route.params.as === 'customer' ? (
            <View className="flex-row my-2">
              <Text>ยังไม่มีบัญชีใช่ใหม</Text>
              <Pressable
                className="mx-1"
                onPress={() => navigation.navigate('auth-register')}
              >
                <Text className="text-yellow-500">สมัครสมาชิก</Text>
              </Pressable>
            </View>
          ) : (
            ''
          )}
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

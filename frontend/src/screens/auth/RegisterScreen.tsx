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
import { customerRegister } from '../../api/auth'

const RegisterScreen = ({ navigation, route }) => {
  const passwordRef = useRef() as MutableRefObject<TextInput | null>
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
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
          <TextField
            maxLength={32}
            placeholder="ยืนยันรหัสผ่าน"
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
            onChangeText={setConfirmPassword}
            onSubmitEditing={Keyboard.dismiss}
            value={confirmPassword}
          />
          <Text className="text-red-600">{errorMessage}</Text>
          <Button
            label="สมัครสมาชิก"
            style={buttonStyles.style}
            labelStyle={buttonStyles.labelStyle}
            backgroundColor={colors.sky[600]}
            onPress={async () => {
              if (password !== confirmPassword) {
                await setErrorMessage('Password ไม่ตรงกัน')
              } else {
                await customerRegister({
                  username: username,
                  password: password,
                })
                navigation.navigate('auth-landing')
              }
            }}
          />
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

export default RegisterScreen

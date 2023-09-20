import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { axios } from '../../api/axios'
import { Button } from 'react-native-elements'
import { AxiosError } from 'axios'
import { AuthStackProps } from '../../navigator/types'

const AuthScreen = ({ navigation, route }: AuthStackProps<'auth-auth'>) => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>('')
  async function CheckLogin() {
    // console.log(route.params.as)
    if (route.params.as === 'merchant') {
      await axios
        .post('/getMerchant', {
          username,
          password,
        })
        .then((res) => {
          console.log(res.data)
          navigation.replace('merchant', { data: res.data })
        })
        .catch((e: AxiosError) => {
          console.log(e)
          setErrorMessage('ไอดีหรือพาสเวิคไม่ถูกต้อง')
        })
    } else if (route.params.as === 'customer') {
      await axios
        .post('/getCustomer', {
          username,
          password,
        })
        .then(() => navigation.replace('customer'))
        .catch((e: AxiosError) => {
          console.log(e)
          setErrorMessage('ไอดีหรือพาสเวิคไม่ถูกต้อง')
        })
    }
  }
  return (
    <SafeAreaView className="flex-1 items-center">
      <Text className="text-xl font-mitr6">Please Login</Text>
      <View className="flex-1 justify-center gap-2">
        <View className="flex-row gap-2">
          <Text>Username:</Text>
          <TextInput
            className="w-36 h-6 border"
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View className="flex-row gap-2">
          <Text>Password:</Text>
          <TextInput
            className="w-36 h-6 border"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View>
          <Text className="text-red-600">{errorMessage}</Text>
          <Button title="Submit" onPress={CheckLogin} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen

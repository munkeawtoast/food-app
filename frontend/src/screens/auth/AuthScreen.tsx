import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { axios } from '../../api/axios'
import { Button } from 'react-native-elements'
import { AxiosError } from 'axios'

const AuthScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  async function CheckLogin() {
    // console.log(route.params.as)
    if (route.params.as === 'merchant') {
      await axios
        .post('/getMerchant', {
          username,
          password,
        })
        .then(() => navigation.navigate('merchant'))
        .catch((e: AxiosError) => {
          console.log(e)
        })
    } else if (route.params.as === 'customer') {
      await axios
        .post('/getCustomer', {
          username,
          password,
        })
        .then(() => navigation.navigate('customer'))
        .catch((e: AxiosError) => {
          console.log(e)
        })
    }
  }
  return (
    <SafeAreaView className="flex-1 items-center">
      <Text>Please Login</Text>
      <View className="flex-1 justify-center gap-2">
        <Text>Your Username</Text>
        <TextInput
          className="w-48 h-6 border"
          onChangeText={setUsername}
          value={username}
        />
        <Text>Your Password</Text>
        <TextInput
          className="w-48 h-6 border"
          onChangeText={setPassword}
          value={password}
        />
        <View>
          <Button title="Submit" onPress={CheckLogin} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen

import { defaultScreenOptions } from '../../config/theme'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../../screens/auth/LandingScreen'
import { AuthStackParamList, RootNavigationProps } from '../types'
import AuthScreen from '../../screens/auth/AuthScreen'
import RegisterScreen from '../../screens/auth/RegisterScreen'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthNavigator = ({ navigation, route }: RootNavigationProps<'auth'>) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultScreenOptions,
        headerShown: false,
      }}
      initialRouteName="auth-landing"
    >
      <Stack.Screen name="auth-landing" component={LandingScreen} />
      <Stack.Screen
        name="auth-auth"
        options={({ route }) => ({
          headerShown: true,
          title: `เข้าสู่ระบบในฐานะ${
            route.params.as === 'customer' ? 'ลูกค้า' : 'แม่ค้า'
          }`,
        })}
        component={AuthScreen}
      />
      <Stack.Screen
        name="auth-register"
        options={{
          headerShown: true,
          title: 'สมัครสมาชิก',
        }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator

import { defaultScreenOptions } from '../../config/theme'
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../../screens/auth/LandingScreen'
import { AuthStackParamList, RootStackParamList } from '../types'
import AuthScreen from '../../screens/auth/AuthScreen'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthNavigator = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'auth'>) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultScreenOptions,
        headerShown: false,
      }}
      initialRouteName="auth-landing"
    >
      <Stack.Screen name="auth-landing" component={LandingScreen} />
      <Stack.Screen name="auth-auth" component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

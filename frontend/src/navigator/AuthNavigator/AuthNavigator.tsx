import { defaultScreenOptions } from '../../config/theme'
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../../screens/auth/LandingScreen'
import { AuthStackParamList, RootStackParamList } from '../types'

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
    >
      <Stack.Screen name="auth-landing" component={LandingScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

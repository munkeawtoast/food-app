import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import LandingScreen from '../../screens/auth/LandingScreen'
import { AuthStackParamList, RootStackParamList } from '../types'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigator = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'auth'>) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="auth-landing" component={LandingScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

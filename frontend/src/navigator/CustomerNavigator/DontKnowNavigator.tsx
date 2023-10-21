import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import colors from 'tailwindcss/colors'
import IDontKnow from '../../screens/customer/IDontKnow'
import ShopQueueScreen from '../../screens/customer/ShopQueueScreen'

const Stack = createStackNavigator()

const DontKnowYet = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      initialRouteName="customer-bottom-shop-queue"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Prompt_400Regular',
          color: colors.white,
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: colors.sky[900],
        },
      }}
    >
      <Stack.Screen name="customer-bottom-shop-main" component={IDontKnow} />
      <Stack.Screen
        name="customer-bottom-shop-queue"
        component={ShopQueueScreen}
      />
    </Stack.Navigator>
  )
}

export default DontKnowYet

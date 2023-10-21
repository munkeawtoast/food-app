import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/merchant/HomeScreen'
import AddFood from '../../screens/merchant/AddFood'
import QueueList from '../../screens/merchant/QueueList'
import colors from 'tailwindcss/colors'
import MerchantLogin from '../../screens/merchant/MerchantLogin'

const BottomBar = createBottomTabNavigator()

const MerchantNavigator = () => {
  return (
    <BottomBar.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.sky[900] },
        headerTitleStyle: {
          fontFamily: 'Prompt_400Regular',
          color: colors.white,
        },
      }}
    >
      {/* <BottomBar.Screen
        name="merchant-login"
        component={MerchantLogin}
        options={{ headerShown: false }}
      /> */}
      <BottomBar.Screen
        name="merchant-home"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <BottomBar.Screen
        name="merchant-add_food"
        component={AddFood}
        options={{ headerTitle: 'เมนู' }}
      />
      <BottomBar.Screen
        name="merchant-queue_screen"
        component={QueueList}
        options={{ headerTitle: 'ดูคิว' }}
      />
    </BottomBar.Navigator>
  )
}

export default MerchantNavigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/merchant/HomeScreen'
import QueueList from '../../screens/merchant/QueueList'
import colors from 'tailwindcss/colors'
import MerchantLogin from '../../screens/merchant/MerchantLogin'
import MerchantFoodNavigator from './MerchantFoodNavigator'
import SettingsScreen from '../../screens/shared/SettingsScreen'

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
      <BottomBar.Screen
        name="merchant-home"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <BottomBar.Screen
        name="merchant-food"
        component={MerchantFoodNavigator}
        options={{ headerTitle: 'เมนู' }}
      />
      <BottomBar.Screen
        name="merchant-queue_screen"
        component={QueueList}
        options={{ headerTitle: 'ดูคิว' }}
      />
      <BottomBar.Screen
        name="merchant-settings"
        component={SettingsScreen}
        initialParams={{
          for: 'merchant',
        }}
      />
    </BottomBar.Navigator>
  )
}

export default MerchantNavigator

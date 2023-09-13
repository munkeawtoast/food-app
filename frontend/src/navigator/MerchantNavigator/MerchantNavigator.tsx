import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/merchant/HomeScreen'

const BottomBar = createBottomTabNavigator()

const MerchantNavigator = () => {
  return (
    <BottomBar.Navigator>
      <BottomBar.Screen name="merchant-home" component={HomeScreen} />
    </BottomBar.Navigator>
  )
}

export default MerchantNavigator

import { FC } from 'react'
import { FoodWithOptions } from '../../models/food'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Image, StyleSheet, Text } from 'react-native'
import colors from 'tailwindcss/colors'
import { moderateScale } from '../../config/scale'
import { View } from 'react-native-ui-lib'
import { Title } from './Inputs'
import getApiUrl from '../../utils/getApiUrl'
type FoodListingsProps = {
  onActiveFoodChange: (active: FoodWithOptions['id']) => void
  activeFoodIndex: FoodWithOptions['id']
  foods: FoodWithOptions[]
}

interface ItemProps {
  activeItemIndex?: number
  item: FoodWithOptions
  handleViewPress: (toId: number) => void
}

const Item: FC<ItemProps> = ({ item, activeItemIndex, handleViewPress }) => {
  return (
    <TouchableOpacity
      onPress={() => handleViewPress(item.id)}
      style={[
        styles.item,
        activeItemIndex === item.id && {
          backgroundColor: colors.orange[200],
          padding: 10,
        },
      ]}
    >
      <Image
        source={{ uri: getApiUrl() + '/uploads/menu/' + item.id + '.jpg' }}
        width={moderateScale(60)}
        height={moderateScale(60)}
      />
      <Text className="font-prompt4">{item.food_name}</Text>
    </TouchableOpacity>
  )
}
const FoodListings: FC<FoodListingsProps> = ({
  onActiveFoodChange,
  activeFoodIndex,
  foods,
}) => {
  const handleViewPress = (foodId: number) => {
    onActiveFoodChange(foodId)
  }
  return (
    <View className="bg-white px-4 pb-2">
      <Title title="เมนูทั้งหมด" />
      <ScrollView horizontal contentContainerStyle={styles.foodCategory}>
        <View style={{ gap: 5, flexDirection: 'row' }}>
          {foods.map((food) => (
            <Item
              activeItemIndex={activeFoodIndex}
              key={food.id}
              item={food}
              handleViewPress={handleViewPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
export default FoodListings

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: '5%', // Adjust as needed for spacing
    paddingBottom: '5%', // Adjust as needed for spacing
  },
  foodCategory: {
    flexDirection: 'row',
    gap: 2,
    paddingHorizontal: 0,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150, // Adjust the width and height as needed
    height: 120,
    backgroundColor: colors.gray['200'],
    borderRadius: 5,
  },
})

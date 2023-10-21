import { FC, useState } from 'react'
import { Food, FoodWithOptions } from '../../models/food'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Image, ImageSourcePropType, StyleSheet, Text } from 'react-native'
import colors from 'tailwindcss/colors'
import { moderateScale } from '../../config/scale'
import { View } from 'react-native-ui-lib'
import { Title } from './Inputs'
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
      <Text>{activeItemIndex}</Text>
      <Image
        source={{
          uri: 'https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg',
        }}
        width={moderateScale(60)}
        height={moderateScale(60)}
      />
      <Text style={{ fontSize: 16 }}> ก๋วยเตี๋ยว </Text>
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
    <View>
      <Title title="เทส" />
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

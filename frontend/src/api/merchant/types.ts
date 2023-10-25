import { FoodWithOptions } from '../../models/food'
import { Order } from '../../models/order'
import { Shop } from '../../models/shop'

export type CreateFoodRequest = {
  food: FoodWithOptions
}

export type CreateFoodResponse = {
  food: FoodWithOptions
}

export type DeclareOrderDoneRequest = {
  id: number
}

export type DeclareOrderDoneResponse = never

export type DeleteFoodRequest = {
  id: number
}

export type DeleteFoodResponse = never

// export type GetFoodRequest = never

export type GetFoodResponse = FoodWithOptions[]

export type GetOrderRequest = {
  shopId: Shop['id']
}

export type GetOrderResponse = Order[]

export type UpdateFoodRequest = {
  food: FoodWithOptions
}

export type UpdateFoodResponse = {
  food: FoodWithOptions
}

export type UpdateFoodImageRequest = {
  foodId: number
  foodImage: File
}

export type UpdateFoodImageResponse = {
  imageUrl: string
}

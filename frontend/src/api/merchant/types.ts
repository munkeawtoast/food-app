import { FoodWithOptions } from '../../models/food'
import { Order } from '../../models/order'

export type CreateFoodRequest = {
  food: FoodWithOptions
}

export type CreateFoodResponse = {
  food: FoodWithOptions
}

export type DeclareOrderDoneRequest = {
  orderId: number
}

export type DeclareOrderDoneResponse = never

export type DeleteFoodRequest = {
  foodId: number
}

export type DeleteFoodResponse = never

// export type GetFoodRequest = never

export type GetFoodResponse = FoodWithOptions[]

export type GetOrderRequest = never

export type GetOrderResponse = {
  orders: Order[]
}

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

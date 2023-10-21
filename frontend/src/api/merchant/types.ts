import { Food } from '../../models/food'
import { Order } from '../../models/order'

export type CreateFoodRequest = {
  food: Food
}

export type CreateFoodResponse = {
  food: Food
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

export type GetFoodResponse = {
  foods: Food[]
}

export type GetOrderRequest = never

export type GetOrderResponse = {
  orders: Order[]
}

export type UpdateFoodRequest = {
  food: Food
}

export type UpdateFoodResponse = {
  food: Food
}

export type UpdateFoodImageRequest = {
  foodId: number
  foodImage: File
}

export type UpdateFoodImageResponse = {
  imageUrl: string
}

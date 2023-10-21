import { FoodWithOptions } from './food'

export type Order = {
  id?: number
  customer_id: number
  food: FoodWithOptions
  timestamp: string
  count: number
}

export type withDetails = {
  estimation: string
  totalPrice: number
}

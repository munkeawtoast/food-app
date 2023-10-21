import { FoodWithChoices } from './food'

export type Order = {
  id?: number
  customer_id: number
  food: FoodWithChoices
  timestamp: string
  count: number
}

export type withDetails = {
  estimation: string
  totalPrice: number
}

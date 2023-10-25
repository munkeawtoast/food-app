import { Choice } from './choice'
import { Food, FoodWithOptions } from './food'
import { Option } from './option'

// this is hell im so sorry

export type Order = {
  id: number
  shop_id: number
  customer_id: number
  food_data: Food & {
    choices: Choice[]
    comment: string
  }

  created_at: string
  updated_at: string
}

export type withDetails = {
  estimation: string
  totalPrice: number
}

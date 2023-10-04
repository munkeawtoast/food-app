import { Food } from './food'

export type Order = {
  id?: number
  customer_id: number
  food: Food
  timestamp: string
  count: number
}

export type withDetails = {
  estimation: string
  totalPrice: number
}

import { FoodWithOptions } from './food'

export type Shop = {
  id: number
  name: string
  merchant_id: number
  food: FoodWithOptions[]
}

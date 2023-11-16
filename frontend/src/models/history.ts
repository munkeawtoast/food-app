import { Option } from './option'

export type History = {
  id: number
  food_data: FoodData
  created_at: string
}
type FoodData = {
  id: number
  food_name: string
  price: number
  options: {
    options: Option[]
  }
}

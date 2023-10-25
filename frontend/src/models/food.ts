import { Option } from './option'

export type Food = {
  id: number
  food_name: string
  price: number
  'image-url'?: string
  estimated_time: number
  created_at: string
  updated_at: string
}

export type FoodWithOptions = Food & {
  options: {
    options: Option[]
  }
}

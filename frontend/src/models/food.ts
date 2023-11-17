import { Option } from './option'

export type Food = {
  id?: number
  food_name: string
  price: number
  'image-url'?: string
  options: {
    options: Option[]
  }
  estimated_time: number
  shop_id: number
  created_at?: string
  updated_at?: string
}

export type FoodWithOptions = Food & {
  options: {
    options: Option[]
  }
}

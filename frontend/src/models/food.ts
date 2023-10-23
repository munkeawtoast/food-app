import { Choice } from './choice'
import { Option } from './option'

export type Food = {
  id: number
  food_name: string
  price: number
  'image-url'?: string
}

export type FoodWithOptions = Food & {
  options: {
    options: Option[]
  }
}

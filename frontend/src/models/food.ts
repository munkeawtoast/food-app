import { Choice } from './choice'
import { Option } from './option'

export type Food = {
  id: number
  foodName: string
  price: number
  'image-url'?: string
}

export type FoodWithOptions = Food & {
  options: {
    options: Option[]
  }
}

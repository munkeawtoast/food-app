import { Choice } from './choice'

export type Food = {
  id?: number
  name: string
  'image-url': string
}

export type FoodWithChoices = Food & {
  choices: Choice[]
}

import { Choice, Food } from './shop'

type OrderRequest = {
  id: number
  'image-url': string
  choices: Choice[]
}

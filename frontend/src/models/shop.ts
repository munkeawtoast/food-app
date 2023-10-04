import { Choice } from './choice'
import { Food } from './food'

export type Shop = {
  id: number
  name: string
  merchant_id: number
  items: Food[]
}

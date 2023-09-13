import { Choice, Item } from "./shop"

type OrderRequest = {
  id: number
  'image-url': string
  choices: Choice[]
}
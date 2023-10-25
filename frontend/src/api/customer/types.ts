import { Choice } from '../../models/choice'
import { Order, withDetails } from '../../models/order'
import { Shop } from '../../models/shop'

export type CreateOrderRequest = {
  foodId: number
  choices: Array<Choice>
  count: number
}

export type CreateOrderResponse = never

export type GetShopRequest = {
  shopId: number
}

export type GetShopResponse = Shop

export type GetOrdersResponse = {
  orders: (Order & withDetails)[]
}

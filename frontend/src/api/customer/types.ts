import { Choice } from '../../models/choice'
import { Order, withDetails } from '../../models/order'
import { Shop } from '../../models/shop'

export type CreateOrderRequest = Order['food_data']

export type CreateOrderResponse = Order

export type GetShopRequest = {
  shopId: number
}

export type GetShopResponse = Shop

export type GetOrdersResponse = (Order & withDetails)[]

import { AxiosResponse } from 'axios'
import { axiosInstance } from './axios'
import { Order, withDetails } from '../models/order'
import { Shop } from '../models/shop'

export type CreateOrderRequest = Order['food_data']
export type CreateOrderResponse = Order

export async function createOrder(
  data: CreateOrderRequest
): Promise<AxiosResponse<CreateOrderResponse>> {
  return axiosInstance.post('/customer/orders', data)
}

export type GetOrdersResponse = (Order & withDetails)[]

export async function getHistories(): Promise<
  AxiosResponse<GetOrdersResponse>
> {
  return axiosInstance.get('/customer/histories')
}

export async function getOrders(
  shopId: number
): Promise<AxiosResponse<GetOrdersResponse>> {
  return axiosInstance.get('/customer/orders', {
    params: { shopId, self: true },
  })
}

export type GetShopRequest = {
  shopId: number
}

export type GetShopResponse = Shop

export async function getShop(
  data: GetShopRequest
): Promise<AxiosResponse<GetShopResponse>> {
  return axiosInstance.get('/customer/shop', { params: data })
}

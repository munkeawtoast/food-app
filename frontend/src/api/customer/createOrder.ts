import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { CreateOrderRequest, CreateOrderResponse } from './types'

export default async function (
  data: CreateOrderRequest
): Promise<AxiosResponse<CreateOrderResponse>> {
  return axios.post('/customer/orders', data)
}

import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { CreateOrderRequest, CreateOrderResponse } from './types'

async function createOrder(
  data: CreateOrderRequest
): Promise<AxiosResponse<CreateOrderResponse>> {
  return axios.post('/customer/orders', data)
}

export default createOrder

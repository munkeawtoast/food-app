import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { GetOrderRequest, GetOrderResponse } from './types'

export default async function (
  data: GetOrderRequest
): Promise<AxiosResponse<GetOrderResponse>> {
  return axios.post('/merchant/orders', data)
}

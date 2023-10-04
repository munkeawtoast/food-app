import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { GetOrdersResponse } from './types'

export default async function (): Promise<AxiosResponse<GetOrdersResponse>> {
  return axios.post('/customer/orders')
}

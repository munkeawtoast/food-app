import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { GetOrdersResponse } from './types'

export default async function (
  shopId: number
): Promise<AxiosResponse<GetOrdersResponse>> {
  return axios.get('/customer/orders', {
    params: { shopId },
  })
}

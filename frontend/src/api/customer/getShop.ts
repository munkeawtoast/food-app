import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { GetShopRequest, GetShopResponse } from './types'

export default async function (
  data: GetShopRequest
): Promise<AxiosResponse<GetShopResponse>> {
  return axios.get('/customer/shop', { params: data })
}

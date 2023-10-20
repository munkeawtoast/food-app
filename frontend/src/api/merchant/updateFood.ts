import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { GetFoodRequest, GetFoodResponse } from './types'

export default async function (
  data: GetFoodRequest
): Promise<AxiosResponse<GetFoodResponse>> {
  return axios.put('/merchant/food', data)
}

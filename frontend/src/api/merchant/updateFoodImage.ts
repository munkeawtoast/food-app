import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { UpdateFoodImageRequest, UpdateFoodImageResponse } from './types'

export default async function (
  data: UpdateFoodImageRequest
): Promise<AxiosResponse<UpdateFoodImageResponse>> {
  return axios.post('/merchant/food', data)
}

import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { CreateFoodRequest, CreateFoodResponse } from './types'

export default async function (
  data: CreateFoodRequest
): Promise<AxiosResponse<CreateFoodResponse>> {
  return axios.post('/food', data)
}

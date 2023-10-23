import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { DeleteFoodRequest, DeleteFoodResponse } from './types'

export default async function (
  data: DeleteFoodRequest
): Promise<AxiosResponse<DeleteFoodResponse>> {
  return axios.delete('/food', {
    data: data,
  })
}

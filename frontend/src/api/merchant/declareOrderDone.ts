import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { DeclareOrderDoneRequest, DeclareOrderDoneResponse } from './types'

export default async function (
  data: DeclareOrderDoneRequest
): Promise<AxiosResponse<DeclareOrderDoneResponse>> {
  return axios.post('/confirmQueue', data)
}

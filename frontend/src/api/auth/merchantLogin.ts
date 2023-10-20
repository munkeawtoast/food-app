import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { LoginMerchantResponse, LoginRequest } from './types'

export default async function (
  data: LoginRequest
): Promise<AxiosResponse<LoginMerchantResponse>> {
  return axios.post('/auth/merchant/login', data)
}

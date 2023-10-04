import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import {
  LoginCustomerResponse,
  LoginMerchantResponse,
  LoginRequest,
} from './types'

export default async function (
  data: LoginRequest
): Promise<AxiosResponse<LoginMerchantResponse | LoginCustomerResponse>> {
  return axios.post('/auth/login', data)
}

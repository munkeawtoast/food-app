import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import {
  RegisterCustomerResponse,
  RegisterMerchantResponse,
  LoginRequest as RegisterRequest,
} from './types'

export default async function (
  data: RegisterRequest
): Promise<AxiosResponse<RegisterMerchantResponse | RegisterCustomerResponse>> {
  return axios.post('/auth/register', data)
}

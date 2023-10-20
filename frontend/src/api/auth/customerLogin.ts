import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { LoginCustomerResponse, LoginRequest } from './types'

export default async function (
  data: LoginRequest
): Promise<AxiosResponse<LoginCustomerResponse>> {
  return axios.post('/auth/customer/login', data)
}

import { AxiosResponse } from 'axios'
import { axios } from './axios'
import { BearerToken, LoginRequest } from '../models/auth'

export async function login(
  parameters: LoginRequest
): Promise<AxiosResponse<BearerToken>> {
  return axios.post('/auth/login', parameters)
}

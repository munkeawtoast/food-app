import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { LogoutResponse } from './types'

export default async function (): Promise<AxiosResponse<LogoutResponse>> {
  return axios.post('/auth/logout')
}

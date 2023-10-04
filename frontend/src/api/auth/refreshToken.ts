import { AxiosResponse } from 'axios'
import { axios } from '../axios'
import { BearerToken } from './types'

export default async function (): Promise<AxiosResponse<BearerToken>> {
  return axios.post('/auth/refresh-token')
}

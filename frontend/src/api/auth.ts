import { AxiosResponse } from 'axios'
import { axiosInstance } from './axios'
import { Customer, Merchant, User } from '../models/user'

export type LoginRequest = {
  username: string
  password: string
}

export type BearerToken = {
  type: 'bearer'
  token: string
  expires_at: string
}

export type LoginCustomerResponse = {
  token: BearerToken
  customer: Customer & { user: User }
  merchant: never
}

export async function customerLogin(data: LoginRequest) {
  return axiosInstance.post<LoginCustomerResponse>('/auth/customer/login', data)
}

export type LoginMerchantResponse = {
  token: BearerToken
  merchant: Merchant & { user: User }
  customer: never
}

export async function merchantLogin(data: LoginRequest) {
  return axiosInstance.post<LoginMerchantResponse>('/auth/merchant/login', data)
}

export async function refreshToken(): Promise<AxiosResponse<BearerToken>> {
  return axiosInstance.post('/auth/refresh-token')
}

export type RegisterRequest = {
  username: string
  password: string
}

export type RegisterCustomerResponse = {
  token: BearerToken
  customer: Customer & { user: User }
  merchant: never
}

export type RegisterMerchantResponse = {
  token: BearerToken
  merchant: Merchant & { user: User }
  customer: never
}

export async function customerRegister(
  data: RegisterRequest
): Promise<AxiosResponse<RegisterMerchantResponse | RegisterCustomerResponse>> {
  return axiosInstance.post('/auth/customer/register', data)
}

export async function logout(): Promise<AxiosResponse<never>> {
  return axiosInstance.post('/auth/logout')
}

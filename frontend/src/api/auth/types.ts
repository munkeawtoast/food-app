import { Customer, Merchant, User } from '../../models/user'

export type RegisterRequest = {
  username: string
  password: string
}

export type LoginRequest = {
  username: string
  password: string
}

export type RegisterMerchantResponse = {
  token: BearerToken
  merchant: Merchant & { user: User }
  customer: never
}

export type RegisterCustomerResponse = {
  token: BearerToken
  customer: Customer & { user: User }
  merchant: never
}

export type LoginMerchantResponse = {
  token: BearerToken
  merchant: Merchant & { user: User }
  customer: never
}

export type LoginCustomerResponse = {
  token: BearerToken
  customer: Customer & { user: User }
  merchant: never
}

export type BearerToken = {
  type: 'bearer'
  token: string
  expires_at: string
}

export type LogoutResponse = never

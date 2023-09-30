import { CustomerWithUser, MerchantWithUser, User } from './User'

export type LoginRequest = {
  username: string
  password: string
}

export type LoginMerchantResponse = {
  token: BearerToken
  merchant: MerchantWithUser
}

export type LoginCustomerResponse = {
  token: BearerToken
  customer: CustomerWithUser
}

export type BearerToken = {
  type: 'bearer'
  token: string
  expires_at: string
}

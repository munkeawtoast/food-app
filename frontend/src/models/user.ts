export type User = {
  id: number
  username: string
  created_at: string
  updated_at: string
}

export type Customer = {
  id: number
  user_id: number
  created_at: string
  updated_at: string
}

export type CustomerWithUser = {
  customer: Customer
} & User

export type Merchant = {
  id: number
  user_id: number
  created_at: string
  updated_at: string
}

export type MerchantWithUser = {
  merchant: Merchant
} & User

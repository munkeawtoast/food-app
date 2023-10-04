export type Role = 'customer' | 'merchant'

export type User = {
  id: number
  username: string
  created_at?: string
  updated_at?: string
}

export type Customer = {
  id: number
  user_id: number
  created_at?: string
  updated_at?: string
}

export type Merchant = {
  id: number
  user_id: number
  created_at?: string
  updated_at?: string
}

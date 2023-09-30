export type Shop = {
  id: number
  name: string
  merchant_id: number
  items: Food[]
}

export type Order = {
  id?: number
  customer_id: number
  food: Food
  timestamp: string
  count: number
}

export type Food = {
  id?: number
  name: string
  'image-url': string
  choices: Choice[]
}

export type Choice = {
  type: string
  name: string
  description?: string
  required?: boolean
  default?: unknown
}

export type BooleanChoice = Choice & {
  type: 'boolean'
  default?: boolean
  value?: boolean
  options?: {
    value: boolean
    increment: number
  }
}

export type StringChoice = Choice & {
  type: 'string'
  default?: string
  value?: string
}

export type RadioChoice = Choice & {
  type: 'radio'
  default?: string
  value?: string
  options?: {
    value: string
    increment: number
  }
}

export type NumberChoice = Choice & {
  type: 'number'
  default?: number
  value?: number
  options?: {
    value: string
    increment: number
  }
}

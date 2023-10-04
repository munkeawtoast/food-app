export type Choice = {
  type: string
  name: string
  value?: unknown
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

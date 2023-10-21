export type OptionBase = {
  type: string
  name: string
  description?: string
  required?: boolean
  default?: unknown
}

export type AdjustPriceBy<T> = {
  whenEqual: T
  by: number
}

export type BooleanOption = OptionBase & {
  type: 'boolean'
  default?: boolean
  priceAdjust?: AdjustPriceBy<boolean>
}

export type StringOption = OptionBase & {
  type: 'string'
  default?: string
}

export type RadioOption = OptionBase & {
  type: 'radio'
  default?: string
  choices: string[]
  priceAdjust?: AdjustPriceBy<string>[]
}

export type NumberOption = OptionBase & {
  type: 'number'
  default?: number
  limit: number
  pricePerUnit?: number
}

export type Option = BooleanOption | NumberOption | RadioOption | StringOption

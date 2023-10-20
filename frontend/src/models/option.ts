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
  choice: string[]
  priceAdjust?: AdjustPriceBy<string>[]
}

export type NumberOption = OptionBase & {
  type: 'number'
  default?: number
  increment?: AdjustPriceBy<number>
}

export type Option = BooleanOption | NumberOption | RadioOption | StringOption

const options: Record<string, Option> = {
  พิเศษ: {
    name: 'พิเศษ',
    type: 'boolean',
    default: false,
    description: 'test',
    priceAdjust: {
      by: 30,
      whenEqual: true,
    },
  },
  a: {
    choice: ['ธรรมดา', 'พิ', 'extra'],
    name: 'a',
    type: 'radio',
    priceAdjust: [
      {
        by: 10,
        whenEqual: 'พิ',
      },
      {
        by: 20,
        whenEqual: 'extra',
      },
    ],
  },
}

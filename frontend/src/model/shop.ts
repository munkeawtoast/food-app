export type Shop = {
  id: number
  name: string
  'image-url': string
  items: Item[]
}

export type Order = {
  id?: number
  customer_id: number
  item: Item
  timestamp: string
  count: number
}

export type Item = {
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
  value: unknown
}

export type BooleanChoice = Choice & {
  type: 'boolean'
  default?: boolean
  value?: boolean
}

export type StringChoice = Choice & {
  type: 'string'
  default?: string
  value?: string
}

export type RadioChoice = Choice & {
  stype: 'radio'
  default?: string
  value: string
}

export type CheckBoxesChoice = Choice & {
  stype: 'checkboxes'
  default?: string[]
  value: string[]
}

export type NumberChoice = Choice & {
  type: 'number'
  default?: number
  value?: number
}

// ข้างล่างทำเล่นๆ

/**
 * expand-if deep equal to value of another choice
 */
export type ExpandTarget = {
  'expand-to': string
  'expand-if': unknown
}

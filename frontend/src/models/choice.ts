export type ChoiceBase = {
  type: string
  name: string
  value: unknown
}

export type BooleanChoice = ChoiceBase & {
  type: 'boolean'
  value?: boolean
}

export type StringChoice = ChoiceBase & {
  type: 'string'
  value?: string
}

export type RadioChoice = ChoiceBase & {
  type: 'radio'
  value?: string
}

export type NumberChoice = ChoiceBase & {
  type: 'number'
  value?: number
}

export type Choice = BooleanChoice | StringChoice | RadioChoice | NumberChoice

const choice: Choice = {
  type: 'boolean',
  name: 'พิเศษ',
  value: true,
}

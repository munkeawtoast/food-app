import { Choice } from './choice'

export type Option = {
  required: boolean
  name: string
  isSingle: boolean
  options: Array<Choice>
}

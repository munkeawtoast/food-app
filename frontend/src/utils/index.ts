import {
  BooleanChoice,
  CheckBoxesChoice,
  Choice,
  NumberChoice,
  RadioChoice,
  StringChoice,
} from '../model/shop'

export function getTypedOfChoice(choice: Choice) {
  const { type } = choice
  switch (type) {
    case 'boolean':
      return choice as BooleanChoice
    case 'string':
      return choice as StringChoice
    case 'radio':
      return choice as RadioChoice
    case 'checkboxes':
      return choice as CheckBoxesChoice
    case 'number':
      return choice as NumberChoice
    default:
      throw new TypeError('Input is not a choice.')
  }
}

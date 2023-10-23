import { Text } from 'react-native'
import React, { FC } from 'react'
import {
  NumberInput as NumberInputRN,
  RadioButton,
  RadioGroup,
  TextField,
} from 'react-native-ui-lib'
import textInputStyles from '../ui/styles/textInputStyles'
import { moderateScale } from '../../config/scale'
import { Choice } from '../../models/choice'
import { Option } from '../../models/option'

type RadioProps<T> = {
  label: string
  choices: { value: T; label: string }[]
  onValueChange: (value: T) => void
  initialValue?: T
}

const Title: FC<{ title: string }> = ({ title }) => (
  <Text
    style={{
      flexGrow: 1,
      fontSize: moderateScale(22),
      color: '#C2410C',
      marginLeft: '2%',
      marginTop: '2%',
      fontFamily: 'Prompt_400Regular',
    }}
  >
    {title}
  </Text>
)

const RadioButtonGroup: FC<RadioProps<string>> = ({
  onValueChange,
  choices,
  initialValue,
  label,
}) => {
  return (
    <>
      <Title title={label} />
      <RadioGroup initialValue={initialValue} onValueChange={onValueChange}>
        {choices.map(({ value, label }) => {
          return <RadioButton key={label} value={value} label={label} />
        })}
      </RadioGroup>
    </>
  )
}

type TextInputProps = {
  onValueChange: (value: string) => void
  initialValue?: string
  label: string
}

const TextInput: FC<TextInputProps> = ({
  onValueChange,
  initialValue,
  label,
}) => (
  <>
    <Title title={label} />
    <TextField
      onChangeText={onValueChange}
      value={initialValue}
      label={label}
      placeholder={label}
      fieldStyle={textInputStyles.fieldStyle}
      labelStyle={textInputStyles.labelStyle}
      style={{ fontFamily: 'Prompt_400Regular' }}
    />
  </>
)

type NumberInputProps = {
  onValueChange: (value: number) => void
  initialValue?: number
  label: string
}

const NumberInput: FC<NumberInputProps> = ({
  onValueChange,
  initialValue,
  label,
}) => (
  <>
    <Title title={label} />
    <NumberInputRN
      onChangeNumber={(ev) => {
        if (ev.type === 'error') {
          return
        }
        onValueChange(ev.number)
      }}
      initialNumber={initialValue}
    />
  </>
)

type BooleanInputProps = {
  onValueChange: (value: string) => void
  initialValue?: boolean
  label: string
}

const BooleanInput: FC<BooleanInputProps> = ({
  label,
  onValueChange,
  initialValue,
}) => (
  <>
    <Title title={label} />
    <BooleanInput
      initialValue={initialValue}
      onValueChange={onValueChange}
      label=""
    />
  </>
)

// const AddOn: FC = () => {
//   const [checkboxStates, setCheckboxStates] = useState<{
//     checkbox1: boolean
//     checkbox2: boolean
//     checkbox3: boolean
//   }>({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//   })

//   const toggleCheckBox = (checkboxName: keyof typeof checkboxStates) => {
//     setCheckboxStates({
//       ...checkboxStates,
//       [checkboxName]: !checkboxStates[checkboxName],
//     })
//   }

//   return (
//     <View style={{ flexGrow: 1 }}>
//       <Title title="เพิ่มเติม" />
//       <View
//         style={{
//           flexGrow: 1,
//           marginLeft: 10,
//         }}
//       >

//         {/* <Checkbox
//           label="My Checkbox"
//           value={checkboxStates.checkbox1}
//           onValueChange={() => toggleCheckBox('checkbox1')}
//           containerStyle={{
//             padding: 3,
//             backgroundColor: 'transparent', // Background color of the container
//             borderWidth: 0,
//           }}
//         />
//         <Checkbox
//           label="ไม่ผัก"
//           value={checkboxStates.checkbox2}
//           onValueChange={() => toggleCheckBox('checkbox2')}
//           containerStyle={{
//             padding: 3,
//             backgroundColor: 'transparent', // Background color of the container
//             borderWidth: 0,
//           }}
//         />
//         <Checkbox
//           label="พิเศษ"
//           value={checkboxStates.checkbox3}
//           onValueChange={() => toggleCheckBox('checkbox3')}
//           containerStyle={{
//             padding: 3,
//             backgroundColor: 'transparent', // Background color of the container
//             borderWidth: 0,
//           }}
//         /> */}
//       </View>
//     </View>
//   )
// }

const AddOn = () => {
  return <></>
}
type Setter = (oldChoices: Choice[]) => Choice[]

const ChoicesHandler: FC<{
  options: Option[]
  setChoices: (setter: Setter) => void
}> = ({ options, setChoices }) => {
  function handleChoice(
    type: Choice['type'],
    optionName: Choice['name'],
    newValue: Choice['value']
  ) {
    setChoices((prev) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const newChoice: Choice = {
        name: optionName,
        value: newValue,
        type: type,
      }
      const newChoices = prev.filter((ch) => ch.name !== optionName)
      newChoices.push(newChoice)
      return newChoices
    })
  }

  function optionMapper(option: Option) {
    if (option.type === 'radio') {
      const availOptions = option.choices.map((ch) => ({
        label: ch,
        value: ch,
      }))
      return (
        <RadioButtonGroup
          key={option.name}
          initialValue={option.default}
          choices={availOptions}
          label={option.name}
          onValueChange={(newValue) => {
            handleChoice(option.type, option.name, newValue)
          }}
        />
      )
    }
    if (option.type === 'boolean') {
      return (
        <BooleanInput
          key={option.name}
          initialValue={option.default}
          label={option.name}
          onValueChange={(newValue) => {
            handleChoice(option.type, option.name, newValue)
          }}
        />
      )
    }
    if (option.type === 'string') {
      return (
        <TextInput
          key={option.name}
          initialValue={option.default}
          label={option.name}
          onValueChange={(newValue) => {
            handleChoice(option.type, option.name, newValue)
          }}
        />
      )
    }
    if (option.type === 'number') {
      return (
        <NumberInput
          key={option.name}
          initialValue={option.default}
          label={option.name}
          onValueChange={(newValue) => {
            handleChoice(option.type, option.name, newValue)
          }}
        />
      )
    }
  }
  return options.map(optionMapper)
}

export { RadioButtonGroup, ChoicesHandler, AddOn, TextInput, Title }

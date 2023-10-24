import { Text, View } from 'react-native'
import React, { Component, FC, LegacyRef, useRef } from 'react'
import {
  Checkbox,
  CheckboxProps,
  NumberInput as NumberInputRN,
  RadioButton,
  RadioGroup,
  Switch,
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
  value?: T
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
  value: value,
  label,
}) => {
  return (
    <>
      <Title title={label} />
      <RadioGroup initialValue={value} onValueChange={onValueChange}>
        {choices.map(({ value, label }) => {
          return <RadioButton key={label} value={value} label={label} />
        })}
      </RadioGroup>
    </>
  )
}

type TextInputProps = {
  onValueChange: (value: string) => void
  value?: string
  label: string
}

const TextInput: FC<TextInputProps> = ({
  onValueChange,
  value: value,
  label,
}) => (
  <>
    <Title title={label} />
    <TextField
      onChangeText={onValueChange}
      value={value}
      placeholder={label}
      fieldStyle={textInputStyles.fieldStyle}
      labelStyle={textInputStyles.labelStyle}
      style={{ fontFamily: 'Prompt_400Regular' }}
    />
  </>
)

type NumberInputProps = {
  onValueChange: (value: number) => void
  value?: number
  label: string
}

const NumberInput: FC<NumberInputProps> = ({
  onValueChange,
  value: value,
  label,
}) => (
  <>
    <Title title={label} />
    <NumberInputRN
      fractionDigits={0}
      containerStyle={textInputStyles.fieldStyle}
      onChangeNumber={(ev) => {
        if (ev.type === 'error') {
          return
        }
        onValueChange(ev.number)
      }}
      initialNumber={value}
    />
  </>
)

type BooleanInputProps = {
  onValueChange: (value: boolean) => void
  value?: boolean
  label: string
}

const BooleanInput: FC<BooleanInputProps> = ({
  label,
  onValueChange,
  value: value,
}) => (
  <>
    <Title title={label} />
    <Checkbox value={value} onValueChange={onValueChange} label={label} />
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
// type Setter = (oldChoices: Choice[]) => Choice[]

// const ChoicesHandler: FC<{
//   options: Option[]
//   setChoices: (setter: Setter) => void
// }> = ({ options, setChoices }) => {

//   return <View>{options.map(optionMapper)}</View>
// }

export { RadioButtonGroup, BooleanInput, NumberInput, AddOn, TextInput, Title }

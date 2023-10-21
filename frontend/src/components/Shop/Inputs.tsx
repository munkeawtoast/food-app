import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { RadioButton, RadioGroup, TextField } from 'react-native-ui-lib'
import textInputStyles from '../ui/styles/textInputStyles'
import { moderateScale } from '../../config/scale'

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
  initialValue: string
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
      label="ชื่อเมนู"
      placeholder="ชื่อเมนู"
      fieldStyle={textInputStyles.fieldStyle}
      labelStyle={textInputStyles.labelStyle}
      style={{ fontFamily: 'Prompt_400Regular' }}
    />
  </>
)

type BooleanInputProps = {
  onValueChange: (value: string) => void
  initialValue: string
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

export { RadioButtonGroup, TextInput, Title }

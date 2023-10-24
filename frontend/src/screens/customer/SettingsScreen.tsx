import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'
import { Switch } from 'react-native-ui-lib'

type BooleanSettingProps = {
  onValueChange: (newVal: boolean) => void
  defaultValue: boolean
  label: string
}

const BooleanSettings: FC<BooleanSettingProps> = ({
  defaultValue,
  onValueChange,
  label,
}) => {
  return (
    <View className="flex justify-between flex-row py-6 px-4">
      <Text className="font-prompt4">{label}</Text>
      <Switch value={defaultValue} onValueChange={onValueChange} />
    </View>
  )
}

export default function SettingsScreen() {
  const { notificationEnabled, setNotification } = useSettingsPersistentStore()
  const settings: BooleanSettingProps[] = [
    {
      label: 'การแจ้งเตือน',
      defaultValue: notificationEnabled,
      onValueChange: (value) => {
        setNotification(value)
      },
    },
  ]
  return (
    <ScrollView>
      {settings.map(({ defaultValue, onValueChange, label }, index) => (
        <>
          <BooleanSettings
            label={label}
            key={label}
            onValueChange={onValueChange}
            defaultValue={defaultValue}
          />
          {!(index === settings.length - 1) ?? (
            <View key={label + 'separator'} className="h-0.5 bg-gray-200" />
          )}
        </>
      ))}
    </ScrollView>
  )
}

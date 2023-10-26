import { StyleSheet, Text, View } from 'react-native'
import React, { FC, Fragment } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import useSettingsPersistentStore from '../../stores/settingsPersistentStore'
import { Button, Switch } from 'react-native-ui-lib'
import colors from 'tailwindcss/colors'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'
import { CustomerBottomTabProps } from '../../navigator/types'

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

const SettingsScreen: FC<
  CustomerBottomTabProps<'customer-bottom-settings'>
> = ({ navigation, route }) => {
  const { notificationEnabled, setNotification, reset } =
    useSettingsPersistentStore()
  const customerSettings: BooleanSettingProps[] = [
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
      {route.params?.for === 'customer' &&
        customerSettings.map(
          ({ defaultValue, onValueChange, label }, index) => (
            <Fragment key={label}>
              <BooleanSettings
                label={label}
                onValueChange={onValueChange}
                defaultValue={defaultValue}
              />
              {!(index === customerSettings.length - 1) ?? (
                <View className="h-0.5 bg-gray-200" />
              )}
            </Fragment>
          )
        )}
      <View className="px-4 pt-4">
        <Button
          label="ออกจากระบบ"
          style={{
            paddingVertical: 16,
          }}
          labelStyle={{
            ...buttonStyles.labelStyle,
          }}
          onPress={() => {
            console.log('logout')
            reset()
            navigation.navigate('auth', {
              screen: 'auth-landing',
            })
          }}
          backgroundColor={colors.red['500']}
        />
      </View>
    </ScrollView>
  )
}

export default SettingsScreen

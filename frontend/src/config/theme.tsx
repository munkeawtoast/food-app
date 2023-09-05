import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'
import colors from 'tailwindcss/colors'

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.sky["700"],
    background: colors.gray["50"],
    card: colors.white,
    text: colors.gray["950"],
    border: colors.gray["300"],
    notification: colors.red["400"],
  },
}

export const darkTheme: Theme = {
  ...DarkTheme,
}

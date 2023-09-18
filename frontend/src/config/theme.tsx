import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'
import colors from 'tailwindcss/colors'
import { moderateScale } from './scale'
import { CaretLeft } from 'phosphor-react-native'
import { CardStyleInterpolators } from '@react-navigation/stack'
import { View } from 'react-native'

export const theme = {
  fontFamily: lightTheme,
} as const

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.sky['700'],
    background: colors.gray['50'],
    card: colors.white,
    text: colors.gray['950'],
    border: colors.gray['300'],
    notification: colors.red['400'],
  },
}

export const defaultScreenOptions = {
  headerTitleStyle: {
    fontFamily: 'Prompt_400Regular',
    color: colors.white,
    fontSize: moderateScale(20),
  },
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.sky[900],
  },
  headerBackTitle: 'กลับ',
  headerBackTitleStyle: {
    fontFamily: 'Prompt_400Regular',
  },
  headerTintColor: colors.white,
  headerBackImage: ({ tintColor }: { tintColor: string }) => (
    <CaretLeft color={tintColor} weight="bold" />
  ),
} as const

export const animationFromBottom = {
  headerMode: 'screen',
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
} as const

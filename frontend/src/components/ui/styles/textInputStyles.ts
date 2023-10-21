import { StyleSheet } from 'react-native'
import colors from 'tailwindcss/colors'

const textInputStyles = StyleSheet.create({
  fieldStyle: {
    backgroundColor: colors.white,
    borderColor: colors.gray['300'],
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    padding: 16,
  },
  labelStyle: {
    color: colors.gray['600'],
    fontSize: 16,
    fontWeight: 'bold',

    fontFamily: 'Prompt_400Regular',
  },
})

export default textInputStyles

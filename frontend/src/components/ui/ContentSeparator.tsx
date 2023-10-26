import { Text, View } from 'react-native'
import { moderateScale } from '../../config/scale'
const ContentSeparator = ({
  width = 'full',
  label,
}: {
  width?: 'full' | 'screen'
  label?: string
}) => {
  return (
    <View
      className={`min-h-2.5  bg-gray-100 px-2 shadow-inner ${
        width === 'full' ? 'w-full' : 'w-screen'
      }`}
    >
      {label ? (
        <Text
          className="py-1 font-prompt4 "
          style={{ fontSize: moderateScale(18) }}
        >
          {label}
        </Text>
      ) : null}
    </View>
  )
}
export default ContentSeparator

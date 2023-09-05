import React from 'react'
import { Text, View } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'

const MaskedTest = () => {
  return (
    <View style={{}}>
      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: '#00000080',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 310,
                height: 310,
                backgroundColor: 'red',
              }}
            />
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
      </MaskedView>
    </View>
  )
}

export default MaskedTest

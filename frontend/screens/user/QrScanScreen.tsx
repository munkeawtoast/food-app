import { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  useWindowDimensions,
} from 'react-native'
import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner'
import MaskedView from '@react-native-masked-view/masked-view'

function QrScanScreen() {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View className="flex-1 bg-black">
      <MaskedView
        className="flex-1"
        maskElement={
          <View className="flex-1 justify-center items-center bg-[#ffffff99]">
            <View
              className="bg-black"
              style={{
                width: width * 0.8,
                height: width * 0.8,
              }}
            />
          </View>
        }
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned ? (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => setScanned(false)}
          />
        ) : (
          <View className="w-full h-full" />
        )}
      </MaskedView>
    </View>
  )
}

export default QrScanScreen

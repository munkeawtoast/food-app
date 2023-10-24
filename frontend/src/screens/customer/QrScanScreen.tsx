import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native'
import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner'
import { Button } from 'react-native-ui-lib'
import MaskedView from '@react-native-masked-view/masked-view'
import { CustomerStackProps } from '../../navigator/types'
import useCurrentShopStore from '../../stores/customer/currentShopStore'
import { StatusBar } from 'expo-status-bar'

function QrScanScreen({
  navigation,
  route,
}: CustomerStackProps<'customer-scan'>) {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)
  const { width } = useWindowDimensions()
  const { setShopWithShopId } = useCurrentShopStore()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    const shopPrefix = 'qr_food_app-'
    if (data.startsWith(shopPrefix)) {
      const shopId = data.split(shopPrefix)[1]
      console.log(shopId)
      if (!shopId) {
        return
      }
      setScanned(true)
      setShopWithShopId(Number(shopId))
      console.log(JSON.stringify(navigation.getState(), null, 2))
      navigation.replace('customer-shop', {
        screen: 'customer-shop-home',
      })
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <>
      <StatusBar style="light" />
      <View className="flex-1 bg-black">
        {/* <SafeAreaView>
        <Button
          backgroundColor="red"
          label="กลับ"
          style={{
            ...buttonStyles.style,
            // width: 0,
          }}
          onPress={() => {
            console.log('asdjoaisji')
            navigation.navigate('customer-bottom', {
              screen: 'customer-bottom-home',
            })
          }}
          iconSource={() => <ArrowBendUpLeft color="white" weight="bold" />}
          labelStyle={{
            ...buttonStyles.labelStyle,
            color: colors.white,
          }}
        />
      </SafeAreaView> */}
        <MaskedView
          style={{
            flex: 1,
          }}
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
              label="Tap to Scan Again"
              onPress={() => setScanned(false)}
            />
          ) : (
            <View className="w-full h-full"></View>
          )}
        </MaskedView>
      </View>
    </>
  )
}

export default QrScanScreen

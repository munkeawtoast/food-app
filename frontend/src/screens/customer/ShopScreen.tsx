import { FC, Suspense, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native'
import useTestPersistentStore from '../../stores/testPersistentStore'
import {
  HourglassHigh,
  Users,
  Timer,
  CaretDown,
  CaretUp,
  User,
  Clock,
} from 'phosphor-react-native'
import { moderateScale } from '../../config/scale'
import colors from 'tailwindcss/colors'
import { FoodWithOptions } from '../../models/food'
import { Choice } from '../../models/choice'
import FoodListings from '../../components/Shop/FoodListing'
import useCurrentShopStore from '../../stores/customer/currentShopStore'
import { CustomerShopStackProps } from '../../navigator/types'
import {
  AddOn,
  BooleanInput,
  NumberInput,
  TextInput,
  RadioButtonGroup,
} from '../../components/Shop/Inputs'
import {
  Button,
  KeyboardAwareScrollView,
  LoaderScreen,
} from 'react-native-ui-lib'
import { buttonStyles } from '../../components/ui/styles/buttonStyles'
import { StatusBar } from 'expo-status-bar'
import createOrder from '../../api/customer/createOrder'
import { Order } from '../../models/order'

interface QueueShownProps {
  isAccordionOpen: boolean
  setIsAccordionOpen: (isAccordionOpen: boolean) => void
}

const { width, height } = Dimensions.get('window')

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

const Split: FC = () => {
  return (
    <View className="mt-5 items-center">
      <View className="bg-gray-200 w-4/5 h-0.5" />
    </View>
  )
}

const People: FC<{ queue: Order }> = ({ queue }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: height * 0.02 }}>
      <View style={{ flexDirection: 'column', padding: 10, borderWidth: 3 }}>
        <User size={30} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'column',
          gap: 10,
          marginLeft: width * 0.03,
        }}
      >
        <Text style={{ fontSize: 20 }}>คิวที่</Text>
        <Text>เตี่ยววว</Text>
      </View>
      <View
        style={{ flexDirection: 'column', marginLeft: width * 0.35, gap: 5 }}
      >
        <Clock size={35} color="black" />
        <Text style={{ fontSize: 16 }}>2 นาที</Text>
      </View>
    </View>
  )
}

const HourGlassContianer: FC = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFEDD5',
        borderRadius: 999,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HourglassHigh size={moderateScale(35)} color={colors.orange['300']} />
    </View>
  )
}

const HeaderDescription: FC<{
  queueBefore: number
  estimatedTime: number
}> = ({ queueBefore, estimatedTime }) => (
  <View style={{ flexDirection: 'row' }}>
    <Users
      size={20}
      color="#FDBA74"
      style={{
        marginLeft: 15,
      }}
    />
    <Text style={{ fontSize: height * 0.02, marginLeft: 10 }}>
      {queueBefore} คน
    </Text>
    <Text
      style={{
        fontSize: height * 0.02,
        marginLeft: 10,
        color: '#D9D9D9',
      }}
    >
      {' '}
      |
    </Text>
    <Timer
      size={20}
      color="#FDBA74"
      style={{
        marginLeft: 15,
      }}
    />
    <Text style={{ fontSize: height * 0.02, marginLeft: 10 }}>
      ≈ {estimatedTime} นาที
    </Text>
  </View>
)

const AccordionContent: FC<{ isAccordionOpen: boolean }> = ({
  isAccordionOpen,
}) => (
  <>
    {isAccordionOpen ? (
      <View className="relative z-10 items-center">
        <View>
          <People />
          <People />
        </View>
      </View>
    ) : null}
  </>
)

const QueueShown: FC<QueueShownProps> = ({
  isAccordionOpen,
  setIsAccordionOpen,
}) => {
  const { addABear, bears } = useTestPersistentStore()

  return (
    <View className="relative">
      <View
        style={{
          marginTop: moderateScale(20),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View className="flex-row">
          <HourGlassContianer />
          <View>
            <Text
              style={{
                fontFamily: 'Prompt_400Regular',
                fontSize: moderateScale(16),
                textAlign: 'left',
                paddingLeft: 10,
              }}
            >
              คิวก่อนหน้า
            </Text>
            <HeaderDescription estimatedTime={bears} queueBefore={bears} />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setIsAccordionOpen(!isAccordionOpen)} // Toggle accordion state
        >
          <View className="p-2">
            {isAccordionOpen ? (
              <CaretUp
                weight="bold"
                size={moderateScale(30)}
                color={colors.gray[400]}
              />
            ) : (
              <CaretDown
                weight="bold"
                size={moderateScale(30)}
                color={colors.gray[400]}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <AccordionContent isAccordionOpen={isAccordionOpen} />
    </View>
  )
}

const ShopScreen: FC<CustomerShopStackProps<'customer-shop-home'>> = ({
  navigation,
  route,
}) => {
  const { shop, resetShop, setShopWithShopId } = useCurrentShopStore()

  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [activeFoodId, setActiveFoodId] = useState<FoodWithOptions['id']>(-1)
  const [activeFood, setActiveFood] = useState<FoodWithOptions | null>(null)
  const [choices, setChoices] = useState<Choice[]>([])
  const [message, setMessage] = useState('')
  const [order, setOrder] = useState<Order['food_data'] | undefined>()

  function onUnmount() {
    resetShop()
  }
  useEffect(() => {
    setShopWithShopId(route.params.shopId)
    return onUnmount
  }, [])

  useEffect(() => {
    if (!shop) {
      return
    }

    setActiveFoodId(shop.food[0].id)
  }, [shop])

  useEffect(() => {
    if (!shop) {
      return
    }
    setActiveFood(shop.food.find((food) => food.id === activeFoodId)!)
  }, [activeFoodId])

  function orderRelayBecusUseEffectSucks() {
    console.log('sending', order)
    return order
  }

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={async () => {
            const res = await createOrder(orderRelayBecusUseEffectSucks()!)
            navigation.navigate('customer-shop-payment', res.data)
          }}
          className="px-3"
        >
          <Text className="text-white font-prompt4 text-xl">จ่ายเงิน</Text>
        </Pressable>
      ),
    })
  }, [navigation])

  useEffect(() => {
    if (!activeFood) {
      return
    }
    const newChoices: Choice[] = activeFood.options.options.map((option) => ({
      name: option.name,
      value: undefined,
      price: undefined,
    }))
    setChoices(newChoices)
  }, [activeFood])

  function handleChoice(choice: Choice) {
    setChoices((oldChoice) => {
      const newChoices = oldChoice.map((ch) => {
        if (ch.name === choice.name) {
          return choice
        }
        return ch
      })
      return newChoices
    })
  }

  useEffect(() => {
    const newOrder: Order['food_data'] = {
      ...activeFood!,
      choices,
      comment: message,
    }
    console.log('setting new order to be ', newOrder)
    setOrder(newOrder)
  }, [activeFood, choices, message, shop])
  useEffect(() => {
    // console.log('choices ' + JSON.stringify(choices, null, 2))
    // console.log('options ' + JSON.stringify(activeFood?.options, null, 2))
  }, [choices])
  return (
    <>
      <StatusBar style="light" />
      {shop ? (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{
            backgroundColor: colors.white,
            height: height * 0.05,
            flex: 1,
            flexShrink: 1,
            flexDirection: 'column',
          }}
        >
          <View style={styles.content}>
            <QueueShown
              isAccordionOpen={isAccordionOpen}
              setIsAccordionOpen={setIsAccordionOpen}
            />
            <Split />
          </View>
          <View>
            <FoodListings
              activeFoodIndex={activeFoodId}
              foods={shop.food}
              onActiveFoodChange={setActiveFoodId}
            />
          </View>
          <View style={styles.content}>
            {choices.map((choice) => {
              const options = shop.food
                .find((food) => food.id === activeFoodId)!
                .options.options.find((op) => op.name === choice.name)
              if (!options) {
                return
              }
              if (options.options.length > 1 && options.isSingle) {
                return (
                  <RadioButtonGroup
                    key={options.name}
                    value={options.name}
                    choices={options.options.map((op) => ({
                      label: op.name + (op.price ? ` +${op.price} บาท` : ''),
                      pricesIncrease: op.price == null ? 0 : op.price,
                      value: op.name,
                    }))}
                    label={options.name}
                    onValueChange={(newValue) => {
                      handleChoice({
                        name: options.name,
                        value: newValue,
                        price: options.options.find(
                          (op) => op.name === newValue
                        )!.price,
                      })
                    }}
                  />
                )
              }
              if (options.options.length === 1 && options.isSingle) {
                return (
                  <BooleanInput
                    key={options.name}
                    price={options.options[0]?.price}
                    value={choice.value === options.options[0]?.name}
                    label={options.name}
                    onValueChange={(newValue) => {
                      if (newValue) {
                        handleChoice({
                          name: options.name,
                          value: options.name,
                          price: options.options.find(
                            (op) => op.name === choice.name
                          )?.price,
                        })
                      } else {
                        handleChoice({
                          name: options.name,
                          value: undefined,
                          price: options.options.find(
                            (op) => op.name === choice.name
                          )?.price,
                        })
                      }
                    }}
                  />
                )
              }
            })}
            <TextInput
              label="คำแนะนำเพิ่มเติมให้ทางร้าน"
              onValueChange={setMessage}
            />
          </View>
          <View className="h-20" />
        </KeyboardAwareScrollView>
      ) : (
        <LoaderScreen color={colors.sky[800]} />
      )}
    </>
  )
}
// const AA = (navigation) => (
//   <View style={styles.container}>
//     <TouchableOpacity
//       style={{
//         position: 'absolute',
//         bottom: 0,
//         right: width * 0.02,
//         padding: 30,
//         backgroundColor: 'red',
//         borderRadius: 20,
//       }}
//       onPress={() => {
//         navigation.navigate('Queue')
//       }}
//     >
//       <View style={{ alignContent: 'flex-end', alignItems: 'flex-end' }}>
//         <Text>Clicked</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
// )

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: '5%', // Adjust as needed for spacing
    paddingBottom: '5%', // Adjust as needed for spacing
  },
  foodCategory: {
    flexDirection: 'row',
    gap: 2,
    paddingHorizontal: 0,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150, // Adjust the width and height as needed
    height: 120,
    backgroundColor: colors.gray['200'],
    borderRadius: 5,
  },
})

export default ShopScreen

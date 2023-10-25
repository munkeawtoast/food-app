import { FC, Suspense, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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
import { mockFoods } from '../../dev/mock'
import useCurrentShopStore from '../../stores/customer/currentShopStore'
import { CustomerShopStackProps } from '../../navigator/types'
import {
  AddOn,
  BooleanInput,
  NumberInput,
  TextInput,
  RadioButtonGroup,
} from '../../components/Shop/Inputs'

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

const People: FC = () => {
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

const Accordion: FC<{ isAccordionOpen: boolean }> = ({ isAccordionOpen }) => (
  <View className="relative z-10 bg-slate-400">
    {isAccordionOpen ?? (
      <View
        style={{
          zIndex: 100,
          right: 0,
          top: 0,
          width: '100%',
          position: 'absolute',
          marginLeft: -40,
          padding: 20,
          backgroundColor: '#E5E7EB',
          borderRadius: 20,
        }}
      >
        <People />
        <People />
      </View>
    )}
  </View>
)

const QueueShown: FC<QueueShownProps> = ({
  isAccordionOpen,
  setIsAccordionOpen,
}) => {
  const { addABear, bears } = useTestPersistentStore()

  return (
    <View className="bg-white">
      <View
        style={{
          marginTop: moderateScale(20),
          flexDirection: 'row',
        }}
      >
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

        <TouchableOpacity
          onPress={() => setIsAccordionOpen(!isAccordionOpen)} // Toggle accordion state
        >
          {isAccordionOpen ? (
            <View>
              <CaretUp weight="bold" size={moderateScale(40)} color="#6B7280" />
            </View>
          ) : (
            <View>
              <CaretDown
                weight="bold"
                size={moderateScale(30)}
                color="#6B7280"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Accordion isAccordionOpen={isAccordionOpen} />
    </View>
  )
}

const ShopScreen: FC<CustomerShopStackProps<'customer-shop-home'>> = ({
  navigation,
  route,
}) => {
  // const { shop, resetShop } = useCurrentShopStore()
  // function onUnmount() {
  //   resetShop()
  // }
  // useEffect(() => {
  //   console.log(JSON.stringify(shop, null, 2))
  // }, [shop])

  // useEffect(() => {
  //   return onUnmount
  // }, [])
  // const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  // const [foods] = useState<FoodWithOptions[]>(mockFoods)
  // const [activeFoodId, setActiveFoodId] = useState<FoodWithOptions['id']>(
  //   mockFoods[0].id
  // )
  // const [choices, setChoices] = useState<Choice[]>([])

  return null

  function handleChoice() {
    // type: Choice['type'],
    // optionName: Choice['name'],
    // newValue: Choice['value']
    //   console.log('handling')
    //   console.log(JSON.stringify(choices, null, 2))
    //   console.log('---')
    //   choices.find((choice) => choice.name === optionName)!.value = newValue
    //   console.log('---')
    //   console.log(JSON.stringify(choices, null, 2))
    //   setChoices(choices)
    // }
    // useEffect(() => {
    //   console.log(JSON.stringify(choices, null, 2))
    // }, [choices])
    // useEffect(() => {
    //   const { options } = foods.find((food) => food.id === activeFoodId)!.options
    //   setChoices(
    //     options.map(
    //       (option) =>
    //         ({
    //           name: option.name,
    //           type: option.type,
    //           value: option.default,
    //         }) as Choice
    //     )
    //   )
    // }, [activeFoodId])
    // return (
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={{ flexGrow: 1 }}
    //     style={{
    //       backgroundColor: colors.white,
    //       height: height * 0.05,
    //       flex: 1,
    //       flexShrink: 1,
    //       flexDirection: 'column',
    //     }}
    //   >
    //     <View style={styles.content}>
    //       <QueueShown
    //         isAccordionOpen={isAccordionOpen}
    //         setIsAccordionOpen={setIsAccordionOpen}
    //       />
    //       <Split />
    //     </View>
    //     <View>
    //       <FoodListings
    //         activeFoodIndex={activeFoodId}
    //         foods={foods}
    //         onActiveFoodChange={setActiveFoodId}
    //       />
    //     </View>
    //     <View style={styles.content}>
    //       {choices.map((choice) => {
    //         const option = foods
    //           .find((food) => food.id === activeFoodId)!
    //           .options.options.find((op) => op.name === choice.name)
    //         if (!option) {
    //           return
    //         }
    //         if (option.type === 'radio') {
    //           const availOptions = option.choices.map((ch) => ({
    //             label: ch,
    //             value: ch,
    //           }))
    //           return (
    //             <RadioButtonGroup
    //               key={option.name}
    //               value={choice.value as string}
    //               choices={availOptions}
    //               label={option.name}
    //               onValueChange={(newValue) => {
    //                 handleChoice(option.type, option.name, newValue)
    //               }}
    //             />
    //           )
    //         }
    //         if (option.type === 'boolean') {
    //           return (
    //             <BooleanInput
    //               key={option.name}
    //               value={choice.value as boolean}
    //               label={option.name}
    //               onValueChange={(newValue) => {
    //                 console.log(newValue)
    //                 handleChoice(option.type, option.name, newValue)
    //               }}
    //             />
    //           )
    //         }
    //         if (option.type === 'string') {
    //           return (
    //             <TextInput
    //               key={option.name}
    //               value={choice.value as string}
    //               label={option.name}
    //               onValueChange={(newValue) => {
    //                 handleChoice(option.type, option.name, newValue)
    //               }}
    //             />
    //           )
    //         }
    //         if (option.type === 'number') {
    //           return (
    //             <NumberInput
    //               key={option.name}
    //               value={choice.value as number}
    //               label={option.name}
    //               onValueChange={(newValue) => {
    //                 handleChoice(option.type, option.name, newValue)
    //               }}
    //             />
    //           )
    //         }
    //         return null
    //       })}
    //     </View>
    //     <View className="h-40" />
    //   </ScrollView>
    // )
  }
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

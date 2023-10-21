import { FC, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Checkbox } from 'react-native-ui-lib'
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
    <View
      style={{
        marginTop: height * 0.03,
        marginLeft: width * 0.1,
        width: width * 0.8,
        height: height * 0.002,
        backgroundColor: '#D9D9D9',
      }}
    ></View>
  )
}

const AddOn: FC = () => {
  const [checkboxStates, setCheckboxStates] = useState<{
    checkbox1: boolean
    checkbox2: boolean
    checkbox3: boolean
  }>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  })

  const toggleCheckBox = (checkboxName: keyof typeof checkboxStates) => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxName]: !checkboxStates[checkboxName],
    })
  }

  return (
    <View style={{ flexGrow: 1 }}>
      <Title title="เพิ่มเติม" />
      <View
        style={{
          flexGrow: 1,
          marginLeft: width * 0.02,
          marginTop: height * 0.01,
        }}
      >
        <Checkbox
          label="My Checkbox"
          value={checkboxStates.checkbox1}
          onValueChange={() => toggleCheckBox('checkbox1')}
          containerStyle={{
            padding: 3,
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
        <Checkbox
          label="ไม่ผัก"
          value={checkboxStates.checkbox2}
          onValueChange={() => toggleCheckBox('checkbox2')}
          containerStyle={{
            padding: 3,
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
        <Checkbox
          label="พิเศษ"
          value={checkboxStates.checkbox3}
          onValueChange={() => toggleCheckBox('checkbox3')}
          containerStyle={{
            padding: 3,
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
      </View>
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
    {isAccordionOpen ? (
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
    ) : undefined}
  </View>
)

const QueueShown: FC<QueueShownProps> = ({
  isAccordionOpen,
  setIsAccordionOpen,
}) => {
  const { addABear, bears } = useTestPersistentStore()

  return (
    <View>
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

const ShopScreen: FC = ({ navigation }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [foods] = useState<FoodWithOptions[]>(mockFoods)
  const [activeFoodIndex, setActiveFoodIndex] = useState<FoodWithOptions['id']>(
    mockFoods[0].id
  )
  const [choices, setChoices] = useState<Choice[]>([])

  return (
    <ScrollView
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
        <View>
          <QueueShown
            isAccordionOpen={isAccordionOpen}
            setIsAccordionOpen={setIsAccordionOpen}
          />
          <Split />
          <FoodListings
            activeFoodIndex={activeFoodIndex}
            foods={foods}
            onActiveFoodChange={setActiveFoodIndex}
          />
        </View>
        <AddOn />
        {/* <AA navigation={navigation} /> */}
      </View>
    </ScrollView>
  )
}
const AA = (navigation) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 0,
        right: width * 0.02,
        padding: 30,
        backgroundColor: 'red',
        borderRadius: 20,
      }}
      onPress={() => {
        navigation.navigate('Queue')
      }}
    >
      <View style={{ alignContent: 'flex-end', alignItems: 'flex-end' }}>
        <Text>Clicked</Text>
      </View>
    </TouchableOpacity>
  </View>
)

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

import { FC, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Dimensions,
  Animated,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import useTestPersistentStore from '../../stores/testPersistentStore'
import {
  HourglassHigh,
  Users,
  Timer,
  CaretLeft,
  CaretDown,
  CaretUp,
  User,
  Clock,
} from 'phosphor-react-native'
import { moderateScale } from '../../config/scale'

interface ItemProps {
  number: number
  ImageUrl: ImageSourcePropType
  activeView: number | null
  handleViewPress: (number: number) => void
}

interface RadioButton {
  label: string
  selected: boolean | null
  OnCheck: () => void
}

interface QueueShownProps {
  isAccordionOpen: boolean
  setIsAccordionOpen: (isAccordionOpen: boolean) => void
}

const { width, height } = Dimensions.get('window')

const RadioButtonWannabe: FC<RadioButton> = ({ label, selected, OnCheck }) => {
  return (
    <TouchableOpacity onPress={OnCheck}>
      <View
        style={{
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: height * 0.01,
        }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: selected ? 'blue' : 'gray',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selected && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 25,
                backgroundColor: 'blue',
              }}
            />
          )}
        </View>
        <Text style={{ marginLeft: width * 0.02 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const RadioButtonGroup: FC = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { label: 'ไม่เผ็ด', value: 'option1' },
    { label: 'เผ็ดน้อย', value: 'option2' },
    { label: 'เผ็ดกลาง', value: 'option3' },
    { label: 'เผ็ดมาก', value: 'option4' },
  ]

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <View>
      <Text
        style={{
          flexGrow: 1,
          fontSize: moderateScale(22),
          color: '#C2410C',
          marginLeft: width * 0.02,
          marginTop: height * 0.02,
        }}
      >
        ระดับความเผ็ด
      </Text>
      <View style={{ marginLeft: width * 0.03, marginBottom: height * 0.02 }}>
        {options.map((option) => (
          <RadioButtonWannabe
            key={option.value}
            label={option.label}
            selected={selectedOption === option.value}
            OnCheck={() => handleOptionSelect(option.value)}
          />
        ))}
      </View>
    </View>
  )
}

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
      <Text
        style={{
          fontSize: moderateScale(22),
          color: '#C2410C',
          marginLeft: width * 0.02,
          marginTop: height * 0.01,
        }}
      >
        เพิ่มเติม
      </Text>
      <View
        style={{
          flexGrow: 1,
          marginLeft: width * 0.02,
          marginTop: height * 0.01,
        }}
      >
        <CheckBox
          title="My Checkbox"
          checked={checkboxStates.checkbox1}
          onPress={() => toggleCheckBox('checkbox1')}
          containerStyle={{
            padding: 3,
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
        <CheckBox
          title="ไม่ผัก"
          checked={checkboxStates.checkbox2}
          onPress={() => toggleCheckBox('checkbox2')}
          containerStyle={{
            padding: 3,
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
        <CheckBox
          title="พิเศษ"
          checked={checkboxStates.checkbox3}
          onPress={() => toggleCheckBox('checkbox3')}
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

const QueueShown: FC<QueueShownProps> = ({
  isAccordionOpen,
  setIsAccordionOpen,
}) => {
  const { addABear, bears } = useTestPersistentStore()

  return (
    <View>
      <View
        style={{
          marginTop: height * 0.05,
          marginLeft: width * 0.05, // 5% of the screen width
          flexDirection: 'row',
          gap: 30,
        }}
      >
        <View>
          <HourglassHigh
            size={moderateScale(50)}
            color="#FDBA74"
            style={{
              backgroundColor: '#FFEDD5',
              padding: 15,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 3, // Adjust the flex value to control the width of the accordion content
            flexDirection: 'column',
            gap: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: moderateScale(22), textAlign: 'center' }}>
            คิวก่อนหน้า
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Users
              size={height * 0.03}
              color="#FDBA74"
              style={{
                marginLeft: 15,
              }}
            />
            <Text style={{ fontSize: height * 0.02, marginLeft: 10 }}>
              {bears} คน
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
              size={height * 0.03}
              color="#FDBA74"
              style={{
                marginLeft: 15,
              }}
            />
            <Text style={{ fontSize: height * 0.02, marginLeft: 10 }}>
              ≈ {bears + 2} นาที
            </Text>
          </View>
          {isAccordionOpen && (
            <View
              style={{
                marginLeft: -40,
                padding: width * 0.05,
                backgroundColor: '#E5E7EB',
                borderRadius: 20,
              }}
            >
              <People />
              <People />
            </View>
          )}
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
                size={moderateScale(40)}
                color="#6B7280"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const FoodCategory: FC = () => {
  const [activeView, setActiveView] = useState(0)

  const handleViewPress = (viewNumber: number) => {
    setActiveView(viewNumber)
  }

  const Item: FC<ItemProps> = ({
    number,
    ImageUrl,
    activeView,
    handleViewPress,
  }) => {
    return (
      <TouchableOpacity
        onPress={() => handleViewPress(number)}
        style={[
          styles.item,
          activeView === number && {
            backgroundColor: 'orange',
            padding: 10,
          },
        ]}
      >
        <Image source={ImageUrl} />
        <Text style={{ fontSize: height * 0.02 }}> ก๋วยเตี๋ยว </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text
        style={{
          flexGrow: 1,
          fontSize: moderateScale(22),
          color: '#C2410C',
          marginLeft: '2%',
          marginTop: '2%',
        }}
      >
        ประเภทอาหาร
      </Text>
      <ScrollView horizontal contentContainerStyle={styles.foodCategory}>
        <View style={{ flexDirection: 'row' }}>
          <Item
            number={1}
            activeView={activeView}
            ImageUrl={require('frontend/assets/Noodle.png')}
            handleViewPress={handleViewPress}
          />
          <Item
            number={2}
            activeView={activeView}
            ImageUrl={require('frontend/assets/Noodle.png')}
            handleViewPress={handleViewPress}
          />
          <Item
            number={3}
            activeView={activeView}
            ImageUrl={require('frontend/assets/Noodle.png')}
            handleViewPress={handleViewPress}
          />
          <Item
            number={4}
            activeView={activeView}
            ImageUrl={require('frontend/assets/Noodle.png')}
            handleViewPress={handleViewPress}
          />
          <Item
            number={5}
            activeView={activeView}
            ImageUrl={require('frontend/assets/Noodle.png')}
            handleViewPress={handleViewPress}
          />
          <Item
            number={6}
            activeView={activeView}
            ImageUrl={require('frontend/assets/Noodle.png')}
            handleViewPress={handleViewPress}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const OrderStatusScreen: FC = (navigation) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        backgroundColor: '#0C4A6E',
        height: height * 0.05,
        flex: 1,
        flexShrink: 1,
        flexDirection: 'column',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: height * 0.01,
            marginLeft: width * 0.01,
          }}
        >
          <CaretLeft size={40} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: height * 0.03,
              marginLeft: width * 0.01,
            }}
          >
            กลับ
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              fontSize: height * 0.03,
              color: 'white',
              marginTop: height * 0.01,
            }}
          >
            วาสนาก๋วยเตี๋ยว
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          {isAccordionOpen ? (
            <View>
              <QueueShown
                isAccordionOpen={isAccordionOpen}
                setIsAccordionOpen={setIsAccordionOpen}
              />
              <Split />
            </View>
          ) : (
            <View>
              <QueueShown
                isAccordionOpen={isAccordionOpen}
                setIsAccordionOpen={setIsAccordionOpen}
              />
              <Split />
              <FoodCategory />
            </View>
          )}
          <AddOn />
          <RadioButtonGroup />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: width * 0.03,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  content: {
    paddingHorizontal: '5%', // Adjust as needed for spacing
    paddingBottom: '5%', // Adjust as needed for spacing
  },
  foodCategory: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.05, // Adjust as needed for spacing
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3, // Adjust the width and height as needed
    height: height * 0.2,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginRight: width * 0.02, // Adjust for spacing
  },
})

export default OrderStatusScreen

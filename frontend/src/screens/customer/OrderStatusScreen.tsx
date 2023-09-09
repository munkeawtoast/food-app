import { FC, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import useTestPersistentStore from '../../stores/testPersistentStore'
import { HourglassHigh, Users, Timer, CaretLeft } from 'phosphor-react-native'

interface ItemProps {
  number: number
  activeView: number | null
  handleViewPress: (number: number) => void
}

interface RadioButton {
  label: string
  selected: boolean | null
  OnCheck: () => void
}

const RadioButtonWannabe: FC<RadioButton> = ({ label, selected, OnCheck }) => {
  return (
    <TouchableOpacity onPress={OnCheck}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: '1%' }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
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
                borderRadius: 6,
                backgroundColor: 'blue',
              }}
            />
          )}
        </View>
        <Text style={{ marginLeft: 8 }}>{label}</Text>
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
          fontSize: 22,
          color: '#C2410C',
          marginLeft: '2%',
          marginTop: '2%',
        }}
      >
        ระดับความเผ็ด
      </Text>
      <View style={{ marginLeft: '3%', marginBottom: '2%' }}>
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
        marginTop: 20,
        marginLeft: '10%',
        width: '80%',
        height: 2,
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
    <View>
      <Text
        style={{
          fontSize: 22,
          color: '#C2410C',
          marginLeft: '2%',
          marginTop: '2%',
        }}
      >
        เพิ่มเติม
      </Text>
      <View style={{ marginLeft: '2%' }}>
        <CheckBox
          title="My Checkbox"
          checked={checkboxStates.checkbox1}
          onPress={() => toggleCheckBox('checkbox1')}
          containerStyle={{
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
        <CheckBox
          title="ไม่ผัก"
          checked={checkboxStates.checkbox2}
          onPress={() => toggleCheckBox('checkbox2')}
          containerStyle={{
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
        <CheckBox
          title="พิเศษ"
          checked={checkboxStates.checkbox3}
          onPress={() => toggleCheckBox('checkbox3')}
          containerStyle={{
            backgroundColor: 'transparent', // Background color of the container
            borderWidth: 0,
          }}
        />
      </View>
    </View>
  )
}

const QueueShown: FC = () => {
  const { addABear, bears } = useTestPersistentStore()
  return (
    <View
      style={{
        marginTop: '5%',
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <HourglassHigh
        size={50}
        color="#FDBA74"
        style={{
          backgroundColor: '#FFEDD5',
          padding: 15,
          borderRadius: 25,
        }}
      />
      <View style={{ flexDirection: 'column', gap: 15 }}>
        <Text style={{ fontSize: 24, marginLeft: 30 }}>คิวก่อนหน้า</Text>
        <View style={{ flexDirection: 'row' }}>
          <Users
            size={26}
            color="#FDBA74"
            style={{
              marginLeft: 15,
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 10 }}>{bears} คน</Text>
          <Text style={{ fontSize: 20, marginLeft: 10, color: '#D9D9D9' }}>
            {' '}
            |
          </Text>
          <Timer
            size={26}
            color="#FDBA74"
            style={{
              marginLeft: 15,
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 10 }}>
            ≈ {bears + 2} นาที
          </Text>
        </View>
      </View>
    </View>
  )
}

const FoodCategory: FC = () => {
  const [activeView, setActiveView] = useState(0)

  const handleViewPress = (viewNumber: number) => {
    setActiveView(viewNumber)
  }

  const Item: FC<ItemProps> = ({ number, activeView, handleViewPress }) => {
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
        <Image source={require('frontend/assets/Noodle.png')} />
        <Text style={{ fontSize: 22 }}> ก๋วยเตี๋ยว </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          color: '#C2410C',
          marginLeft: '2%',
          marginTop: '2%',
        }}
      >
        ประเภทอาหาร
      </Text>
      <ScrollView horizontal contentContainerStyle={styles.foodCategory}>
        <View style={{ flexDirection: 'row', marginHorizontal: 50 }}>
          <Item
            number={1}
            activeView={activeView}
            handleViewPress={handleViewPress}
          />
          <Item
            number={2}
            activeView={activeView}
            handleViewPress={handleViewPress}
          />
          <Item
            number={3}
            activeView={activeView}
            handleViewPress={handleViewPress}
          />
          <Item
            number={4}
            activeView={activeView}
            handleViewPress={handleViewPress}
          />
          <Item
            number={5}
            activeView={activeView}
            handleViewPress={handleViewPress}
          />
          <Item
            number={6}
            activeView={activeView}
            handleViewPress={handleViewPress}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const OrderStatusScreen: FC = (navigation) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        backgroundColor: '#0C4A6E',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: '1%',
            marginLeft: '1%',
          }}
        >
          <CaretLeft size={40} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              marginLeft: 5,
            }}
          >
            กลับ
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              marginTop: '1%',
            }}
          >
            วาสนาก๋วยเตี๋ยว
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <QueueShown />
          <Split />
          <FoodCategory />
          <AddOn />
          <RadioButtonGroup />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
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
    width: '100%',
    paddingHorizontal: 20, // Adjust as needed for spacing
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%', // Adjust the width and height as needed
    height: 125,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginRight: 10, // Adjust for spacing
  },
})

export default OrderStatusScreen

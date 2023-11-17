export default [
  {
    name: 'พิเศษ',
    isSingle: true,
    required: false,
    options: [
      {
        name: 'พิเศษ',
        price: 10,
      },
    ],
  },
  {
    name: 'ระดับความเผ็ด',
    isSingle: true,
    required: true,
    options: [
      {
        name: 'ไม่เผ็ด',
      },
      {
        name: 'เผ็ดน้อย',
      },
      {
        name: 'เผ็ดกลาง',
      },
      {
        name: 'เผ็ดมาก',
      },
    ],
  },
  {
    name: 'เลือกหมู',
    isSingle: true,
    required: true,
    options: [
      {
        name: 'หมูสับ',
      },
      {
        name: 'หมูตุ๋น',
      },
      {
        name: 'หมูยอ',
      },
    ],
  },
  {
    isSingle: true,
    name: 'เส้นก๋วยเตี๋ยว',
    options: [
      {
        name: 'เส้นเล็ก',
      },
      {
        name: 'เส้นใหญ่',
      },
      {
        name: 'เส้นหมี่',
      },
      {
        name: 'เส้นบะหมี่',
      },
      {
        name: 'เส้นวุ้นเส้น',
      },
      {
        name: 'เส้นแก้ว',
      },
      {
        name: 'เส้นมาม่า',
      },
    ],
    required: true,
  },
]

import { create } from 'zustand'
import { Order } from '../model/shop'

function superSlowDeepClone(value: unknown) {
  return JSON.parse(JSON.stringify(value))
}

type OrdersStore = {
  orders: Order[]
  clearOrder: () => void
  resetOrder: () => void
}

const defaultOrders: Order[] = [
  {
    id: 0,
    customer_id: 1,
    count: 1,
    timestamp: '2023-09-17T16:08:36.977Z',
    item: {
      id: 0,
      name: 'ข้าวผัด',
      'image-url':
        'https://foodienotachef.com/wp-content/uploads/2020/08/4.2.jpg',
      choices: [
        {
          name: 'พิเศษ',
          type: 'boolean',
          value: false,
        },
        {
          name: 'ระดับความเผ็ด',
          type: 'radio',
          value: 'เผ็ดมาก',
        },
        {
          name: 'ใส่อะไรบ้าง',
          type: 'checkboxes',
          value: ['หมูสับ', 'ทะเล', 'ตับ'],
        },
        {
          name: 'เลขซักอย่าง',
          type: 'number',
          value: 1,
        },
        {
          name: 'เพิ่มเติม',
          type: 'string',
          value: 'ขอเค็มๆ',
        },
      ],
    },
  },
  {
    id: 0,
    customer_id: 1,
    count: 1,
    timestamp: '2023-09-17T16:08:36.977Z',
    item: {
      id: 0,
      name: 'ข้่าวผัด',
      'image-url':
        'https://foodienotachef.com/wp-content/uploads/2020/08/4.2.jpg',
      choices: [
        {
          name: 'พิเศษ',
          type: 'boolean',
          value: false,
        },
        {
          name: 'ระดับความเผ็ด',
          type: 'radio',
          value: 'เผ็ดมาก',
        },
        {
          name: 'ใส่อะไรบ้าง',
          type: 'checkboxes',
          value: ['หมูสับ', 'ทะเล', 'ตับ'],
        },
        {
          name: 'เลขซักอย่าง',
          type: 'number',
          value: 1,
        },
        {
          name: 'เพิ่มเติม',
          type: 'string',
          value: 'ขอเค็มๆ',
        },
      ],
    },
  },
  {
    id: 0,
    customer_id: 1,
    count: 1,
    timestamp: '2023-09-17T16:08:36.977Z',
    item: {
      id: 0,
      name: 'ข้่าวผัด',
      'image-url':
        'https://foodienotachef.com/wp-content/uploads/2020/08/4.2.jpg',
      choices: [
        {
          name: 'พิเศษ',
          type: 'boolean',
          value: false,
        },
        {
          name: 'ระดับความเผ็ด',
          type: 'radio',
          value: 'เผ็ดมาก',
        },
        {
          name: 'ใส่อะไรบ้าง',
          type: 'checkboxes',
          value: ['หมูสับ', 'ทะเล', 'ตับ'],
        },
        {
          name: 'เลขซักอย่าง',
          type: 'number',
          value: 1,
        },
        {
          name: 'เพิ่มเติม',
          type: 'string',
          value: 'ขอเค็มๆ',
        },
      ],
    },
  },
]

const useOrdersStore = create<OrdersStore>()((set, get) => ({
  clearOrder: () => set({ orders: [] }),
  resetOrder: () => set({ orders: superSlowDeepClone(defaultOrders) }),
  orders: superSlowDeepClone(defaultOrders),
}))

export default useOrdersStore

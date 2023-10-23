import { create } from 'zustand'
import { Order } from '../models/order'
import declareDoneApi from '../api/merchant/declareOrderDone'

type Success = true
type Failed = false

type State = {
  orders: Order[]
}

type Actions = {
  clearOrder: () => void
  reset: () => void
  declareOrderDone: (id: Order['id']) => Promise<Success | Failed>
}

const defaultOrders: Order[] = [
  {
    id: 0,
    customer_id: 1,
    count: 1,
    timestamp: '2023-09-17T16:08:36.977Z',
    food: {
      id: 0,
      food_name: 'ข้าวผัด',
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
          name: 'ใส่หมูสับ',
          type: 'boolean',
          value: true,
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

const initialStates: State = {
  orders: defaultOrders,
}

const useOrdersStore = create<Actions & State>()((set) => ({
  ...initialStates,
  clearOrder: () => set({ orders: [] }),
  declareOrderDone: async (id) => {
    if (id === undefined) {
      return false as Failed
    }
    try {
      await declareDoneApi({
        orderId: id,
      })
    } catch {
      return false as Failed
    }
    return true as Success
  },
  reset: () => set({ ...initialStates }),
}))

export default useOrdersStore

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

const defaultOrders: Order[] = []

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

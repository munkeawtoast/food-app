import { create } from 'zustand'
import { Order } from '../../models/order'
import getOrders from '../../api/customer/getOrders'

type State = {
  orders: Order[]
}

type Actions = {
  fetch: () => void
  resetOrder: () => void
}

const initialStates: State = {
  orders: [],
}

const useCurrentShopStore = create<Actions & State>()((set) => ({
  ...initialStates,
  resetOrder: () => {
    set({
      ...initialStates,
    })
  },
  fetch: async () => {
    const res = await getOrders()
    const orders = res.data
    set({ orders })
  },
}))

export default useCurrentShopStore

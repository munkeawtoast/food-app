import { create } from 'zustand'
import { Order } from '../../models/order'
import useSettingsPersistentStore from '../settingsPersistentStore'
import { getOrders } from '../../api/customer'

type State = {
  orders: Order[]
  myOrders: Order[]
}

type Actions = {
  fetch: () => void
  resetOrder: () => void
}

const initialStates: State = {
  orders: [],
  myOrders: [],
}

const useCustomerOrderStore = create<Actions & State>()((set) => ({
  ...initialStates,
  resetOrder: () => {
    set({
      ...initialStates,
    })
  },
  fetch: async () => {
    const res = await getOrders(1)
    const orders = res.data
    const myOrders = orders.filter(
      (or) =>
        or.customer_id === useSettingsPersistentStore.getState()?.customer?.id
    )
    if (myOrders.length > 0) {
      set({ orders, myOrders })
    } else {
      set({ orders })
    }
  },
}))

export default useCustomerOrderStore

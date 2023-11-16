import { create } from 'zustand'
import { Order } from '../../models/order'
import getOrders from '../../api/customer/getOrders'
import useSettingsPersistentStore from '../settingsPersistentStore'
import { getMerchantHistories } from '../../api/merchant'

type State = {
  histories: Order[]
}

type Actions = {
  fetch: () => void
  resetOrder: () => void
}

const initialStates: State = {
  histories: [],
}

const useHistoryListingStore = create<Actions & State>()((set) => ({
  ...initialStates,
  resetOrder: () => {
    set({
      ...initialStates,
    })
  },

  fetch: async () => {
    const start = new Date()
    start.setUTCHours(0, 0, 0, 0)
    const res = await getMerchantHistories({
      from: start.toUTCString(),
      to: new Date().toUTCString(),
    })
    const histories = res.data
    set({ histories })
  },
}))

export default useHistoryListingStore

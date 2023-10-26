import { create } from 'zustand'
import { Order } from '../../models/order'
import getOrders from '../../api/customer/getOrders'
import useSettingsPersistentStore from '../settingsPersistentStore'
import getHistory from '../../api/customer/getHistory'

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
    const res = await getHistory()
    const histories = res.data
    set({ histories })
  },
}))

export default useHistoryListingStore

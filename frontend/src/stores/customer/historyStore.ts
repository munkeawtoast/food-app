import { create } from 'zustand'
import { Order } from '../../models/order'
import useSettingsPersistentStore from '../settingsPersistentStore'
import { getHistories } from '../../api/customer'

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
    const res = await getHistories()
    const histories = res.data
    set({ histories })
  },
}))

export default useHistoryListingStore

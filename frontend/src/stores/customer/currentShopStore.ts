import { create } from 'zustand'
import { Order } from '../models/order'
import getShop from '../../api/customer/getShop'
import { Shop } from '../../models/shop'
import { RefreshControlComponent } from 'react-native'

type Success = true
type Failed = false

type State = {
  shop?: Shop
}

type Actions = {
  setShopWithShopId: (id: Shop['id']) => void
  resetShop: () => void
}

const initialStates: State = {
  shop: undefined,
}

const useCurrentShopStore = create<Actions & State>()((set) => ({
  ...initialStates,
  resetShop: () =>
    set({
      ...initialStates,
    }),
  setShopWithShopId: async (shopId) => {
    const { data } = await getShop({
      shopId,
    })
    if (!data) {
      alert('bad shop')
    }
    set({
      shop: data,
    })
  },
}))

export default useCurrentShopStore

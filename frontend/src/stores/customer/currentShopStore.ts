import { create } from 'zustand'
import { Shop } from '../../models/shop'
import { mockSlow } from '../../dev/dev'
import { getShop } from '../../api/customer'

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
    if (mockSlow.shop) {
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
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

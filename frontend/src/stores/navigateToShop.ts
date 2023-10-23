import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type State = {
  navigator: any
}

type Actions = {
  goToShop: () => void
}

type NavigateToShopStore = ReturnType<typeof createNavigateToShopStore>

const createNavigateToShopStore = (navigator) =>
  create<Actions>()((set, get) => ({
    navigator: navigator,
    goToShop: () => get().navigate('customer-shop'),
  }))

export default createNavigateToShopStore

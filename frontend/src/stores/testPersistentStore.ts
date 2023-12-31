import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type TestStore = {
  bears: number
  addABear: () => void
}

const useTestPersistentStore = create<TestStore>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useTestPersistentStore

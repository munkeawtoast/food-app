import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import PrimitiveStorage from '.'

type TestState = {
  bears: number
  addABear: () => void
}

const useTestStore = create<TestState>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => PrimitiveStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useTestStore

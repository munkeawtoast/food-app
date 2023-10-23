import { create } from 'zustand'
import { FoodWithOptions } from '../models/food'
import getFood from '../api/merchant/getFood'

type State = {
  foods: FoodWithOptions[]
}

type Actions = {
  fetch: () => Promise<void>
  reset: () => void
  removeById: (id: number) => void
}

const initialStates: State = {
  foods: [],
}

const useFoodStore = create<State & Actions>()((set, get) => {
  return {
    ...initialStates,
    fetch: async () => {
      const { data } = await getFood()
      set({
        foods: data,
      })
    },
    reset: () => {
      set({
        ...initialStates,
      })
    },
    removeById: (id) => {
      const current = get().foods
      const newFoods = current.filter((food) => food.id !== id)
      set({
        foods: newFoods,
      })
    },
  }
})
export default useFoodStore

import { create } from 'zustand'
import { FoodWithOptions } from '../models/food'
import getFood from '../api/merchant/getFood'

type State = {
  foods: FoodWithOptions[]
}

type Actions = {
  fetch: () => Promise<void>
}

const initialStates: State = {
  foods: [],
}

const useFoodStore = create<State & Actions>()((set) => {
  async function fetch() {
    const { data } = await getFood()
    set({
      foods: data,
    })
  }
  fetch()
  return {
    ...initialStates,
    fetch,
  }
})
export default useFoodStore

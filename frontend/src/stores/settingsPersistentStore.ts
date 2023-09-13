import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Settings } from '../model/Settings'
import { User } from '../model/User'

type SettingsStore = Settings & {
  setNotification: (value: boolean) => void
  setUser: (user: User) => void
}

const useSettingsPersistentStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      notificationEnabled: false,
      user: undefined,
      setUser: (user) => {
        set({
          user,
        })
      },
      setNotification: (value) => {
        if (value) {
          // do something
        } else {
          // do another sometihng
        }
      },
    }),
    {
      name: 'app-settings', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useSettingsPersistentStore

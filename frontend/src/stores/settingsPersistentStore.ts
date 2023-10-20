import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { registerForPushNotificationsAsync } from '../utils/notifications'
import {
  BearerToken,
  LoginCustomerResponse,
  LoginMerchantResponse,
} from '../api/auth/types'
import { Customer, Merchant, User } from '../models/user'
import { Role } from 'react-native'

export type SettingsState = {
  notificationEnabled: boolean
  user?: User
  type?: Role
  merchant?: Merchant
  customer?: Customer
  token?: BearerToken
  pushToken?: string
}

type SettingsActions = {
  setNotification: (value: boolean) => void
  setUserWithResponseData: (
    res: LoginMerchantResponse | LoginCustomerResponse
  ) => void
}

const defaultState: SettingsState = {
  notificationEnabled: false,
  user: undefined,
}

const useSettingsPersistentStore = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      ...defaultState,
      setNotification: async (enabled) => {
        if (!enabled) {
          set({
            notificationEnabled: false,
          })
          return
        }
        const token = await registerForPushNotificationsAsync()
        if (!token) {
          alert('failed to register for push notifications')
          return
        }
        set({
          notificationEnabled: true,
        })
        alert('registered successfully:' + token)
      },
      setUserWithResponseData(data) {
        const { customer, merchant, token } = data
        if (customer) {
          const { user, ...customerWoUser } = customer
          set({
            customer: customerWoUser,
            user,
            token,
          })
        }
        if (merchant) {
          const { user, ...merchantWoUser } = merchant
          set({
            merchant: merchantWoUser,
            user: user,
            token,
          })
        }
      },
    }),
    {
      name: 'app-settings',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useSettingsPersistentStore

import { Customer, Merchant, Role, User } from './user'

export type Settings = {
  notificationEnabled: boolean
  user?: User
  type?: Role
  merchant?: Merchant
  customer?: Customer
}

// https://reactnavigation.org/docs/typescript/#organizing-types
// ! need complete rewrite //
// ! need complete rewrite //
// ! need complete rewrite //
// ต้องมี stack ข้างบนส่วนที่ต้องถอยมาหาได้ หรือส่วนที่มันมีอะไรข้างในเยอะๆ ก็แบ่งให้มันเป็น stac
import { NavigatorScreenParams } from '@react-navigation/native'
import { Item, Shop } from '../model/shop'

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>
  customer: undefined
  merchant: undefined // idk if this needs to esnd merchant too?
}
export type AllScreenList = RootStackParamList &
  AuthStackParamList &
  CustomerTabsParamList &
  ShopStackParamList

export type AuthStackParamList = {
  'auth-landing': undefined
  'auth-auth': undefined
}

export type CustomerTabsParamList = {
  'customer-home': undefined
  'customer-shop': Shop
  'customer-scan': undefined
}

export type ShopStackParamList = {
  'shop-main': Shop
  'shop-item': Item
}

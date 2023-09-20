/**
 * how to create new props type
 * XXX = name
 * YYY = navigator type
 * ZZZ = current navigator's parent
 * AAA = child nav
 * [SOMETHING's another SOMETHING's another another SOMETHING] = get creative with my wording (able get the point across มั้ย, nobody knows)
 *
 * type XXXYYYStackParamList = {
 *   -- case has AAA --
 *   [AAA's XXX pathing]: AAA'x XXXYYYParams<AAAYYYParamList>
 *   --case screen ---
 *   [screen's XXX]: [params needed for the XXX]
 * }
 *
 * type XXXYYYProps<CurrentScreenGeneric extends keyof [ZZZ's AAA ParamList]> = CompositeScreenProps<
 *   YYYScreenProps<XXXYYYStackParamList, CurrentScreen>,
 *   ZZZProps<ZZZParamList>
 * >
 *
 * อ่านไม่ออกขอโทษ word บ่าเป๋น
 */

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { Item, Shop } from '../model/shop'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>
  customer: NavigatorScreenParams<CustomerStackParamList>
  merchant: undefined
}

export type AuthStackParamList = {
  'auth-landing': undefined
  'auth-auth': {
    as: 'customer' | 'merchant'
  }
}

export type CustomerStackParamList = {
  'customer-bottom': NavigatorScreenParams<CustomerBottomTabParamList>
  'customer-scan': undefined
}

export type CustomerBottomTabParamList = {
  'customer-bottom-home': undefined
  'customer-bottom-shop': NavigatorScreenParams<CustomerShopStackParamList>
}

export type CustomerShopStackParamList = {
  'customer-bottom-shop-home': Shop
  'customer-bottom-shop-item': Item
}

//! Props

export type RootNavigationProps<
  CurrentScreen extends keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, CurrentScreen>

export type CustomerStackProps<
  CurrentScreen extends keyof CustomerStackParamList,
> = CompositeScreenProps<
  StackScreenProps<CustomerStackParamList, CurrentScreen>,
  RootNavigationProps<'customer'>
>

export type CustomerBottomTabProps<
  CurrentScreen extends keyof CustomerBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<CustomerBottomTabParamList, CurrentScreen>,
  CustomerStackProps<'customer-bottom'>
>

export type AuthStackProps<CurrentScreen extends keyof AuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, CurrentScreen>,
    RootNavigationProps<'auth'>
  >

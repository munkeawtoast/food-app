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
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'
import { Shop } from '../models/shop'
import { ItemLayout } from 'react-native-ui-lib/src/components/sortableGridList/types'
import { Order } from '../models/order'

type InheritParentPathing<
  ParentParamList extends Record<string, unknown>,
  Parent extends keyof ParentParamList & string,
  Params extends Record<string, unknown>,
> = {
  [Path in keyof Params as `${Parent}-${Extract<Path, string>}`]: Params[Path]
}

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>
  customer: NavigatorScreenParams<CustomerStackParamList>

  merchant: undefined
}

export type AuthStackParamList = InheritParentPathing<
  RootStackParamList,
  'auth',
  {
    landing: undefined
    auth: {
      as: 'customer' | 'merchant'
    }
  }
>

export type CustomerStackParamList = InheritParentPathing<
  RootStackParamList,
  'customer',
  {
    in_progress: undefined
    bottom: NavigatorScreenParams<CustomerBottomTabParamList>
    shop: NavigatorScreenParams<CustomerShopStackParamList>
    scan: undefined
  }
>

export type CustomerBottomTabParamList = InheritParentPathing<
  CustomerStackParamList,
  'customer-bottom',
  {
    home: undefined
    settings: undefined
    queue: undefined
  }
>

export type CustomerShopStackParamList = InheritParentPathing<
  CustomerStackParamList,
  'customer-shop',
  {
    home: {
      shopId: Shop['id']
    }
    queue: undefined
    item: ItemLayout
    payment: Order
  }
>

export type MerchantStackParamList = InheritParentPathing<
  RootStackParamList,
  'merchant',
  {
    bottom: undefined
  }
>

export type MerchantBottomTabParamList = InheritParentPathing<
  MerchantStackParamList,
  'merchant-bottom',
  {
    order: undefined
    menu_stack: undefined
  }
>

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

export type CustomerShopStackProps<
  CurrentScreen extends keyof CustomerShopStackParamList,
> = CompositeScreenProps<
  StackScreenProps<CustomerShopStackParamList, CurrentScreen>,
  CustomerStackProps<'customer-shop'>
>

export type AuthStackProps<CurrentScreen extends keyof AuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, CurrentScreen>,
    RootNavigationProps<'auth'>
  >

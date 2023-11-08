import { AxiosResponse } from 'axios'
import { FoodWithOptions } from '../models/food'
import { axiosInstance } from './axios'
import { Shop } from '../models/shop'
import { Order } from '../models/order'

export type CreateFoodRequest = {
  food: FoodWithOptions
}

export type CreateFoodResponse = {
  food: FoodWithOptions
}

export async function createFood(
  data: CreateFoodRequest
): Promise<AxiosResponse<CreateFoodResponse>> {
  return axiosInstance.post('/food', data)
}

export type DeclareOrderDoneRequest = {
  id: number
}

export type DeclareOrderDoneResponse = never

export async function declareOrderDone(
  data: DeclareOrderDoneRequest
): Promise<AxiosResponse<DeclareOrderDoneResponse>> {
  return axiosInstance.post('/confirmQueue', data)
}

export type DeleteFoodRequest = {
  id: number
}

export type DeleteFoodResponse = never

export async function deleteFood(
  data: DeleteFoodRequest
): Promise<AxiosResponse<DeleteFoodResponse>> {
  return axiosInstance.delete('/food', {
    data,
  })
}

export type GetFoodResponse = FoodWithOptions[]

export async function getFood(): Promise<AxiosResponse<GetFoodResponse>> {
  return axiosInstance.get('/food')
}

export type GetOrderRequest = {
  shopId: Shop['id']
}

export type GetOrderResponse = Order[]

export async function getMerchantSelfOrders(
  data: GetOrderRequest
): Promise<AxiosResponse<GetOrderResponse>> {
  return axiosInstance.post('/merchant/orders', data)
}

export type UpdateFoodRequest = {
  food: FoodWithOptions
}

export type UpdateFoodResponse = {
  food: FoodWithOptions
}

export async function updateFood(
  data: UpdateFoodRequest
): Promise<AxiosResponse<GetFoodResponse>> {
  return axiosInstance.put('/merchant/food', data)
}

export type UpdateFoodImageRequest = {
  foodId: number
  foodImage: File
}

export type UpdateFoodImageResponse = {
  imageUrl: string
}

export async function updateFoodImage(
  data: UpdateFoodImageRequest
): Promise<AxiosResponse<UpdateFoodImageResponse>> {
  return axiosInstance.put('/merchant/foodImage', data)
}

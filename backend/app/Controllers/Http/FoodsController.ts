import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Food from 'App/Models/Food'

export default class FoodsController {
  public async createFood({ request, response, auth }: HttpContextContract) {
    const foodData = request.body()
    try {
      await Food.create({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        foodName: foodData.foodName,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // image: foodData.image,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        options: foodData.options,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        price: foodData.price,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        shopId: foodData.shopId,
      })
      return response.status(200).send('Success')
    } catch (e) {
      console.error(e)
      return response.status(400)
    }
  }
  public async deleteFood({ request, response, auth }: HttpContextContract) {
    const deletedFood = request.body().id
    try {
      await Food.query().delete().where('id', deletedFood)
      return response.status(200).send('Success')
    } catch (e) {
      console.error(e)
      return response.status(400)
    }
  }
  public async getFood({ request, response, auth }: HttpContextContract) {
    // const foods = await Food.all()
    const foods = await Food.all()
    // console.log(foods.map((food) => food.serialize()))
    return foods.map((food) => food.serialize())
  }
  public async updateFood({ request, response, auth }: HttpContextContract) {
    const foodData = request.body()
    try {
      await Food.query().where('id', foodData.id).update({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        foodName: foodData.foodName,
        // image: foodData.image,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        options: foodData.options,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        price: foodData.price,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        shopId: foodData.shopId,
      })
      return response.status(200).send('Success')
    } catch (e) {
      console.error(e)
      return response.status(400)
    }
  }
}

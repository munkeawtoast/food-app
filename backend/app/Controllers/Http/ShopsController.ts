import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Shop from 'App/Models/Shop'

export default class ShopsController {
  public async getShop({ request, response }: HttpContextContract) {
    console.log(request.input('shopId'))
    const id = request.input('shopId') as string
    const shop = await Shop.query().where('id', id).preload('food')
    if (!shop[0]) {
      return response.status(404).send('shop not found')
    }
    return response.status(200).send(shop[0].serialize())
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import History from 'App/Models/History'

export default class HistoriesController {
  public async merchantGetHistories({ request, response, auth }: HttpContextContract) {
    const shopId = await request.input('shopId')
    try {
      // const histories = History.findMany('shop_id', Number(shopId))
      const histories = await History.query().where('shop_id', Number(shopId))
      return response.status(200).send(histories.map((history) => history.serialize()))
    } catch (e) {
      return response.status(400).send('fail')
    }
  }
  public async customerGetHistories({ request, response, auth }: HttpContextContract) {
    const customerId = auth.user?.id
    const shopId = await request.input('shopId')
    try {
      const histories = await History.query()
        .where('shop_id', Number(shopId))
        .where('customer_id', customerId)
      return response.status(200).send(histories.map((history) => history.serialize()))
    } catch (e) {
      return response.status(400).send('fail')
    }
  }
}

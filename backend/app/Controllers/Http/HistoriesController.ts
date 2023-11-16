import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import History from 'App/Models/History'

export default class HistoriesController {
  public async merchantGetHistories({ request, response, auth }: HttpContextContract) {
    const from = await request.input('from')
    const to = await request.input('to')
    try {
      // const histories = History.findMany('shop_id', Number(shopId))
      const histories = await History.query().whereBetween('created_at', [from, to])
      return response.status(200).send(histories.map((history) => history.serialize()))
    } catch (e) {
      return response.status(400).send('fail')
    }
  }
  public async customerGetHistories({ request, response, auth }: HttpContextContract) {
    const customerId = auth.user?.id
    try {
      const histories = await History.query().where('customer_id', customerId)
      return response.status(200).send(histories.map((history) => history.serialize()))
    } catch (e) {
      return response.status(400).send('fail')
    }
  }
}

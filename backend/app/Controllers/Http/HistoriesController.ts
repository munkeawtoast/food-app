import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import History from 'App/Models/History'

export default class HistoriesController {
  public async merchantGetHistories({ request, response, auth }) {
    const shopId = await request.shopId
    try {
      const histories = await History.findMany('shop_id', shopId)
      return histories.map((history) => history.serialize())
    } catch (e) {
      return response.status(400).send('fail')
    }
  }
  public async customerGetHistories({ request, response, auth }) {
    const customerId = await auth.user.id
    try {
      const histories = await History.findMany('user_id', customerId)
      return histories.map((history) => history.serialize())
    } catch (e) {
      return response.status(400).send('fail')
    }
  }
}

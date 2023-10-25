import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import History from 'App/Models/History'
import OrderMenu from 'App/Models/OrderMenu'
import OrderQueue from 'App/Models/OrderQueue'

export default class QueuesController {
  public async customerGetQueue({ request, response, auth }: HttpContextContract) {
    const allQueue = await OrderQueue.all()
    return allQueue.map((queue) => queue.serialize())
  }

  public async merchantGetQueue({ request, response, auth }: HttpContextContract) {
    const allQueue = await OrderQueue.query().where('shop_id', request.body().shopId)

    return allQueue.map((queue) => queue.serialize())
  }

  public async merchantConfirmQueue({ request, response, auth }: HttpContextContract) {
    const queueId = request.body().id
    try {
      const data = await OrderQueue.findBy('id', queueId)
      // console.log(data)
      await History.create({
        foodData: data.foodData,
        shopId: data.shopId,
        customerId: data.customerId,
      })
      await OrderQueue.query().where('id', queueId).delete()
      return response.status(200).send('Success')
    } catch (e) {
      console.error(e)
      return response.status(404)
    }
  }
}

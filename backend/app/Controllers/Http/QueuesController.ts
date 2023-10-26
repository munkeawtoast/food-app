import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Customer from 'App/Models/Customer'
import Food from 'App/Models/Food'
import History from 'App/Models/History'
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

  public async customerCreateQueue({ request, response, auth }: HttpContextContract) {
    if (!auth.user) {
      return response.status(401).send('Unauthorized')
    }
    const customer = await Customer.findByOrFail('user_id', auth.user.id)

    const body = request.body()
    const shopId = body.shop_id as number
    console.log('body')
    console.log(body)
    const newQueue = await OrderQueue.create({
      foodData: body,
      shopId,
      customerId: customer.id,
    })
    return response.status(201).send(newQueue.serialize())
  }

  public async merchantConfirmQueue({ request, response, auth }: HttpContextContract) {
    const queueId = request.body().id as number | undefined
    try {
      const data = await OrderQueue.findBy('id', queueId)
      // console.log(data)
      await History.create({
        foodData: data?.foodData as Food,
        shopId: data?.shopId,
        customerId: data?.customerId,
      })
      await OrderQueue.query().where('id', queueId!).delete()
      return response.status(200).send('Success')
    } catch (e) {
      console.error(e)
      return response.status(404)
    }
  }
}

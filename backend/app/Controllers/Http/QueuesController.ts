import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import History from 'App/Models/History'
import OrderMenu from 'App/Models/OrderMenu'
import OrderQueue from 'App/Models/OrderQueue'

export default class QueuesController {
  // public async customerGetQueue({ request, response, auth }: HttpContextContract) {
  //   const userId = auth.user?.id
  //   const queue = await OrderQueue.query().preload('orderMenu')
  //   const totalqueue = queue.length
  //   // const queuenum = queue.findIndex()
  //   console.log(queue)
  //   return response.status(200).send({
  //     queue: queue,
  //     // queuenum: queuenum,
  //     totalqueue: totalqueue,
  //   })
  // }

  public async GetQueue({ request, response, auth }: HttpContextContract) {
    const allQueue = await OrderQueue.all()
    return allQueue.map((queue) => queue.serialize())
  }

  public async merchantConfirmQueue({ request, response, auth }: HttpContextContract) {
    const queueNum = 2
    const foodData = request.body()
    await History.create({
      foodId: foodData.foodId,
      options: foodData.options,
      amount: foodData.amount,
      price: foodData.price,
    })
    await OrderQueue.query().where('id', queueNum).delete()
    return
  }
}

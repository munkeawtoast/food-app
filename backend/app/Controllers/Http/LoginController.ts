import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import Merchant from 'App/Models/Merchant'

export default class LoginController {
  public async getMerchant({ request, response }: HttpContextContract) {
    const body = request.body()

    const merchant = await Merchant.query()
      .where('username', body.username)
      .andWhere('password', body.password)
      .first()
    if (merchant) {
      // console.log(body.username)
      // console.log(body.password)
      response.status(200).send('ok')
    } else {
      response.status(404).send('no username')
    }
  }
  public async getCustomer({ request, response }: HttpContextContract) {
    const body = request.body()

    const customer = await Customer.query()
      .where('username', body.username)
      .andWhere('password', body.password)
      .first()
    if (customer) {
      // console.log(body.username)
      // console.log(body.password)
      response.status(200).send('ok')
    } else {
      response.status(404).send('no username')
    }
  }
}

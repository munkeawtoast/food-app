import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class CheckCustomer {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const userId = auth.user?.id
    if ((await Customer.findBy('user_id', userId)) === null) {
      return response.unauthorized({ error: 'Must be Customer' })
    }
    await next()
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Merchant from 'App/Models/Merchant'

export default class CheckMerchant {
  public async handle({ response, auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const userId = auth.user?.id
    console.log(userId)
    if ((await Merchant.findBy('user_id', userId)) === null) {
      return response.unauthorized({ error: 'Must be Merchant' })
    }
    await next()
    // return founduser
    // if (founduser) {
    //   return 'n'
    // }
  }
}

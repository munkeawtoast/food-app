import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Logger {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class LoginController {
  public async getAllUser({}: HttpContextContract) {
    return await Customer.all()
  }
}

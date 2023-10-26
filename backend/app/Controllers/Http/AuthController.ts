import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import Merchant from 'App/Models/Merchant'
import User from 'App/Models/User'

export default class AuthController {
  /**
   *
   * @param table
   * @param user
   * @returns Customer with User or Merchant with User
   */
  private async foundUser(table: typeof Merchant | typeof Customer, user: User) {
    const [roledUser] = await table.query().preload('user').where('user_id', user.id)

    if (!roledUser) {
      throw new Error('user not found')
    }
    return roledUser
  }
  public async getMerchant({ request, response, auth }: HttpContextContract) {
    const username = request.input('username') as string
    const password = request.input('password') as string
    try {
      const token = await auth.use('api').attempt(username, password, {
        expiresIn: '90 days',
      })
      const user = await this.foundUser(Merchant, token.user)
      return response.status(200).send({
        token: token.toJSON(),
        merchant: user,
      })
    } catch (e) {
      console.log(e)
      return response.status(401).send('invalid credentials')
    }
  }

  public async getCustomer({ request, response, auth }: HttpContextContract) {
    const username = request.input('username') as string
    const password = request.input('password') as string

    console.log(username, password)
    try {
      const token = await auth.use('api').attempt(username, password, {
        expiresIn: '90 days',
      })
      const user = await this.foundUser(Customer, token.user)
      return response.status(200).send({
        token: token.toJSON(),
        customer: user,
      })
    } catch (e) {
      console.log('bad login')
      return response.status(401).send('invalid credentials')
    }
  }
  public async createCustomer({ request, response, auth }: HttpContextContract) {
    const username = request.input('username') as string
    const password = request.input('password') as string
    // const token = await auth.use('api').attempt(username, password)
    // await User.query().where('username', username)
    const user = await User.findBy('username', username)
    // console.log(user)
    if (user) {
      return response.status(405).send('User already registerd')
    } else {
      try {
        const createdUser = await User.create({
          username: username,
          password: password,
        })
        await Customer.create({
          userId: createdUser.id,
        })
        return response.status(200).send(
          // token: token.toJSON(),
          // customer: registedUser,
          'yay'
        )
      } catch (e) {
        return e
      }
    }
    // console.log(e)
    // return response.status(405).send('User already registered')
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Merchant from 'App/Models/Merchant'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const users = await User.updateOrCreateMany('username', [
      { username: 'Vasana', password: '123456' },
    ])

    const userIds = users.map((user) => ({ userId: user.id }))
    await Merchant.updateOrCreateMany('userId', userIds)
  }
}

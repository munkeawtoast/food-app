import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/test'
export default class UserSeeder extends BaseSeeder {
  public async run() {
    // const uniqueKey = 'isoCode'
    await User.updateOrCreateMany('name', [
      {
        name: 'user1',
        password: '123',
      },
      {
        name: 'user2',
        password: '3546354654',
      },
      {
        name: 'user3',
        password: '3535365345',
      },
    ])
  }
}

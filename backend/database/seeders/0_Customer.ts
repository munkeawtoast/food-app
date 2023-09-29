import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const users = await User.updateOrCreateMany('username', [
      {
        username: 'Vongsapat',
        password: 'pinekak',
      },
      {
        username: 'Kay',
        password: '123456789',
      },
      {
        username: 'Someone',
        password: 'password',
      },
    ])
    const userIDs = users.map((user) => ({ userID: user.id }))
    await Customer.updateOrCreateMany('userID', userIDs)
  }
}

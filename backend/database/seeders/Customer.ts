import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Customer.updateOrCreateMany('username', [
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
  }
}

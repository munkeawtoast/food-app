import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Merchant from 'App/Models/Merchant'

export default class extends BaseSeeder {
  public async run() {
    await Merchant.updateOrCreate(
      { username: 'Vasana' },
      { username: 'Vasana', password: '123456' }
    )
  }
}

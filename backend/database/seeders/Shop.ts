import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Shop from 'App/Models/Shop'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Shop.updateOrCreate(
      { name: 'วาสนาก๋วยเตี๋ยว' },
      { name: 'วาสนาก๋วยเตี๋ยว', merchantID: 1 }
    )
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Food from 'App/Models/Food'
import Shop from 'App/Models/Shop'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const vasana = await Shop.findBy('name', 'วาสนาก๋วยเตี๋ยว')

    await Food.updateOrCreateMany('foodName', [
      {
        foodName: 'ก๋วยเตี๋ยวไก่',
        price: 50,
        options: {},
        shopID: vasana.id,
      },
      { foodName: 'ก๋วยเตี๋ยวหมู', price: 50, options: {}, shopID: 1 },
      {
        foodName: 'ก๋วยเตี๋ยวปลา',
        price: 60,
        options: {},
        shopID: vasana.id,
      },
    ])
  }
}

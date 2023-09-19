import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Food from 'App/Models/Food'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Food.updateOrCreateMany('foodName', [
      {
        foodName: 'ก๋วยเตี๋ยวไก่',
        price: 50,
        options: JSON,
        shopID: 1,
        imageID: 1,
      },
      { foodName: 'ก๋วยเตี๋ยวหมู', price: 50, options: JSON, shopID: 1, imageID: 2 },
      {
        foodName: 'ก๋วยเตี๋ยวปลา',
        price: 60,
        options: JSON,
        shopID: 1,
        imageID: 3,
      },
    ])
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Food from 'App/Models/Food'
import OrderQueue from 'App/Models/OrderQueue'

export default class extends BaseSeeder {
  public async run() {
    const foodDataAll = await Food.all()
    const foodData1 = foodDataAll[0]
    const foodData2 = foodDataAll[1]
    // console.log(foodData1.serialize())
    await OrderQueue.updateOrCreateMany(
      ['customerId', 'shopId'],
      [
        { shopId: 1, customerId: 1, foodData: foodData1?.serialize() },
        { shopId: 1, customerId: 2, foodData: foodData2?.serialize() },
      ]
    )
    // Write your database queries inside the run method
  }
}

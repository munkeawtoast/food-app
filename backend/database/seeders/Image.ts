import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Image from 'App/Models/Image'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Image.updateOrCreateMany('name', [
      {
        name: 'Noodle',
        mineType: '.png',
        address: '../../../../assets/',
      },
      { name: 'noodles', mineType: '.png', address: '../../../../assets/' },
      {
        name: '44612c694be94b63b6352fed24513a4a',
        mineType: '.webp',
        address: '../../../../assets/',
      },
    ])
  }
}

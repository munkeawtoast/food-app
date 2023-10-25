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
        options: {
          options: [
            {
              name: 'พิเศษ',
              isSingle: true,
              options: [
                {
                  name: 'พิเศษ',
                  price: 10,
                },
              ],
              required: true,
            },
            {
              isSingle: true,
              name: 'เส้นก๋วยเตี๋ยว',
              options: [
                {
                  name: 'เส้นเล็ก',
                },
                {
                  name: 'เส้นใหญ่',
                },
                {
                  name: 'เส้นหมี่',
                },
                {
                  name: 'เส้นบะหมี่',
                },
                {
                  name: 'เส้นวุ้นเส้น',
                },
                {
                  name: 'เส้นแก้ว',
                },
                {
                  name: 'เส้นมาม่า',
                },
              ],
              required: true,
            },
            {
              isSingle: true,
              name: 'ระดับความเผ็ด',
              options: [
                {
                  name: 'ไม่เผ็ด',
                  price: 0,
                },
                {
                  name: 'เผ็ดน้อย',
                  price: 0,
                },
                {
                  name: 'เผ็ด',
                  price: 0,
                },
                {
                  name: 'เผ็ดมาก',
                  price: 0,
                },
              ],
              required: true,
            },
          ],
        },
        shopId: vasana!.id,
        estimatedTime: 7,
      },
      {
        foodName: 'ก๋วยเตี๋ยวหมู',
        price: 50,
        options: {
          options: [
            {
              name: 'เพิ่มปริมาณ',
              isSingle: true,
              required: false,
              options: [{ name: 'พิเศษ', price: 10 }],
            },
            {
              name: 'ระดับความเผ็ด',
              isSingle: true,
              required: true,
              options: [
                { name: 'ไม่เผ็ด', price: 0 },
                { name: 'เผ็ดน้อย', price: 0 },
                { name: 'เผ็ดกลาง', price: 0 },
                { name: 'เผ็ดมาก', price: 0 },
              ],
            },
          ],
        },
        shopId: vasana!.id,
        estimatedTime: 7,
      },
    ])
  }
}

// export type OptionBase = {
//   type: string
//   name: string
//   description?: string
//   required?: boolean
//   default?: unknown
// }

// export type AdjustPriceBy<T> = {
//   whenEqual: T
//   by: number
// }

// export type BooleanOption = OptionBase & {
//   type: 'boolean'
//   default?: boolean
//   priceAdjust?: AdjustPriceBy<boolean>
// }

// export type StringOption = OptionBase & {
//   type: 'string'
//   default?: string
// }

// export type RadioOption = OptionBase & {
//   type: 'radio'
//   default?: string
//   choices: string[]

//   priceAdjust?: AdjustPriceBy<string>[]
// }

// export type NumberOption = OptionBase & {
//   type: 'number'
//   default?: number
//   limit: number
//   pricePerUnit?: number
// }

// export type Option = BooleanOption | NumberOption | RadioOption | StringOption

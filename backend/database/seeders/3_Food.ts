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
              type: 'boolean',
              default: false,
              priceAdjust: {
                by: 10,
                whenEqual: true,
              },
            },
            {
              type: 'radio',
              name: 'เส้นก๋วยเตี๋ยว',
              choices: [
                'เส้นเล็ก',
                'เส้นใหญ่',
                'เส้นหมี่',
                'เส้นบะหมี่',
                'เส้นวุ้นเส้น',
                'เส้นแก้ว',
                'เส้นมาม่า',
              ],
            },
            {
              type: 'radio',
              name: 'ระดับความเผ็ด',
              choices: ['ไม่เผ็ด', 'เผ็ดน้อย', 'เผ็ด', 'เผ็ดมาก'],
            },
            {
              type: 'string',
              name: 'คำแนะนำพิเศษ',
              description: 'คำแนะนำพิเศษสำหรับร้านค้า',
            },
          ],
        },
        shopId: vasana!.id,
      },
      {
        foodName: 'ก๋วยเตี๋ยวหมู',
        price: 50,
        options: {
          options: [
            [
              {
                name: 'พิเศษ',
                type: 'boolean',
                default: false,

                priceAdjust: {
                  by: 10,
                  whenEqual: true,
                },
              },
              {
                type: 'radio',
                name: 'เส้นก๋วยเตี๋ยว',
                choices: [
                  'เส้นเล็ก',
                  'เส้นใหญ่',
                  'เส้นหมี่',
                  'เส้นบะหมี่',
                  'เส้นวุ้นเส้น',
                  'เส้นแก้ว',
                  'เส้นมาม่า',
                ],
              },
              {
                name: 'ประเภทหมู',
                type: 'radio',
                choices: ['หมูสับ', 'หมูตุ๋น', 'หมูแดง'],
              },
              {
                type: 'radio',
                name: 'ระดับความเผ็ด',
                choices: ['ไม่เผ็ด', 'เผ็ดน้อย', 'เผ็ด', 'เผ็ดมาก'],
              },
              {
                type: 'string',
                name: 'คำแนะนำพิเศษ',
                description: 'คำแนะนำพิเศษสำหรับร้านค้า',
              },
            ],
          ],
        },
        shopId: vasana!.id,
      },
      {
        foodName: 'เกาเหลา',
        price: 60,
        options: {
          options: [
            {
              name: 'พิเศษ',
              type: 'boolean',
              default: false,
              priceAdjust: {
                by: 10,
                whenEqual: true,
              },
            },
            {
              name: 'เครื่อง',
              type: 'radio',
              choices: ['เลือดหมู', 'ลูกชิ้นหมู', 'ลูกชิ้นเนื้อ', 'ลูกชิ้นปลา', 'รวมมิตรลูกชิ้น'],
              priceAdjust: [
                {
                  by: 10,
                  whenEqual: 'รวมมิตรลูกชิ้น',
                },
              ],
            },
            {
              type: 'radio',
              name: 'ระดับความเผ็ด',
              choices: ['ไม่เผ็ด', 'เผ็ดน้อย', 'เผ็ด', 'เผ็ดมาก'],
              default: 'ไม่เผ็ด',
            },
            {
              type: 'number',
              name: 'ซื้อข้าว',
              limit: 5,
              description: 'รับข้าวไปกินคู่กับเกาเหลา',
              pricePerUnit: 10,
            },
            {
              type: 'string',
              name: 'คำแนะนำพิเศษ',
              description: 'คำแนะนำพิเศษสำหรับร้านค้า',
            },
          ],
        },
        shopId: vasana!.id,
      },
    ])
  }
}

export type OptionBase = {
  type: string
  name: string
  description?: string
  required?: boolean
  default?: unknown
}

export type AdjustPriceBy<T> = {
  whenEqual: T
  by: number
}

export type BooleanOption = OptionBase & {
  type: 'boolean'
  default?: boolean
  priceAdjust?: AdjustPriceBy<boolean>
}

export type StringOption = OptionBase & {
  type: 'string'
  default?: string
}

export type RadioOption = OptionBase & {
  type: 'radio'
  default?: string
  choices: string[]

  priceAdjust?: AdjustPriceBy<string>[]
}

export type NumberOption = OptionBase & {
  type: 'number'
  default?: number
  limit: number
  pricePerUnit?: number
}

export type Option = BooleanOption | NumberOption | RadioOption | StringOption

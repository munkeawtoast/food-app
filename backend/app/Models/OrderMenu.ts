import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import OrderQueue from './OrderQueue'
import Food from './Food'

export default class OrderMenu extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orderQueueID: number

  @column()
  public foodID: number

  @column()
  public options: JSON

  @column()
  public amount: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => OrderQueue)
  public orderQueue: BelongsTo<typeof OrderQueue>

  @belongsTo(() => Food)
  public food: BelongsTo<typeof Food>
}

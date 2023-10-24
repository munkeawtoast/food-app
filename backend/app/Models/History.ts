import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Food from './Food'
import Shop from './Shop'
import Customer from './Customer'

export default class History extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foodData: object & { length?: never }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public shopId: number

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @column()
  public customerId: number

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
}

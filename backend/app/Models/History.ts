import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Food from './Food'
import Shop from './Shop'
import Customer from './Customer'

export default class History extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foodData: JSON

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
}

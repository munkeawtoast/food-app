import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Shop from './Shop'
import Customer from './Customer'

export default class OrderQueue extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public shopId: number

  @column()
  public customerId: number

  @column()
  public foodData: unknown

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
}

export type Choice = {
  name: string
  price?: number
}

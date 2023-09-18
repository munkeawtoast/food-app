import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Shop from './Shop'
import Customer from './Customer'
import OrderMenu from './OrderMenu'

export default class OrderQueue extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public shopID: number

  @column()
  public customerID: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>

  @hasMany(() => OrderMenu)
  public orderQueue: HasMany<typeof OrderMenu>
}
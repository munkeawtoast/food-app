import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import OrderQueue from './OrderQueue'
import User from './User'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public shopId: number

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => OrderQueue)
  public orderQueue: HasMany<typeof OrderQueue>
}

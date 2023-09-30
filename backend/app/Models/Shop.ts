import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Merchant from './Merchant'
import OrderQueue from './OrderQueue'
import Food from './Food'

export default class Shop extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public merchantId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Merchant)
  public merchant: BelongsTo<typeof Merchant>

  @hasMany(() => OrderQueue)
  public orderQueue: HasMany<typeof OrderQueue>

  @hasMany(() => Food)
  public food: HasMany<typeof Food>
}

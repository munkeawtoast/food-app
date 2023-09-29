import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Shop from './Shop'
import OrderMenu from './OrderMenu'
import History from './History'

export default class Food extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foodName: string

  @column()
  public price: number

  @column()
  public options: unknown

  @column()
  public shopID: number

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @column()
  public image: string

  @hasMany(() => OrderMenu)
  public orderMenu: HasMany<typeof OrderMenu>

  @hasMany(() => History)
  public history: HasMany<typeof History>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

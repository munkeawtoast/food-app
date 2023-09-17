import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Shop from './Shop'
import Image from './Image'
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
  public options: JSON

  @column()
  public shopID: number

  @column()
  public imageID: number

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @belongsTo(() => Image)
  public image: BelongsTo<typeof Image>

  @hasMany(() => OrderMenu)
  public orderMenu: HasMany<typeof OrderMenu>

  @hasMany(() => History)
  public history: HasMany<typeof History>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

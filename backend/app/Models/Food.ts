import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Shop from './Shop'
import OrderMenu from './OrderMenu'
import History from './History'
import { Choice } from './OrderQueue'

export default class Food extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foodName: string

  @column()
  public price: number

  @column()
  public options: {
    options: Array<Option>
  }

  @column()
  public shopId: number

  @belongsTo(() => Shop)
  public shop: BelongsTo<typeof Shop>

  @column()
  public imagePath: string

  @column()
  public estimatedTime: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

export type Option = {
  required: boolean
  name: string
  isSingle: boolean
  options: Array<Choice>
}

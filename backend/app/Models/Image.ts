import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Food from './Food'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public mineType: string

  @column()
  public address: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Food)
  public food: HasMany<typeof Food>
}

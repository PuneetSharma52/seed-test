import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  // @column()
  // declare user_id: string

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare tags: String[5]

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

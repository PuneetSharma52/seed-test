import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
// import User from './user.js'
import * as relations from '@adonisjs/lucid/types/relations'

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

  @manyToMany(() => User, {
    pivotTable: 'user_blog',

    localKey: 'id',
    pivotForeignKey: 'blog_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'user_id',
  })
  declare users: relations.ManyToMany<typeof User>
}

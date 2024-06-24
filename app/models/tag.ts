import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Blog from './blog.js'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare tags: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Blog, {
    pivotTable: 'blog_tag',

    localKey: 'id',
    pivotForeignKey: 'tag_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'blog_id',
  })
  declare blogs: relations.ManyToMany<typeof Blog>
}

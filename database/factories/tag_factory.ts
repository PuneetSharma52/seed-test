import factory from '@adonisjs/lucid/factories'
import Tag from '#models/tag'
import { faker } from '@faker-js/faker'
// import db from '@adonisjs/lucid/services/db'

export const TagFactory = factory
  .define(Tag, async () => {
    // const blogs = await db.from('blogs').select('id').exec()
    // console.log({ blogs })
    return {
      id: faker.string.uuid(),
      tags: faker.lorem.word(),
      // blogs: faker.helpers.arrayElement(blogs).id,
    }
  })
  .build()

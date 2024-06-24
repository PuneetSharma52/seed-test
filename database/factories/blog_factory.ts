import factory from '@adonisjs/lucid/factories'
import Blog from '#models/blog'
import { faker } from '@faker-js/faker'
import db from '@adonisjs/lucid/services/db'

export const BlogFactory = factory
  .define(Blog, async () => {
    const users = await db.from('users').select('id').exec()
    // console.log({ users })
    // console.log('It is running')
    return {
      id: faker.string.uuid(),
      user_id: faker.helpers.arrayElement(users).id,
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(5),
      // tags: faker.lorem.word(),
    }
  })
  .build()

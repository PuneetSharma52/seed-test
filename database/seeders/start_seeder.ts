import { BlogFactory } from '#database/factories/blog_factory'
import { TagFactory } from '#database/factories/tag_factory'
import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'
import { faker } from '@faker-js/faker/locale/en_IN'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        id: faker.string.uuid(),
        username: 'admin',
        email: 'admin@example.com',
        phone: '+919438598353',
        password: 'admin',
      },
      {
        id: faker.string.uuid(),
        username: 'puneet',
        email: 'puneet@example.com',
        phone: '+919385763478',
        password: 'puneet',
      },
      {
        id: faker.string.uuid(),
        username: 'mahesh',
        email: 'mahesh@example.com',
        phone: '+919920200022',
        password: 'mahesh',
      },
      {
        id: faker.string.uuid(),
        username: 'rahul',
        email: 'rahul@example.com',
        phone: '+919438943722',
        password: 'rahul',
      },
      {
        id: faker.string.uuid(),
        username: 'ritika',
        email: 'ritika@example.com',
        phone: '+919438757239',
        password: 'ritika',
      },
    ])
    await UserFactory.createMany(5)
    await BlogFactory.createMany(20)
    await TagFactory.createMany(20)
    const blogs = await db.from('blogs').select('id').exec()
    // console.log({ blogs })
    const tags = await db.from('tags').select('id').exec()
    // console.log({ tags })
    const blogTags = blogs.map((blog) => {
      return { blog_id: blog.id, tag_id: faker.helpers.arrayElement(tags).id }
    })
    // This is the implementation of transactions in a manually assigned try/catch block
    // const trx = await db.transaction()
    // try {
    //   await trx.table('blog_tags').multiInsert(blogTags).exec()
    //   await trx.commit()
    // } catch (error) {
    //   await trx.rollback()
    // }
    // This is the managaed transaction
    await db.transaction(async (trx) => {
      const response = await trx.table('blog_tags').multiInsert(blogTags).exec()

      console.log(response)
    })
  }
}

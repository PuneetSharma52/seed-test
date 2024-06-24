import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    // const users = await db.from('users').select('id').exec()
    // console.log({ users })
    // const blogs = await db.from('blogs').select('id').exec()
    // console.log({ blogs })
    // const user_blogs = users.map((user) => {
    //   return { user_id: user.id, blog_id: faker.helpers.arrayElement(blogs).id }
    // })
    // Write your database queries inside the run method
    // const data = await db.table('user_blog').multiInsert(user_blogs).exec()
    // console.log(data)
  }
}

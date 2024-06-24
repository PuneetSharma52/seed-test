import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const blogs = await db.from('blogs').select('id').exec()
    const tags = await db.from('tags').select('id').exec()
    const blog_tags = blogs.map((blog) => {
      return { blog_id: blog.id, tag_id: faker.helpers.arrayElement(tags).id }
    })
    const data = await db.table('user_blog').multiInsert(blog_tags).exec()
    console.log(data)
  }
}

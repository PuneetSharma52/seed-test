import { BlogFactory } from '#database/factories/blog_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
// import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    console.log('This is running in blog seeder')
    // const ids = await db.from('users').select('id').exec()
    // console.log(ids)
    await BlogFactory.createMany(20)
    // const data = await db.from('user_blogs').select('id', 'user_id', 'blog_id').exec()
    // console.log(data)
  }
}

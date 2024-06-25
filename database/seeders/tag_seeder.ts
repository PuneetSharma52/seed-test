import { TagFactory } from '#database/factories/tag_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    console.log('this is running in tag seeder')
    await TagFactory.createMany(20)
  }
}

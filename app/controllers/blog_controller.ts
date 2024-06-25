import Blog from '#models/blog'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
  async store({ request, response }: HttpContext) {
    const body = request.body()
    console.log({ qs: request.qs() })
    const userId = request.params()
    console.info({ userId })

    const user = await User.findOrFail(userId)

    const blog = await user.related('blogs').create(body)
    response.status(201)

    return {
      message: 'Blog created successfully!',
      data: blog,
    }
  }

  async index() {
    const Blogs = await Blog.all()

    return {
      message: 'Blog Shown on Browser successful!',
      data: Blogs,
    }
  }
  async show({ params }: HttpContext) {
    const blog = await Blog.find(params.id)

    return {
      data: blog,
    }
  }
  async destroy({ params }: HttpContext) {
    const blog = await Blog.findOrFail(params.id)
    await blog.delete()

    return {
      message: 'Blog deleted successfully!',
      data: blog,
    }
  }
  async update({ params, request }: HttpContext) {
    const blog = await Blog.findOrFail(params.id)

    const body = request.body()

    blog.title = body.title
    blog.description = body.description
    blog.tags = body.tags

    await blog.save()

    return {
      message: 'Blog updated successfully!',
      data: blog,
    }
  }
}

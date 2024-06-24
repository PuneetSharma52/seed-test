const UsersController = () => import('#controllers/users_controller')
const BlogController = () => import('#controllers/blog_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/users', [UsersController, 'store'])
router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])
router.delete('/users/:id', [UsersController, 'destroy'])
router.patch('/users/:id', [UsersController, 'update'])

router.get('/blogs', [BlogController, 'index'])
router.post('/blogs/:id/', [BlogController, 'store'])
router.get('/blogs/:id', [BlogController, 'show'])
router.delete('/blogs/:id', [BlogController, 'destroy'])
router.patch('/blogs/:id', [BlogController, 'update'])

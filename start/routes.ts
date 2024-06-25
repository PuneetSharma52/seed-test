const UsersController = () => import('#controllers/users_controller')
const BlogController = () => import('#controllers/blog_controller')
import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
// returns swagger in YAML
router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

// Renders Swagger-UI and passes YAML-output of /swagger
router.get('/docs', async () => {
  // return AutoSwagger.default.ui('/swagger', swagger)
  // return AutoSwagger.default.scalar('/swagger') //; to use Scalar instead
  return AutoSwagger.default.rapidoc('/swagger') //; to use RapiDoc instead
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

import { Router } from 'express'
import LoginController from './controllers/loginController'

const routes = new Router()

routes.get('/hello', LoginController.index)

export default routes

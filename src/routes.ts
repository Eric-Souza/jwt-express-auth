import { Router } from 'express'

import userController from './app/controllers/userController'

const router = Router()

router.post('/users', userController.store)

export default router
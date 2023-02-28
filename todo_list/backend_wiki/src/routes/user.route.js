import express from 'express'
import { 
    createUserController, 
    loginController, 
    validateSessionController} from '../controllers/user.controller.js'

const route = express.Router()

route.post('/api/users/create',createUserController)
route.post('/api/users/login',loginController)

route.get('/api/validate_session', validateSessionController)

export default route


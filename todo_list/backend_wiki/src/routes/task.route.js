import express from 'express'
import { createTaskController, findTaskController } from '../controllers/task.controller.js'

const route = express.Router()

route.get('/api/tasks/', findTaskController)
route.post('/api/tasks/create', createTaskController)

export default route


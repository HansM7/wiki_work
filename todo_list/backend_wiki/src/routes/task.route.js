import express from 'express'
import { createTaskController, findTaskController } from '../controllers/task.controller.js'
import { verifyDataCreate } from './middlewares/task.middleware.js'

const route = express.Router()

route.get('/api/tasks/', findTaskController)
route.post('/api/tasks/create',verifyDataCreate ,createTaskController)

// route.get('/api/tasks_temporal/', findTaskController)
// route.post('/api/tasks_temporal/create',verifyDataCreate ,createTaskController)

export default route


import express from 'express'
import routeUser from './src/routes/user.route.js'

import routeTak from './src/routes/task.route.js'

const app = express()

app.use(express.json())

app.use('/',routeUser)
app.use('/',routeTak)

app.listen(4000)
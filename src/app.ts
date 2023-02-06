import express from 'express'

import { AppRoutes } from './routes/index.routes';

const app = express()

app.use(express.json())

app.use(AppRoutes)

app.listen(3000)
        
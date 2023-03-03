import express from 'express'
import cors from 'cors';

import { AppRoutes } from './routes/index.routes';

const app = express()

app.use(cors());
app.use(express.json())

app.use(AppRoutes)

app.listen(3000)

export default app
        
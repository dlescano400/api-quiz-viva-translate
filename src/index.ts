import express from 'express'
import { MongoDB } from './services/index'
import cors from 'cors'

import users from './routes/users'
import questions from './routes/questions'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 5050

app.use('/', users)
app.use('/', questions)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  MongoDB()
})
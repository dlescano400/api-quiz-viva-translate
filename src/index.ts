import express from 'express'
import { MongoDB } from './services/index'
import users from './routes/users'
import questions from './routes/questions'

const app = express()
app.use(express.json())

const PORT = 5050

app.use('/', users)
app.use('/', questions)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  MongoDB()
})
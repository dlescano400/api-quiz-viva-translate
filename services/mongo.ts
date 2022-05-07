import mongoose from 'mongoose'
import { DB_HOST, DB_PORT, DB_DATABASE } from '../constants/index'

const DB_URL = `${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

//export this function and imported by server.js
export default function MongoDB() {
  mongoose.connect(DB_URL)

  mongoose.connection.on('connected', () => {
    console.log(` >> MongoDB running on ${DB_URL}`)
  })

  mongoose.connection.on('error', (err) => {
    console.log(`   >> MongoDB error: ${err}`)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('   >> MongoDB disconected')
  })
}
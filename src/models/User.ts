import { Schema, model } from 'mongoose'

export interface IUsers extends Document {
  user: String,
  pass: String
}

const usersSchema = new Schema({
  user: String,
  pass: String
})

export default model<IUsers>('Users', usersSchema)

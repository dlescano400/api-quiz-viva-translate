import { Schema, model } from 'mongoose'

export interface IUsers extends Document {
  user: String,
  pass: String
}

const usersSchema = new Schema({
  user: {
    type: String,
    unique: true // `email` must be unique
  },
  pass: String
})

export default model<IUsers>('Users', usersSchema)

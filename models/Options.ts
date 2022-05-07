import { Schema, model } from 'mongoose'

export interface IOptions extends Document {
  value: String,
  number: Number
}

const questionsSchema = new Schema({
  value: String,
  number: Number
})

export default model<IOptions>('Options', questionsSchema)
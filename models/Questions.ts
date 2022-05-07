import { Schema, model } from 'mongoose'

export interface IQuestions extends Document {
  question: String,
  correctOption: Number,
  option: []
}

const questionsSchema = new Schema({
  question: String,
  correctOption: Number,
  option: []
})

export default model<IQuestions>('Questions', questionsSchema)
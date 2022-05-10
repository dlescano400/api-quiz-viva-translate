import { Request, Response } from "express"
import Questions from '../models/Questions'

export const listQuestions = async (_req: Request, res: Response) => {
  let question = await Questions.find()
  return res.status(200).json(question)
}

export const questionsById = async (req: Request, res: Response) => {
  let question = await Questions.find({_id: req.params.id})
  if (!question) {
    return res.status(404).json('Not found')
  }
  return res.status(200).json(question)
}

export const createQuestion = async (req: Request, res: Response) => {
  if(!req.body) return res.send(400).json({res: 'no data'})
  const { question, correctOption, option } = req.body
  const newQuestion = new Questions({
    question: question,
    correctOption: correctOption,
    option: option
  })
  newQuestion.save((err, newQuestion) => {
    if(err) console.log(err)
    console.log('se creo la pregunta con exito :: ', newQuestion)
  })

  return res.json(newQuestion)
}

export const deleteQuestion = async (req: Request, res: Response) => {
  let question = await Questions.findOne({ _id: req.params.id})

  if (!question) {
    return res.status(404).json('Not found')
  }
  question.delete()

  return res.status(200).json({
    ...question.toJSON()
  })
}

export const editQuestion = async (req: Request, res: Response) => {
  try{
    
    if(!req.body) return res.status(404).send('Not found')
    const { question, correctOption, option } = req.body
    
    const questionUpdate = await Questions.findOneAndUpdate({ _id: req.params.id}, {$set: {
      question, correctOption, option 
    }}, {new: true})
   
    return res.status(200).json(questionUpdate)

  } catch (err) {
    console.log(err)
    return res.status(400).json({error: err})
  }
}

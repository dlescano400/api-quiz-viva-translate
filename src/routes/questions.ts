import express from "express"
import Questions from '../../models/Questions'


const router = express.Router()

router.get('/question', async (_req: express.Request, res: express.Response) => {
  let question = await Questions.find()
  return res.status(200).json(question)
})


router.get('/question/:id', async (req: express.Request, res: express.Response) => {
  let question = await Questions.find({_id: req.params.id})
  if (!question) {
    return res.status(404).json('Not found')
  }
  return res.status(200).json(question)
})

router.post('/question', async (req: express.Request, res: express.Response) => {
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
})

router.delete('/question/:id', async (req: express.Request, res: express.Response) => {
  let question = await Questions.findOne({ _id: req.params.id})

  if (!question) {
    return res.status(404).json('Not found')
  }
  question.delete()

  return res.status(200).json({
    ...question.toJSON()
  })
})

router.put('/question/:id', async (req: express.Request, res: express.Response) => {
  
  if(!req.body) return res.status(404).json('Not found')

  const { question, correctOption, option } = req.body
  let setNewValues = { question, correctOption, option }

  return Questions.findOneAndUpdate({ _id: req.params.id}, {$set: setNewValues}, {new: true}, (err, question) => {
    if (err) {
        return res.status(404).json('Not found')
    }
    return res.status(200).json({
      ...question
    })
  })

})



export default router
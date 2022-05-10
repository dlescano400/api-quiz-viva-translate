import express from "express"
import {
  listQuestions,
  questionsById,
  createQuestion,
  deleteQuestion,
  editQuestion
} from "../controller/questions.controller"

const router = express.Router()

router.get('/question', listQuestions)
router.get('/question/:id', questionsById)
router.post('/question', createQuestion)
router.delete('/question/:id', deleteQuestion)
router.put('/question/:id', editQuestion)

export default router

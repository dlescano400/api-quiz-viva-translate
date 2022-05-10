import express from "express"
import { createUserController, loginUser } from '../controller/users.controller'


const router = express.Router()

router.post('/user', createUserController)
router.post('/user/login', loginUser)

export default router
import { Request, Response } from "express"
import Users from '../models/User'

export const createUserController = async (req: Request, res: Response) => {
  if(!req.body) return res.send(400).json({res: 'no data'})
  const { user, pass } = req.body
  const newUser = new Users({
    user: user,
    pass: pass
  })
  newUser.save((err, newUser) => {
    if(err) console.log(err)
    console.log('se creo con exito el usuario :: ', newUser)
  })

  return res.json(newUser)
}

export const loginUser = async (req: Request, res: Response) => {
  const { user, pass } = req.body
  const userLogin = await Users.findOne({user: user, pass: pass})
  
  if(userLogin){
    return res.status(200).json({res: 'login successful', user: userLogin})
  } else {
    return res.status(404).json({error: 'no data'})
  }
}

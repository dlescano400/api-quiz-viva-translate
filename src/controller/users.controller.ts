import { Request, Response } from "express"
import Users from '../models/User'

export const createUserController = async (req: Request, res: Response) => {
  try {
    if(!req.body) return res.send(400).json({res: 'no data'})
    const { username, password } = req.body
    const newUser = new Users({
      user: username,
      pass: password
    })
    await newUser.save()
  
    return res.status(200).json({user: newUser})
  } catch (error) {
    return res.status(409).json({error})
  }

}

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body
  const userLogin = await Users.findOne({user: username, pass: password})
  
  if(userLogin){
    return res.status(200).json({result: 'successful', user: userLogin})
  } else {
    return res.status(404).json({error: 'no data'})
  }
}

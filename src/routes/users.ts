import express from "express"
import Users from '../../models/User'


const router = express.Router()

router.post('/user', async (req: express.Request, res: express.Response) => {
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
})

router.post('/user/login', async (req: express.Request, res: express.Response) => {
  const { user, pass } = req.body
  const exist = await Users.find({user: user, pass: pass})
  if(exist){
    return res.status(200).json({res: 'login successful', user: exist})
  } else {
    return res.status(404).json({error: 'no data'})
  }
})

export default router
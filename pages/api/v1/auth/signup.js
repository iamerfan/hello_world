import { MongoClient } from 'mongodb'
import { mongoUrl } from '../../../../config'
const bcrypt = require('bcrypt')
const saltRounds = 10

const handler = async (req, res) => {
   const client = await MongoClient.connect(mongoUrl)
   const users = client.db().collection('users')

   if (req.method === 'POST') {
      const { number, password } = req.body
      if (!number) return res.status(400).json({ message: 'اشکال در دریافت اطلاعات' })
      const unique = await users.findOne({ number: number })
      if (unique) return res.status(400).json({ message: 'این شماره تلفن در سیستم ثبت شده است' })

      bcrypt.hash(password, saltRounds, async function (err, hash) {
         if (err) throw err
         const result = await users.insertOne({ number, password: hash })
         client.close()
         if (!result) return res.status(400).json({ message: 'اشکال در ارسال اطلاعات' })
         if (result) return res.status(200).json(result)
      })
   }
}

export default handler

import { MongoClient } from 'mongodb'
import { mongoUrl } from '../../../config'

const handler = async (req, res) => {
   const client = await MongoClient.connect(mongoUrl)
   const productsCollection = client.db().collection('products')
   const categoriesCollection = client.db().collection('categories')
   const colorsCollection = client.db().collection('colors')

   if (req.method === 'POST') {
      const result = await productsCollection.insertOne(req.body)
      client.close()
      if (!result) return res.status(400).json({ message: 'اشکال در ارسال اطلاعات' })
      if (result) return res.status(200).json(result)
   }

   if (req.method === 'GET') {
      const items = await productsCollection.find({}).toArray()
      const categories = await categoriesCollection.find({}).toArray()
      const colors = await colorsCollection.find({}).toArray()
      client.close()
      if (!items || !categories || !colors)
         return res.status(400).json({ message: 'اشکال در دریافت اطلاعات' })
      return res.status(200).json({ items, categories, colors })
   }
}

export default handler

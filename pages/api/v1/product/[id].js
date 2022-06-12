import { MongoClient, ObjectId } from 'mongodb'
import { mongoUrl } from '../../../../config'
import { categories, colors, Items } from '../../../../components/data'

const handler = async (req, res) => {
   const id = parseInt(req.query.id)
   if (Number.isNaN(id)) return res.status(400).json({ message: 'اشکال در دریافت اطلاعات' })
   const client = await MongoClient.connect(mongoUrl)
   const productsCollection = client.db().collection('products')
   const categoriesCollection = client.db().collection('categories')

   if (req.method === 'GET') {
      // const result = await productsCollection.deleteMany({ keyword: [] })
      // const result = await productsCollection.insertMany(Items)

      //get product data and categories
      const product = await productsCollection.findOne({ id })
      const categories = await categoriesCollection.find({}).toArray()

      // // visited number +1
      await productsCollection.findOneAndUpdate({ id }, { $set: { visited: product.visited + 1 } })
      client.close()

      if (!product || !categories)
         return res.status(400).json({ message: 'اشکال در دریافت اطلاعات' })
      return res.status(200).json({ product, categories })
   }

   // if (req.method === 'POST') {
   //    const {} = req.body
   //    // const result = await productsCollection.deleteMany({ keyword: [] })
   //    // const result = await productsCollection.insertMany(Items)
   //    const product = await productsCollection.findOne({ _id: objectId })
   //    const categories = await categoriesCollection.find({}).toArray()
   //    client.close()
   //    if (!product || !categories)
   //       return res.status(400).json({ message: 'اشکال در دریافت اطلاعات' })
   //    return res.status(200).json({ product, categories })
   // }
}

export default handler

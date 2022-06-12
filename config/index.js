const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : process.env.PRODUCTION_URL

export const mongoUrl =
   'mongodb+srv://vsCode:erfan123@mongocluster.htzk2.mongodb.net/e-commerce?retryWrites=true&w=majority'

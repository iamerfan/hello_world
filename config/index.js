const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'http://localhost:3000'

export const mongoUrl =
   'mongodb+srv://vsCode:erfan123@mongocluster.htzk2.mongodb.net/e-commerce?retryWrites=true&w=majority'

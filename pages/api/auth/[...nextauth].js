import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

export default NextAuth({
   // Configure one or more authentication providers
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
   ],

   secret: process.env.NEXTAUTH_SECRET,
   adapter: MongoDBAdapter(clientPromise),
})

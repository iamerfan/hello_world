import Home from '../components/Home'
import { server } from '../config'
import { getCookie, setCookies } from 'cookies-next'
import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function HomePage({ items, categories }) {
   useEffect(() => {
      setCookies('categories', JSON.stringify(categories))
   }, [])

   return (
      <Layout>
         <Home products={items} categories={categories} />
      </Layout>
   )
}

export const getServerSideProps = async ctx => {
   const raw = await fetch(server + '/api/v1/products')
   const { items, categories, colors } = await raw.json()

   return {
      props: { items, categories, colors },
   }
}

import Price from '../../../components/Product/Price'
import Details from '../../../components/Product/Details'
import { server } from '../../../config'
import Head from 'next/head'
import Information from '../../../components/Product/Information'
import Layout from '../../../components/Layout'

export default function Product({ product, category, subItem }) {
   return (
      <Layout>
         <Head>
            <title>{product.title}</title>
         </Head>

         <div className='ItemsContainer'>
            <div className='Parted'>
               <Price product={product} />
               <Details product={product} category={category} subItem={subItem} />
            </div>
            <Information product={product} />
         </div>
      </Layout>
   )
}

export const getServerSideProps = async ({ params }) => {
   const result = await fetch(server + '/api/v1/product/' + params.id)
   const { product, categories } = await result.json()
   const category = await categories.find(category => category.categoryId === product.category.id)
   const subItem = await category.subItems.find(
      subItem => subItem.id === product.category.subitemId,
   )
   return {
      props: { product, category, subItem },
   }
}

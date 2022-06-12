import Head from 'next/head'
import Footer from './Footer/Index.js'
import Header from './Header/Index.js'

const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <title> NextJS E-commerce</title>
         </Head>
         <Header />
         {children}
         <Footer />
      </>
   )
}
export default Layout

import Head from 'next/head'
import Footer from './Footer/index.js'
import Header from './Header/index.js'

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

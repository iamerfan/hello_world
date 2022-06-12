import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

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

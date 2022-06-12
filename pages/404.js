import Link from 'next/link'

export default function FourOhFour() {
   return (
      <div className='NFContainer'>
         <main>
            <h1>خطای 404</h1>
            <h2>صفحه مورد نظر شما یافت نشد</h2>
            <Link href='/'>
               <a>برگشت به خانه</a>
            </Link>
         </main>
      </div>
   )
}

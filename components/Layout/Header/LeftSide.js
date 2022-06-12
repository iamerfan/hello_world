import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { CgShoppingBag, CgMoon, CgSun } from 'react-icons/cg'
import { RiUser6Line } from 'react-icons/ri'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function LeftSide() {
   const { data: session } = useSession()
   const [darkmode, setDarkmode] = useState(false)
   const [count, setCount] = useState(1)

   // eslint-disable-next-line
   useEffect(() => {
      document.documentElement.className = darkmode ? 'dark' : 'light'
   }, [darkmode])

   const handleTheme = () => {
      setDarkmode(!darkmode)
   }
   const handleLoginClick = () => {
      session ? signOut() : Router.push('/auth/login')
   }
   return (
      <div className='LeftSide'>
         <button className='DarkmodeBtn' onClick={handleTheme}>
            {darkmode ? <CgSun /> : <CgMoon />}
         </button>
         <button>
            <label>سبد خرید</label>
            {count > 0 && <div className='count'>{count}</div>}
            <i>
               <CgShoppingBag />
            </i>
         </button>
         <button className='AccountBtn' onClick={handleLoginClick}>
            <label>{session ? 'پنل کاربری' : 'ورود'}</label>
            <i>
               <RiUser6Line />
            </i>
         </button>
      </div>
   )
}

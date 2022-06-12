import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill, BsPersonFill, BsAsterisk } from 'react-icons/bs'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Login() {
   const { data: session } = useSession()
   const [showPassword, setShowPassword] = useState(false)
   const handleChange = e => {
      const value = e.target.value
      const label = e.target.previousSibling

      if (value) label.classList.add('active')
      if (!value) label.classList.remove('active')
   }
   const handleShowPassword = () => {
      setShowPassword(!showPassword)
   }
   const handleClick = () => {
      if (session) return signOut()
      if (!session) return signIn()
   }
   console.log(session)

   return (
      <div className='AuthContainer'>
         <div className='Auth'>
            <label className='title'>ورود به فروشگاه</label>
            {session && <label>{`Signed in as ${session.user.email}`}</label>}
            {!session && <label>Not signed in</label>}
            <div className='Main'>
               <div className='AutuInputContainer'>
                  <label className='AreaCode'>98+</label>

                  <label className='inputTitle'>
                     <BsPersonFill />
                     شماره تلفن
                  </label>
                  <input
                     onChange={handleChange}
                     placeholder='شماره تلفن خود را وارد کنید'
                     type='text'
                  />
               </div>
               <div className='AutuInputContainer'>
                  <label className='inputTitle'>
                     <BsAsterisk /> رمز عبور
                  </label>

                  <input
                     placeholder='رمز ورود خود را وارد کنید'
                     onChange={handleChange}
                     type={showPassword ? 'text' : 'password'}
                  />

                  <button className='ShowBtn' onClick={handleShowPassword}>
                     {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                  </button>
               </div>
               <div className='Link'>
                  <Link href='/auth/forgot' className='Link'>
                     فراموشی رمز ورود ؟
                  </Link>
               </div>
               <button className='AuthBtn' onClick={handleClick}>
                  ورود
               </button>
            </div>
            <button onClick={() => Router.push('/auth/signup')} className='SignupBtn'>
               ثبت نام در فروشگاه
            </button>
         </div>
      </div>
   )
}

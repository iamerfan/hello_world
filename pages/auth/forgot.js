import Link from 'next/link'
import Router from 'next/router'
import React, { useRef, useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import Error from '../../components/custom/Error'

export default function Forgot() {
   const [showPassword, setShowPassword] = useState(false)
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)

   const numberRef = useRef()

   const handleChange = e => {
      const value = e.target.value
      const label = e.target.previousSibling

      if (value) label.classList.add('active')
      if (!value) label.classList.remove('active')
   }
   const handleSubmit = e => {
      e.preventDefault()
      setError('')
      //check if number starts with 0
      const regExp = /^0[0-9].*$/
      const value = numberRef.current.value

      //validation
      if (!value) return setError('شماره تلفن نمیتواند خالی باشند')
      if (value.toString().length !== 10) return setError('شماره تلفن باید 10 رقم باشد')
      if (regExp.test(value)) return setError('شماره تلفن باید بدون صفر شروع شود ')
   }

   return (
      <div className='AuthContainer'>
         <div className='Auth'>
            <label className='title'>بازیابی رمز ورود</label>

            <form onSubmit={handleSubmit} className='Main'>
               {error && <Error>{error}</Error>}
               <label className='info'>
                  لطفا برای بازیابی رمز ورود شماره موبایل خود را وارد کنید
               </label>
               <div className='AutuInputContainer'>
                  <label className='AreaCode'>98+</label>

                  <label className='inputTitle'>
                     <BsPersonFill />
                     شماره تلفن
                  </label>
                  <input
                     ref={numberRef}
                     onChange={handleChange}
                     placeholder='شماره تلفن خود را وارد کنید'
                     type='number'
                  />
               </div>
               <button disabled={loading} className='AuthBtn'>
                  {loading ? 'لطفا منتظر بمانید ...' : 'بازیابی رمز ورود'}
               </button>
            </form>
            <button onClick={() => Router.push('/auth/login')} className='SignupBtn'>
               عضو هستید ؟ ورود به فروشگاه
            </button>
         </div>
      </div>
   )
}

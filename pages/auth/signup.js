import axios from 'axios'
import { getCookie, setCookies } from 'cookies-next'
import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { BsPersonFill, BsAsterisk, BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import Error from '../../components/custom/Error'
import Success from '../../components/custom/Success'
import { server } from '../../config'

export default function Signup({ userId }) {
   const [error, setError] = useState('')
   const [success, setSuccess] = useState('')
   const [loading, setLoading] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   const numberRef = useRef()
   const passwordRef = useRef()
   const confirmPasswordRef = useRef()

   const handleChange = e => {
      const value = e.target.value
      const label = e.target.previousSibling

      if (value) label.classList.add('active')
      if (!value) label.classList.remove('active')
   }
   const handleSubmit = async e => {
      e.preventDefault()
      setError('')
      setLoading(true)
      //check if number starts with 0
      const regExp = /^0[0-9].*$/
      const number = numberRef.current.value
      const password = passwordRef.current.value
      const confirmPassword = confirmPasswordRef.current.value

      //validation
      if (!number || !password || !confirmPassword) return setError('فیلد های نباید خالی باشند')
      if (password.length < 8) return setError('پسورد باید حداقل 8 کاراکتر باشد')
      if (password !== confirmPassword) return setError('رمز عبور با تکرار آن یکسان نیست')
      if (number.toString().length !== 10) return setError('شماره تلفن باید 10 رقم باشد')
      if (regExp.test(number)) return setError('شماره تلفن باید بدون صفر شروع شود ')

      const body = { number: `+98${number}`, password: password }
      try {
         const { data } = await axios.post(`${server}/api/v1/auth/signup`, body)
         if (data.acknowledged) {
            setSuccess('ثبت نام شما با موفقیت انجام شد . درحال انتقال به صفحه اصلی ...')
            setCookies('userId', data.insertedId)
            Router.push('/')
         }
      } catch (err) {
         setError(err.response.data.message)
      }
      setLoading(false)
   }

   const handleShowPassword = () => {
      setShowPassword(!showPassword)
   }

   return (
      <>
         <Head>
            <title>Sign Up | E-commerce</title>
         </Head>
         <div className='AuthContainer'>
            <div className='Auth'>
               <label className='title'>ثبت نام در فروشگاه</label>

               <form onSubmit={handleSubmit} className='Main'>
                  <Success>{success}</Success>
                  <Error>{error}</Error>
                  <label className='info'>لطفا برای ثبت نام شماره موبایل خود را وارد کنید</label>
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
                  <div className='AutuInputContainer'>
                     <label className='inputTitle'>
                        <BsAsterisk /> رمز عبور
                     </label>

                     <input
                        placeholder='رمز ورود خود را وارد کنید'
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        ref={passwordRef}
                     />

                     <button className='ShowBtn' onClick={handleShowPassword}>
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                     </button>
                  </div>
                  <div className='AutuInputContainer'>
                     <label className='inputTitle'>
                        <BsAsterisk /> تکرار رمز عبور
                     </label>

                     <input
                        placeholder='تکرار رمز ورود خود را وارد کنید'
                        onChange={handleChange}
                        ref={confirmPasswordRef}
                        type={showPassword ? 'text' : 'password'}
                     />

                     <button className='ShowBtn' onClick={handleShowPassword}>
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                     </button>
                  </div>
                  <button disabled={loading} className='AuthBtn'>
                     {loading ? 'لطفا منتظر بمانید ...' : 'ثبت نام'}
                  </button>
               </form>
               <button onClick={() => Router.push('/auth/login')} className='SignupBtn'>
                  عضو هستید ؟ ورود به فروشگاه
               </button>
            </div>
         </div>
      </>
   )
}

import Image from 'next/image'
import React from 'react'
import { BsPhoneFill, BsFillChatLeftTextFill } from 'react-icons/bs'

const Footer = () => {
   var currentTime = new Date()
   var year = currentTime.getFullYear()

   return (
      <div className='FooterContainer'>
         <div className='FooterLabel'>
            <label>فروشگاه اینترنتی پی جی سی</label>
         </div>
         <div className='main'>
            <div className='FooterColumn'>
               <ul>
                  <label>خدمات</label>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
               </ul>
            </div>
            <div className='FooterColumn'>
               <ul>
                  <label>راهنما</label>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
               </ul>
            </div>
            <div className='FooterColumn'>
               <ul>
                  <label>موضوعات</label>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
               </ul>
            </div>
            <div className='FooterColumn'>
               <ul>
                  <label>صفحات</label>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
                  <li>تست</li>
               </ul>
            </div>
            <div className='FooterColumn Links'>
               <label>راه های ارتباطی</label>
               <div className='Links'>
                  <Image width={48} height={48} src='/img/instagram.svg' alt='' />
                  <Image width={48} height={48} src='/img/twitter.svg' alt='' />
                  <Image width={48} height={48} src='/img/telegram-app.svg' alt='' />
               </div>
               <div className='contact'>
                  <div>
                     <i className='icon'>
                        <BsPhoneFill />
                     </i>

                     <label>021-3213213211</label>
                  </div>
                  <div>
                     <i className='icon'>
                        <BsFillChatLeftTextFill />
                     </i>
                     <label>09213213221</label>
                  </div>
               </div>
               <div className='Namads'>
                  <Image priority width={48} height={48} src='/img/ecunion.png' alt='' />
                  <Image priority width={48} height={48} src='/img/namad.png' alt='' />
                  <Image priority width={48} height={48} src='/img/samandehi.png' alt='' />
               </div>
            </div>
         </div>
         <div className='copyright'>Copyright © 2022 - {year} PGC | All Rights Reserved</div>
      </div>
   )
}
export default Footer

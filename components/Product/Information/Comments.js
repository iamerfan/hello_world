import React from 'react'
import { BsPerson, BsPen } from 'react-icons/bs'

export default function Comments({ activeView, product }) {
   const Comments = product.comments
   const mapComments = Comments.map((item, i) => {
      return (
         <div key={i} className='CommentContianer'>
            <div className='top'>
               <BsPerson className='icon' />
               <label className='name'>{item.name}</label>
               <label className='date'>({item.date})</label>
            </div>
            <p className='Comment'>{item.comment}</p>
            {item.answer && (
               <div className='AnswerContainer'>
                  <label>پاسخ</label>
                  {/* <p>{item.answer}</p> */}
               </div>
            )}
         </div>
      )
   })
   if (activeView === 2)
      return (
         <div className='ProductComments'>
            <div className='TopSection'>
               <label className='title'>دیدگاه‌ها</label>
               <button className='AddCommentBtn'>
                  <BsPen className='icon' />
                  اضافه کردن دیدگاه
               </button>
            </div>

            <div className='Comments'>
               {mapComments}
               {mapComments}
               {mapComments}
               {mapComments}
               {mapComments}
               {mapComments}
               {mapComments}
               {mapComments}
               {mapComments}
            </div>
         </div>
      )
}

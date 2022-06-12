import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link'
import { getCookie } from 'cookies-next'
import Image from 'next/image'

export default function Item({ item }) {
   //add semicolon to price's
   const priceSemi = item.price[0].newPrice.toLocaleString()
   const oldPriceSemi = item.price[0].oldPrice && item.price[0].oldPrice.toLocaleString()
   //count the off percenteg
   const countOff = () => {
      if (item.price[0].oldPrice < item.price[0].newPrice) return
      return 100 - (100 * item.price[0].newPrice) / item.price[0].oldPrice
   }
   const offer = countOff()
   const mapColors =
      item.colors &&
      item.colors.map((item, i) => {
         if (i < 3)
            return <i key={i} className='color' style={{ backgroundColor: item.colorHex }}></i>
      })

   const notOldPriceStyle = { justifyContent: 'center' }

   return (
      <Link href={`/product/${item.id}`}>
         <div className='Item'>
            {item.rating && (
               <div className='rating'>
                  <AiFillStar className='star' />
                  {item.rating}
               </div>
            )}
            {item.colors && item.colors.length > 0 && (
               <div className='colors'>
                  {item.colors.length > 3 && <AiOutlinePlus className='plus' />}
                  {mapColors}
               </div>
            )}

            {item.specialOffer && <label className='SpecialOffer'> پیشنهاد ویژه</label>}
            <div className='imageContainer'>
               <Image
                  layout='fill'
                  objectFit='contain'
                  className='itemImg'
                  src={item.img[0]}
                  alt=''
               />
            </div>

            <label className='description'>{item.title}</label>

            <div className='priceContainer' style={notOldPriceStyle}>
               <label className='price'>{priceSemi} تومان</label>
               {item.price[0].oldPrice && <label className='price old'>{oldPriceSemi} تومان</label>}
               {item.specialOffer && item.price[0].oldPrice && (
                  <label className='off'>%{offer}</label>
               )}
            </div>
         </div>
      </Link>
   )
}

import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
   BsCheck,
   BsTruck,
   BsChevronLeft,
   BsPercent,
   BsHeart,
   BsShare,
   BsHash,
   BsFilterLeft,
} from 'react-icons/bs'
import { MdCompare } from 'react-icons/md'

import ImageGallery from 'react-image-gallery'

const images = [
   {
      original: 'https://picsum.photos/id/1018/1000/600',
      thumbnail: 'https://picsum.photos/id/1018/1000/600',
   },

   {
      original: '/img/item.jpg',
      thumbnail: '/img/item.jpg',
   },
   {
      original: '/img/item.jpg',
      thumbnail: '/img/item.jpg',
   },
]

export default function Details({ product, category, subItem }) {
   console.log(product)
   const [activeColor, setActiveColor] = useState(product.colors[0])

   const handleActiveColor = colorId => {
      setActiveColor(colorId)
   }
   const mapColors = product.colors.map((color, i) => {
      return (
         <button
            onClick={() => handleActiveColor(color)}
            key={i}
            style={{ backgroundColor: color.colorHex }}
            className={`Color ${activeColor.colorId === color.colorId && 'active'}`}>
            <BsCheck className='check' />
         </button>
      )
   })
   const mapFeatures = product.info[0].data.map((item, i) => {
      return (
         <li key={i}>
            <label className='FeatureTitle'>برند : </label>
            <label className='FeatureData'>اپل</label>
         </li>
      )
   })
   const mapKeywords = product.keyword.map((keyword, i) => {
      if (i < 3)
         return (
            <label className='keyword' key={i}>
               # {keyword} {i < 2 && ','}
            </label>
         )
   })

   return (
      <div className='DetailsPanel'>
         <div className='Images'>
            <ImageGallery items={images} showPlayButton={false} lazyLoad originalHeight='100px' />
         </div>

         <div className='Details'>
            <div className='Top'>
               <div className='Category'>
                  <label className='CategoryLabel'>
                     <BsFilterLeft />
                  </label>
                  <Link href={`/search/category/${product.category.id}`}>{category.name}</Link>/
                  <Link href={`/search/subItem/${product.category.subitemId}`}>{subItem.name}</Link>
               </div>

               <label className='Title'>
                  گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4
                  گیگابایت
               </label>
               <div className='TitleEnglish'>
                  <label>Apple iPhone 13 2Sim 128GB</label>
                  <hr className='line' />
               </div>
            </div>
            <div className='Main'>
               <div className='Colors'>
                  <label>رنگ : {activeColor.name} </label>
                  {mapColors}
               </div>
               <div className='Features'>
                  <ul>
                     {/* {mapFeatures} */}
                     <li>
                        <BsChevronLeft className='icon' />
                        <label className='FeatureTitle'>برند : </label>
                        <label className='FeatureData'>اپل</label>
                     </li>
                     <li>
                        <BsChevronLeft className='icon' />
                        <label className='FeatureTitle'>برند : </label>
                        <label className='FeatureData'>اپل</label>
                     </li>
                     <li>
                        <BsChevronLeft className='icon' />
                        <label className='FeatureTitle'>برند : </label>
                        <label className='FeatureData'>اپل</label>
                     </li>
                  </ul>
               </div>
               <div className='AvalibilityInformation'>
                  <div className='Avalibility'>
                     <BsTruck className='icon' />
                     {product.avalibility > 0 ? 'موجود در انبار' : 'عدم موجودی'}
                  </div>
               </div>
            </div>
            <div className='Bottom'>
               <div className='tags'>
                  <label className='title'>
                     <BsHash className='icon' />
                     کلمات کلیدی :
                  </label>
                  <div className='keywords'>{mapKeywords}</div>
               </div>
               <div className='buttons'>
                  <button className='ComparisonBtn'>
                     <MdCompare className='icon' />
                     مقایسه
                  </button>
                  <button className='ShareBtn'>
                     <BsShare className='icon' />
                     اشتراک گذاری
                  </button>
                  <button className='FavoriteBtn'>
                     <BsHeart className='icon' />
                     پسندیدن
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

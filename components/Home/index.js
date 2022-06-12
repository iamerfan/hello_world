import React from 'react'
import BigSlider from './BigSlider'
import Categories from './Categories'
import Section from './Section'
import { Banners, Items, ads } from '../data'
// import { Fade, Reveal } from 'react-awesome-reveal'
import Image from 'next/image'

export default function Home({ products, categories }) {
   const specialOfferItems = products.filter(item => item.specialOffer)
   const mapAds = ads.map((item, i) => {
      return (
         <div key={i} className='SecondSection'>
            <Image layout='fill' src={item.url} alt='' />
         </div>
      )
   })

   return (
      <div className='Container Home'>
         <BigSlider data={Banners} />

         <div className='Parted'>
            <div className='Big'>
               <Section name='پربازدیدترین محصولات' items={products} />

               <BigSlider data={Banners} />

               <Categories categories={categories} />

               <Section name='جدیدترین محصولات' items={products} />

               <BigSlider data={Banners} />

               <Section name=' پیشنهادات ویژه' items={specialOfferItems} />

               <BigSlider data={Banners} />
            </div>

            <div className='Small'>{mapAds}</div>
         </div>
      </div>
   )
}

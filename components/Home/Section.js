import React from 'react'
import Slider from './Slider'

export default function Section({ name, items }) {
   return (
      <div className='SectionContainer'>
         <div className='Top'>
            <label className='name'>{name}</label>
            <label className='more'>مشاهده همه</label>
         </div>
         <div className='Main'>
            <Slider data={items} />
         </div>
      </div>
   )
}

import React, { useState } from 'react'
import { BsLayoutTextWindowReverse, BsGraphUp, BsChatQuote } from 'react-icons/bs'
import Comments from './Comments'
import CompeleteInformation from './CompeleteInformation'
import PriceGraph from './PriceGraph'

export default function Information({ product }) {
   const [activeView, setActiveView] = useState(0)

   const handleViewClick = viewId => {
      setActiveView(viewId)
   }

   return (
      <div className='Information'>
         <div className='Top'>
            <button onClick={() => handleViewClick(0)} className={activeView === 0 ? 'active' : ''}>
               <BsLayoutTextWindowReverse className='icon' />
               مشخصات محصول
            </button>
            <button onClick={() => handleViewClick(1)} className={activeView === 1 ? 'active' : ''}>
               <BsGraphUp className='icon' />
               نمودار قیمت
            </button>
            <button onClick={() => handleViewClick(2)} className={activeView === 2 ? 'active' : ''}>
               <BsChatQuote className='icon' />
               نظرات کاربران ({product.comments.length})
            </button>
         </div>

         <div className='Main'>
            <CompeleteInformation activeView={activeView} product={product} />
            <PriceGraph activeView={activeView} product={product} />
            <Comments activeView={activeView} product={product} />
         </div>
      </div>
   )
}

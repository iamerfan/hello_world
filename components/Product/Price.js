import { CgCheck, CgEye, CgInfo, CgArrowLeft } from 'react-icons/cg'
import { BiCheckShield, BiShoppingBag, BiPlus, BiMinus } from 'react-icons/bi'
import { useState } from 'react'

export default function Price({ product }) {
   const [count, setCount] = useState(1)

   const price = product.price[0].newPrice
   const oldPrice = product.price[0].oldPrice

   const pricePlusCount = price * count
   const oldPricePlusCount = oldPrice && oldPrice * count

   const priceSemi = pricePlusCount.toLocaleString()
   const oldPriceSemi = oldPrice && oldPricePlusCount.toLocaleString()

   const countOff = () => {
      if (oldPrice < price) return
      const offer = 100 - (100 * price) / oldPrice
      return Math.round(offer)
   }
   const offer = countOff()
   const notOldPriceStyle = !oldPrice || oldPrice > 0 ? { justifyContent: 'center' } : {}
   const handleCount = operation => {
      if (operation === 'Increase') setCount(count + 1)
      if (operation === 'Decrease') {
         if (count <= 1) return
         setCount(count - 1)
      }
   }
   return (
      <div className='PricePanel'>
         <div className='title'>خرید کالا</div>
         <div className='performance'>
            <div className='quality'>
               <CgCheck className='check' /> رضایت کالا : <i className='red'>{product.rating} </i>
               از 5
            </div>
            <div className='visited'>
               <CgEye className='eye' />
               تعداد بازدید : <i className='red'>{product.visited}</i> بار
            </div>
         </div>
         <div className='garantie'>
            <BiCheckShield className='shield' />
            گارانتی اصالت و سلامت فیزیکی کالا
         </div>

         <div className='Countity'>
            <label className='CountityTitle'>تعداد : </label>
            <label className='count'>{count}</label>

            <div className='CountityPanel'>
               <button className='Increase' onClick={() => handleCount('Increase')}>
                  <BiPlus />
               </button>
               <button className='Decrease' onClick={() => handleCount('Decrease')}>
                  <BiMinus />
               </button>
            </div>
         </div>
         <div className='Price'>
            <label className='priceLabel'>قیمت فروشنده:</label>
            <div className={`prices `} style={notOldPriceStyle}>
               {product.oldPrice && (
                  <div className='oldPrices'>
                     <label className='oldPrice'>
                        {oldPriceSemi} <i>تومان</i>
                     </label>
                     <div className='off'>{offer}%</div>
                  </div>
               )}
               <CgArrowLeft className='arrow' />
               <label className='newPrice'>
                  {priceSemi} <i>تومان</i>
               </label>
            </div>
         </div>
         <button className='AddToCartBtn'>
            <BiShoppingBag className='icon' />
            اضافه کردن به سبد خرید
         </button>
      </div>
   )
}

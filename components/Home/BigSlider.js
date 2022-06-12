import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper'
import Image from 'next/image'

export default function BigSlider({ data }) {
   const mapBigSliders =
      data &&
      data.map((item, i) => {
         return (
            <SwiperSlide key={i} className='SwiperSliderItem'>
               <Image
                  priority
                  layout='fill'
                  objectFit='cover'
                  className='bigSliderimg'
                  src={item}
                  alt=''
               />
            </SwiperSlide>
         )
      })
   return (
      <div className='BigSliderContainer'>
         <Swiper
            pagination={{
               clickable: true,
            }}
            navigation={true}
            effect={'fade'}
            autoplay={{
               delay: 2500,
            }}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className='mySwiper'>
            {mapBigSliders}
         </Swiper>
      </div>
   )
}

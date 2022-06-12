import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation } from "swiper"
import Item from "./Item"

export default function Slider({ data }) {
   const mapItems =
      data &&
      data.map((item, i) => {
         return (
            <SwiperSlide key={i}>
               <Item item={item} />
            </SwiperSlide>
         )
      })
   return (
      <Swiper
         breakpoints={{
            300: {
               slidesPerView: (data.length < 2 && data.length) || 2,
            },
            768: {
               slidesPerView: (data.length <= 3 && data.length) || 3,
            },
            1024: {
               slidesPerView: (data.length <= 5 && data.length) || 5,
            },
         }}
         navigation
         modules={[Navigation]}
         className="mySwiper">
         {mapItems}
      </Swiper>
   )
}

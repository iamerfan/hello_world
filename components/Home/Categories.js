import React from "react"

export default function Categories({ categories }) {
   return (
      <div className="SectionContainer">
         <label className="Top">دسته بندی های فروشگاه</label>
         <div className="CategoriesContainer">
            {categories &&
               categories.map((item, i) => {
                  return (
                     <div key={i} className="Category">
                        <img src="/img/item.jpg" alt="" />
                        <label> {item.name}</label>
                     </div>
                  )
               })}
         </div>
      </div>
   )
}

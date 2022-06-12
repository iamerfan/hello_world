import React from 'react'

export default function CompeleteInformation({ activeView, product }) {
   const mapInformation = product.info.map((info, i) => {
      return (
         <div className='InfoSection' key={i}>
            <label className='InfoTitleLabel'>{info.name}</label>
            {info.data.map((item, i) => {
               return (
                  <div key={i} className='InfoDataContainer'>
                     <div className='title'>{item.title}</div>
                     <div className='data'>
                        {item.information.map((info, i) => {
                           return (
                              <label key={i} className='info'>
                                 {info}
                              </label>
                           )
                        })}
                     </div>
                  </div>
               )
            })}
         </div>
      )
   })
   return <>{activeView === 0 && <div className='CompeleteInformation'>{mapInformation}</div>}</>
}

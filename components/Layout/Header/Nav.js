import React from 'react'
import { CgChevronDown } from 'react-icons/cg'
import { BsFilterLeft } from 'react-icons/bs'

export default function Nav({ items, active }) {
   return (
      <div className={`Nav ${active && 'active'}`}>
         <BsFilterLeft className='icon' />
         {items.map((item, i) => {
            return (
               <div key={i} className='NavItem'>
                  <label>
                     <i>{item.name}</i>
                  </label>
                  <div className='HiddenSection'>
                     <ul>
                        {item.subItems &&
                           item.subItems.map((subItem, i) => {
                              return <li key={i}>{subItem.name}</li>
                           })}
                     </ul>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

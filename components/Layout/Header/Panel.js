import React from 'react'
import Dropdown from '../../custom/Dropdown'
import LeftSide from './LeftSide'

export default function Panel({ items }) {
   return (
      <div className='PanelContainer'>
         <div className='PanelItem'>
            <LeftSide />
         </div>
         {items.map((item, i) => {
            return (
               <div key={i} className='PanelItem'>
                  <Dropdown name={item.name}>
                     <ul>
                        {item.subItems &&
                           item.subItems.map((subItem, i) => {
                              return <li key={i}>{subItem.name}</li>
                           })}
                     </ul>
                  </Dropdown>
               </div>
            )
         })}
      </div>
   )
}

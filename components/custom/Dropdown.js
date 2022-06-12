import React, { useState } from 'react'
import { CgChevronDown, CgChevronUp } from 'react-icons/cg'

export default function Dropdown({ children, name }) {
   const [checked, setChecked] = useState(false)

   const handleToggle = () => {
      setChecked(!checked)
   }
   const handleCheckChange = () => {
      //just for the error
   }
   return (
      <div className='DropdownContainer'>
         <input type='checkbox' className='Check' onChange={handleCheckChange} checked={checked} />
         <div className='Toggle' onClick={handleToggle}>
            {checked ? <CgChevronUp /> : <CgChevronDown />}
            <label>{name}</label>
         </div>
         <div className='HiddenSection'>{children}</div>
      </div>
   )
}

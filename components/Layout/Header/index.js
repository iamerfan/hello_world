import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { CgMenu } from 'react-icons/cg'
import Panel from './Panel'
import LeftSide from './LeftSide'
import Nav from './Nav'
import { categories } from '../../data'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
   const [panel, setPanel] = useState(false)
   const [show, setShow] = useState(false)
   const [lastScrollY, setLastScrollY] = useState(0)
   const [top, setTop] = useState(true)

   const handlePanel = e => {
      e.stopPropagation()
   }
   const handlePanelBtn = e => {
      e.stopPropagation()
      setPanel(!panel)
   }
   const controlNavbar = () => {
      if (typeof window !== 'undefined') {
         if (window.scrollY >= 150) {
            setTop(false)
         } else if (window.scrollY < 150) {
            setTop(true)
         }
         if (window.scrollY > lastScrollY && !top) {
            setShow(true)
         } else {
            setShow(false)
         }

         // remember current page location to use in the next move
         setLastScrollY(window.scrollY)
      }
   }

   useEffect(() => {
      if (typeof window !== 'undefined') {
         window.addEventListener('scroll', controlNavbar)
         return () => {
            window.removeEventListener('scroll', controlNavbar)
         }
      }
   }, [lastScrollY])
   useEffect(() => {
      const togglePanel = () => {
         setPanel(false)
      }

      window.addEventListener('click', togglePanel)

      return () => {
         window.removeEventListener('click', togglePanel)
      }
   }, [])

   return (
      <>
         <div className={`Header`}>
            <div className={`TopNav active ${show && 'hidden'} ${top && 'top'}`}>
               <div onClick={handlePanel} className={`Panel  ${panel && 'active'}`}>
                  <Panel items={categories} />
               </div>

               <button onClick={handlePanelBtn} className='PanelToggle'>
                  <CgMenu />
               </button>

               <LeftSide />

               <div className='SearchBar'>
                  <form className='InputContainer'>
                     <button type='submit' className='SearchButton'>
                        <IoSearchOutline />
                     </button>
                     <input type='text' placeholder='محصول مورد نظر خود را جستجو کنید ...' />
                     <div className='HiddenSection'></div>
                  </form>
               </div>

               <div className='Logo'>
                  <Image layout='fill' objectFit='contain' src='/vercel.svg' alt='' />
               </div>
            </div>
            <Nav items={categories} active={top ? true : false} />
         </div>
      </>
   )
}

import { BsCheck } from 'react-icons/bs'
export default function Error({ children }) {
   if (children)
      return (
         <div className='SuccessContainer'>
            <BsCheck className='icon' />
            <label className='SuccessText'>{children}</label>
         </div>
      )
}

import { BsExclamationCircle } from 'react-icons/bs'
export default function Error({ children }) {
   if (children)
      return (
         <div className='ErrorContainer'>
            <BsExclamationCircle className='icon' />
            <label className='ErrorText'>{children}</label>
         </div>
      )
}

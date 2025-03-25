import {AiOutlineClose} from 'react-icons/ai'
import {createPortal} from 'react-dom'

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
       <div 
       className='absolute top-0 z-50 backdrop-blur h-screen w-screen grid place-items-center'> 
        <div className='m-auto relative z-60 min-h-[200px] min-w-[80%] bg-white p-4'>
          <div className='flex justify-end'
       onClick={onClose}
          >
            <AiOutlineClose 
            className='self-end text-2xl cursor-pointer'/>
          </div>
          {children}
        </div>          
      </div>
      )}
    </>
  ,document.getElementById("modal-root"))
}

export default Model
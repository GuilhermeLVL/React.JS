import React from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag} from 'react-icons/ai'


const TopNav = () => {
  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4'>
    <div className='flex items-center'>
      
        <div className='cursor-pointer'>
            <AiOutlineMenu size={25}></AiOutlineMenu>
        </div>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Ponto
          <span> Verde</span>
        </h1>
    

    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
      <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
      <p className='p-2 text-bold'>Display</p>
    </div>

    </div>
    </div>
  )
}

export default TopNav
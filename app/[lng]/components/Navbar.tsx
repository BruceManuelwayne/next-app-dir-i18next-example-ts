import React from 'react'
import Image from 'next/image';
import Logo from '../../../public/images/logoheader.svg'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[50] w-full h-[120px] bg-transparent flex justify-between items-center px-10 md:px-40'>
        <div className='flex flex-row gap-3 items-center text-white'>
          <div className='flex content-center justify-center'> <Image
              src={Logo}
              alt="LOG Logo"
              width={100}
              height={100}
              className='w-full h-full  mx-auto'
            /></div>
           
        </div>
        <div className='flex flex-row gap-5 mb-2 text-white'>
              <div className=''>Link 1</div>
              <div className=''>Link 1</div>
              <div className=''>Link 1</div>
              <div className=''>Link 1</div>
            </div>
           
        

    </div>
  )
}

export default Navbar
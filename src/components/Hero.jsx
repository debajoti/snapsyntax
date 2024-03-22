import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='flex w-full justify-center item-center font-sans font-bold text-[5rem] leading-[4.5rem]'>
        <div className='text-center font-semibold mt-10'>
            SENIOR <br /><span className=''>EXPERIENCE</span> <br /> DESIGNER&#169; 
            <div className='flex flex-row justify-between w-[95%] ml-1'>
        <p className='text-xs'>lorem ipsum</p>
        <p className='text-xs'>cool</p>
            </div>
        </div>
      </div>
        <div className='flex w-full justify-center items-center mt-10'>
            <img className='rounded-xl' src="/fauzan-saari-CWNXlkekBeA-unsplash.jpg" width={250} height={500} alt="" />
        </div>
    </>
  )
}

export default Hero

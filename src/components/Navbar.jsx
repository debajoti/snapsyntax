import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='p-5 w-full flex flex-row justify-between font-bold font-sans'>
    <h2 className='text-3xl'>DevDash</h2>
        <div className='flex flex-auto m-3 ml-10 gap-5'>
        <a>About</a>
        <a>Work</a>
        </div>
        <div className='flex justify-right m-3 mr-4 gap-5'>
        <a>Let's Connect</a>
        <a>abc@gmail.com</a>
        </div>
        </div>
        </>
  )
}

export default Navbar

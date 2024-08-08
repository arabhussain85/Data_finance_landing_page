import React from 'react'
import { ReactTyped } from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
    <div className="max-w-[800] mt-[-86px] h-screen w-full mx-auto text-center flex flex-col justify-center">
        <p className='text-[#00df9a] font-bold p-2 '>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>Fast,Flexible Financing For</p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['B2B','B2C','SAAS']} typeSpeed={120} backSpeed={130} loop/>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">Monitor Your Data Analytics for increae revenue in B2B,B2C and SAAS</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:bg-[#00df9871] ease-in duration-100 '>Get Started</button>
    </div> 
    </div>
  )
}

export default Hero

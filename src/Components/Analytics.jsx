import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto' src={laptop} alt="" />
            <div className="flex flex-col justify-center">
                <p className='text-[#00df9a] uppercase font-bold '>Data Analytic Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo numquam aliquam suscipit vel modi odio ipsum, debitis officiis eius voluptas consectetur nobis necessitatibus facilis nisi? Voluptate suscipit deleniti magnam! Laborum.</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] cursor-pointer hover:bg-gray-900 ease-in duration-100 '>Get Started</button>
            </div>
        </div>
      
    </div>
  )
}

export default Analytics

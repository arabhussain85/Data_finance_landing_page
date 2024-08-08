import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className="w-full shadow-xl flex flex-col rounded-lg my-8 hover:scale-105 duration-300 ">
            <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={single} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center font-bold text-4xl'>$149</p>
            <div className='text-center font-medium'>
                <p className='border-b mx-8 py-2 mt-8'>500GB storage</p>
                <p className='border-b mx-8 py-2'>1 Granted user</p>
                <p className='border-b mx-8 py-2'>Send upto 2GB</p>
            </div>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-[#00df9a] cursor-pointer hover:bg-gray-900 ease-in duration-100'>Start Trial</button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col rounded-lg my-8  md:my-0 hover:scale-105 duration-300 ">
            <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={double} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
            <p className='text-center font-bold text-4xl'>$199</p>
            <div className='text-center font-medium'>
                <p className='border-b mx-8 py-2 mt-8'>1TB storage</p>
                <p className='border-b mx-8 py-2'>2 Granted user</p>
                <p className='border-b mx-8 py-2'>Send upto 10GB</p>
            </div>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-[#00df9a] cursor-pointer hover:bg-gray-900 ease-in duration-100'>Start Trial</button>
        </div>
        <div className="w-full my-8 shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 ">
            <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={triple} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Triple User User</h2>
            <p className='text-center font-bold text-4xl'>$249</p>
            <div className='text-center font-medium'>
                <p className='border-b mx-8 py-2 mt-8'>1.5TB storage</p>
                <p className='border-b mx-8 py-2'>3 Granted user</p>
                <p className='border-b mx-8 py-2'>Send upto 20GB</p>
            </div>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-[#00df9a] cursor-pointer hover:bg-gray-900 ease-in duration-100'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards

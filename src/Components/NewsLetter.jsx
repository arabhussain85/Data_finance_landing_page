import React from 'react'

const NewsLetter = () => {
    return (
        <div className='w-full py-16 text-white px-4 '>
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold '>
                        Want tips And Tricks To Optimize Your Flow</h1>
                    <p>Sign in to our newsletter and stay uptodate</p>
                </div >
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full  '>
                        <input className='p-3 flex w-full rounded-md text-black ' type="email" name="email" placeholder='Enter Email' id="" />
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 '>Notify Me</button>
                    </div>
                </div>
                <p>We care about protection of your Data. Read our <br />
                    <span className='cursor-pointer  text-[#00df9a]'>Privacy Policy</span>
                </p>
            </div>

        </div>
    )
}

export default NewsLetter

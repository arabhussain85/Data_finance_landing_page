import React from 'react'
import { FaInstagram, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[1240px] py-16 mx-auto px-4 grid lg:grid-cols-2 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]' >Arab.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, et quasi. Veritatis assumenda qui tempore dolores earum distinctio officia quas ab hic dolor, dolore similique voluptatum maxime consequatur provident id.</p>
                <div className='flex my-6 justify-between cursor-pointer md:w-[75%]'>
                    <FaInstagram size={30} />
                    <FaGithub size={30} />
                    <FaFacebook size={30} />
                    <FaTwitter size={30} />

                </div>
            </div>
            <div className="lg:col-span-3 flex justify-between ">
                <div>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Insights</li>
                        <li className='py-2 text-sm'>Commerece</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='py-2 text-sm'>Solutions</li>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>API status</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>JOBS</li>
                        <li className='py-2 text-sm'>Careers</li>
                        <li className='py-2 text-sm'>Press</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

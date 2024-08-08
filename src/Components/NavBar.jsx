import React,{useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const[nav,setNav] = useState(true);

  const handleNav = () =>{
    setNav(!nav);
  }
  return (
    <div className='sticky text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]' >Arab.</h1>
      <ul className=' hidden md:flex '>
        <li className="p-4">Home</li>
        <li className="p-4"> Company</li>
        <li className="p-4"> Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className=" cursor-pointer  block md:hidden " onClick={handleNav}>
       {!nav ? <IoMdClose size={40}/> : <CiMenuBurger size={40}/> }
     
      </div>
      <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 border-r bg-[#000300]  ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4' >Arab.</h1>
        <ul className='pt-12 uppercase  '>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-600"> Company</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-600"> Resources</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-600">About</li>
          <li className="p-4 hover:text-gray-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar

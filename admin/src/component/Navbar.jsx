import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-6 py-3 bg-gray-100'>
       <img  className="w-30 sm:w-40" src="https://res.cloudinary.com/dc5154n7n/image/upload/v1762509626/Screenshot_2025-11-07_152647_vioso6.png" alt="logo" />
       <button onClick={()=>setToken('')} className='bg-gray-900 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar

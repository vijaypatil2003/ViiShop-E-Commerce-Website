import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink to='/add' className = "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-lg">
                <img className='w-5 h-5' src="https://res.cloudinary.com/dc5154n7n/image/upload/v1761742139/add_icon_ppvv7p.png" alt="add icon" />
                <p className='hidden md:block'>Add Item</p>
            </NavLink>

            <NavLink to='/list' className = "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-lg">
                <img className='w-5 h-5' src="https://res.cloudinary.com/dc5154n7n/image/upload/v1761742140/order_icon_rmxuj9.png" alt="add icon" />
                <p className='hidden md:block'>List Item</p>
            </NavLink>

            <NavLink to='/orders' className = "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-lg">
                <img className='w-5 h-5' src="https://res.cloudinary.com/dc5154n7n/image/upload/v1761742140/order_icon_rmxuj9.png" alt="add icon" />
                <p className='hidden md:block'>Orders </p>
            </NavLink>

        </div>
      
    </div>
  )
}

export default Sidebar

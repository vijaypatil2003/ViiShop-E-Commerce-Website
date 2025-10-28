import React, { useContext, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { ShopContext  } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Navbar = () => {
    const {setShowSearch, getCartCount} = useContext(ShopContext)
    const [visible , setVisible] = useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/'><img src='https://res.cloudinary.com/dc5154n7n/image/upload/v1760176532/logo_faob54.png' className='w-25' alt='forever logo' /></Link>
{/* navbar tags home contact etc */}
        <ul className='hidden sm:flex fap-5 text-sm text-gray-700 gap-5'>

            <NavLink to="/" className="flex flex-col item-center gap-1" >
            <p>Home</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-red-700 hidden' />
            </NavLink>
            <NavLink to="/collection" className="flex flex-col item-center gap-1" >
            <p>Collection</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/about" className="flex flex-col item-center gap-1" >
            <p>About</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col item-center gap-1" >
            <p>Contact</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>

{/* search bar , profile  */}
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='search icon'/>
            
            <div className='group relative'>
                <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt='profile icon' /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-salt-100 text-gray-600 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'> Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>

                </div>
            </div>
{/* cart and its count */}
            <Link to='/cart' className='relative'>
                <img src='https://res.cloudinary.com/dc5154n7n/image/upload/v1760176534/cart_icon_oqmkos.png' className='w-5 min-w-5' alt='cart icon'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
            </Link>

            <img onClick={()=>setVisible(true)} src='https://res.cloudinary.com/dc5154n7n/image/upload/v1760176533/menu_icon_b48sg3.png' className='w-5 cursor-pointer sm:hidden' alt='menu icon' />
                
{/* sidebar menu for mobile screen  */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full' :'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src='https://res.cloudinary.com/dc5154n7n/image/upload/v1760176532/dropdown_icon_lugxmx.png' className='h-4 rotate-180' alt='droupdown icon' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/about'>About</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/contact'>Contact</NavLink>


                </div>
            </div>


        </div>

        
    </div>
  )
}

export default Navbar


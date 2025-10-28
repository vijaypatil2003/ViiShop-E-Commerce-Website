import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const [method , setMethod] = useState('cod');
  const navigate = useNavigate(ShopContext)


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

{/* -------------------- Left side  -------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={' INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input type='text' placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type='text' placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
          <input type='email' placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type='text' placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <div className='flex gap-3'>
          <input type='text' placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type='text' placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <div className='flex gap-3'>
          <input type='Number' placeholder='Zip COde' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type='text' placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type='Number' placeholder='Contact Number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>

{/* -------------------- Right side  -------------------- */}

      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'  METHOD'}/> 

    {/* ----------- Payment   Method Selection  ----------- */}

          <div className='flex gap-3 flex-col lg:flex-row '>
            <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border border-gray-200  p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-3.5 border rounded-full border-gray-300 ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="stripe_logo" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border border-gray-200  p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-3.5 border rounded-full border-gray-300 ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="razorpay_logo" />
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border border-gray-200  p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-3.5 border rounded-full border-gray-300 ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/Orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
